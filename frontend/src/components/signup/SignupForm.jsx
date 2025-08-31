import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./signupForm.css";

// ✅ Password strength checker
const getPasswordStrength = (password) => {
  let strength = 0;
  if (password.length >= 6) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  return strength;
};

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      place: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      place: Yup.string().required("Place is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm your password"),
    }),
    onSubmit: (values) => {
      console.log("Signup Data:", values);
      alert("Signup Successful ✅");
    },
  });

  const handlePasswordChange = (e) => {
    formik.handleChange(e);
    setPasswordStrength(getPasswordStrength(e.target.value));
  };

  return (
    <form onSubmit={formik.handleSubmit} className="signup-form">
      <h2>Sign Up</h2>

      {/* Full Name */}
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name && (
        <div className="error">{formik.errors.name}</div>
      )}

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && (
        <div className="error">{formik.errors.email}</div>
      )}

      {/* Place */}
      <input
        type="text"
        name="place"
        placeholder="Place"
        value={formik.values.place}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.place && formik.errors.place && (
        <div className="error">{formik.errors.place}</div>
      )}

      {/* Password with eye + strength bar */}
      <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={handlePasswordChange}
          onBlur={formik.handleBlur}
        />
        <span
          className="toggle-eye"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      {formik.touched.password && formik.errors.password && (
        <div className="error">{formik.errors.password}</div>
      )}

      {/* Strength bar */}
      {formik.values.password && (
        <div className="strength-bar">
          <div className={`bar ${passwordStrength >= 1 ? "active" : ""}`}></div>
          <div className={`bar ${passwordStrength >= 2 ? "active" : ""}`}></div>
          <div className={`bar ${passwordStrength >= 3 ? "active" : ""}`}></div>
          <div className={`bar ${passwordStrength >= 4 ? "active" : ""}`}></div>
        </div>
      )}

      {/* Confirm Password */}
      <div className="password-wrapper">
        <input
          type={showCPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span
          className="toggle-eye"
          onClick={() => setShowCPassword(!showCPassword)}
        >
          {showCPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <div className="error">{formik.errors.confirmPassword}</div>
      )}

      <button type="submit" className="submit-btn">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;