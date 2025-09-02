import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import "./loginForm.css";

const LoginForm = ({ switchToSignup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        resetForm();
        setTimeout(() => setSuccess(false), 4000);
      }, 2000);
    },
  });

  return (
    <div className="login-container">
      {success && (
        <div className="success-card">Login Successful! Welcome back.</div>
      )}

      <form onSubmit={formik.handleSubmit} className="login-form">
        <h2>LOGIN</h2>

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
          {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
        </div>

        <div className="password-wrapper">
          <div className="input-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            <label>Password</label>
          </div>
          <span
            className="toggle-eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="error">
          {formik.touched.password && formik.errors.password
            ? formik.errors.password
            : ""}
        </div>

        <div className="submit-row">
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? (
              <AiOutlineLoading3Quarters className="spinner" />
            ) : (
              "Login"
            )}
          </button>

          <div className="login-signup-link">
            Don't have an account? <span onClick={switchToSignup}>Signup</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;