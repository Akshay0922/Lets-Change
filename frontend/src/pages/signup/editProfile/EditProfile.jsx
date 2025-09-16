import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash, FaCamera } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./editProfile.css";

export const EditProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const formik = useFormik({
    initialValues: {
      name: storedUser?.name || "",
      email: storedUser?.email || "",
      place: storedUser?.place || "",
      password: "",
      profilePic: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      place: Yup.string().required("Place is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("place", values.place);
        if (values.password) formData.append("password", values.password);
        if (values.profilePic) formData.append("profilePic", values.profilePic);

        const res = await fetch("http://localhost:2209/api/profile/me", {
          method: "PUT",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          body: formData,
        });

        const data = await res.json();

        if (res.ok) {
          toast.success("Profile updated successfully!");
          localStorage.setItem("user", JSON.stringify(data.user));
          setTimeout(() => navigate("/"), 1200);
        } else {
          toast.error(data.message || "Update failed");
        }
      } catch {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue("profilePic", file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="edit-profile-page">
      <div className="edit-profile-container">
        <form onSubmit={formik.handleSubmit} className="edit-profile-form">
          <h2>Edit Profile</h2>

          {/* Profile Pic */}
          <div className="edit-profile-upload-wrapper">
            <div className="edit-profile-avatar-container">
              <img
                src={
                  preview ||
                  (storedUser?.profilePic
                    ? `http://localhost:2209/${storedUser.profilePic}`
                    : "/default-avatar.png")
                }
                alt="Profile Preview"
                className="edit-profile-avatar-preview"
              />
              <label htmlFor="profilePic" className="edit-profile-camera-label">
                <FaCamera className="edit-profile-camera-icon" />
              </label>
            </div>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          {/* Full Name */}
          <div className="edit-profile-input-box">
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            <label>Full Name</label>
          </div>
          <div className="edit-profile-error">
            {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
          </div>

          {/* Email */}
          <div className="edit-profile-input-box">
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            <label>Email</label>
          </div>
          <div className="edit-profile-error">
            {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
          </div>

          {/* Place */}
          <div className="edit-profile-input-box">
            <input
              type="text"
              name="place"
              value={formik.values.place}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            <label>Place</label>
          </div>
          <div className="edit-profile-error">
            {formik.touched.place && formik.errors.place ? formik.errors.place : ""}
          </div>

          {/* Password */}
          <div className="edit-profile-password-wrapper">
            <div className="edit-profile-input-box">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label>New Password (optional)</label>
            </div>
            <span
              className="edit-profile-toggle-eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="edit-profile-error">
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
          </div>

          {/* Submit */}
          <div className="edit-profile-submit-row">
            <button
              type="submit"
              className="edit-profile-submit-btn"
              disabled={loading}
            >
              {loading ? <AiOutlineLoading3Quarters className="edit-profile-spinner" /> : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
