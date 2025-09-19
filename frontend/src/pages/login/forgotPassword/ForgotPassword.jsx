import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "../loginForm.css";

export const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:2209/api/auth/forgot-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (res.ok) {
          toast.success(
            "Password reset link sent! Check your email inbox."
          );
          resetForm();

          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          toast.error(data.message || "Failed to send reset link");
        }
      } catch (error) {
        console.error("Forgot password error:", error);
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
          <h2>FORGOT PASSWORD</h2>

          <div className="input-box">
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
          <div className="error">
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </div>

          <div className="submit-row">
            <button type="submit" className="send-reset-link-btn" disabled={loading}>
              {loading ? (
                <AiOutlineLoading3Quarters className="spinner" />
              ) : (
                "Send Reset Link"
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