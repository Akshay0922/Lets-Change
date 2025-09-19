import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import "../loginForm.css"; // reuse the same styling

export const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams(); // token from URL

  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm your password"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:2209/api/auth/reset-password/${token}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: values.password }),
        });

        const data = await res.json();

        if (res.ok) {
          toast.success("Password reset successfully! You can now login.");
          resetForm();

          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          toast.error(data.message || "Failed to reset password");
        }
      } catch (err) {
        console.error("Reset password error:", err);
        toast.error("Something went wrong, please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="login-page">
      <div className="login-container">
        <form onSubmit={formik.handleSubmit} className="login-form">
          <h2>RESET PASSWORD</h2>

          <div className="input-box">
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            <label>New Password</label>
          </div>
          <div className="error">
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
          </div>

          <div className="input-box">
            <input
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            <label>Confirm Password</label>
          </div>
          <div className="error">
            {formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : ""}
          </div>

          <div className="submit-row">
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? (
                <AiOutlineLoading3Quarters className="spinner" />
              ) : (
                "Reset Password"
              )}
            </button>
          </div>

          <div
            className="login-signup-link"
            style={{ marginTop: "10px" }}
          >
            Remembered your password?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </div>
        </form>
      </div>
    </div>
  );
};