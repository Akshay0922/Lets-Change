// import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// import "./signupForm.css";

// const getPasswordStrength = (password) => {
//   let strength = 0;
//   if (password.length >= 6) strength++;
//   if (/[A-Z]/.test(password)) strength++;
//   if (/[0-9]/.test(password)) strength++;
//   if (/[^A-Za-z0-9]/.test(password)) strength++;
//   return strength;
// };

// const SignupForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showCPassword, setShowCPassword] = useState(false);
//   const [passwordStrength, setPasswordStrength] = useState(0);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       place: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("Full Name is required"),
//       email: Yup.string().email("Invalid email format").required("Email is required"),
//       place: Yup.string().required("Place is required"),
//       password: Yup.string()
//         .min(6, "Password must be at least 6 characters")
//         .required("Password is required"),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref("password"), null], "Passwords must match")
//         .required("Confirm your password"),
//     }),
//     onSubmit: (values) => {
//       console.log("Signup Data:", values);
//       alert("Signup Successful");
//     },
//   });

//   const handlePasswordChange = (e) => {
//     formik.handleChange(e);
//     setPasswordStrength(getPasswordStrength(e.target.value));
//   };

//   return (
//     <form onSubmit={formik.handleSubmit} className="signup-form">
//       <h2>Sign Up</h2>

//       <input
//         type="text"
//         name="name"
//         placeholder="Full Name"
//         value={formik.values.name}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//       />
//       {formik.touched.name && formik.errors.name && (
//         <div className="error">{formik.errors.name}</div>
//       )}

//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formik.values.email}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//       />
//       {formik.touched.email && formik.errors.email && (
//         <div className="error">{formik.errors.email}</div>
//       )}

//       <input
//         type="text"
//         name="place"
//         placeholder="Place"
//         value={formik.values.place}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//       />
//       {formik.touched.place && formik.errors.place && (
//         <div className="error">{formik.errors.place}</div>
//       )}

//       <div className="password-wrapper">
//         <input
//           type={showPassword ? "text" : "password"}
//           name="password"
//           placeholder="Password"
//           value={formik.values.password}
//           onChange={handlePasswordChange}
//           onBlur={formik.handleBlur}
//         />
//         <span
//           className="toggle-eye"
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ? <FaEyeSlash /> : <FaEye />}
//         </span>
//       </div>
//       {formik.touched.password && formik.errors.password && (
//         <div className="error">{formik.errors.password}</div>
//       )}

//       {formik.values.password && (
//         <div className="strength-bar">
//           <div className={`bar ${passwordStrength >= 1 ? "active" : ""}`}></div>
//           <div className={`bar ${passwordStrength >= 2 ? "active" : ""}`}></div>
//           <div className={`bar ${passwordStrength >= 3 ? "active" : ""}`}></div>
//           <div className={`bar ${passwordStrength >= 4 ? "active" : ""}`}></div>
//         </div>
//       )}

//       <div className="password-wrapper">
//         <input
//           type={showCPassword ? "text" : "password"}
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={formik.values.confirmPassword}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         <span
//           className="toggle-eye"
//           onClick={() => setShowCPassword(!showCPassword)}
//         >
//           {showCPassword ? <FaEyeSlash /> : <FaEye />}
//         </span>
//       </div>
//       {formik.touched.confirmPassword && formik.errors.confirmPassword && (
//         <div className="error">{formik.errors.confirmPassword}</div>
//       )}

//       <button type="submit" className="submit-btn">
//         Sign Up
//       </button>
//     </form>
//   );
// };

// export default SignupForm;














import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import "./signupForm.css";

const getPasswordStrength = (password) => {
  if (password.length < 6) return "Too Weak";
  if (password.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/)) return "Strong";
  if (password.match(/^(?=.*[A-Z])|(?=.*[0-9])/)) return "Medium";
  return "Weak";
};

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        resetForm();
        setPasswordStrength("");
        setTimeout(() => setSuccess(false), 4000);
      }, 2000);
    },
  });

  const handlePasswordChange = (e) => {
    formik.handleChange(e);
    setPasswordStrength(getPasswordStrength(e.target.value));
  };

  return (
    <div className="signup-container">
      {success && (
        <div className="success-card">
          🎉 Signup Successful! Welcome aboard.
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className="signup-form">
        <h2>SIGN UP</h2>

        {/* Full Name */}
        <div className="input-box">
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
        {formik.touched.name && formik.errors.name && (
          <div className="error">{formik.errors.name}</div>
        )}

        {/* Email */}
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
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}

        {/* Place */}
        <div className="input-box">
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
        {formik.touched.place && formik.errors.place && (
          <div className="error">{formik.errors.place}</div>
        )}

        {/* Password */}
        <div className="password-wrapper">
          <div className="input-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={handlePasswordChange}
              onBlur={formik.handleBlur}
              required
            />
            <label>Password</label>
          </div>
          <span className="toggle-eye" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {formik.touched.password && formik.errors.password && (
          <div className="error">{formik.errors.password}</div>
        )}

        {/* Password Strength Text */}
        {formik.values.password && (
          <div className={`strength-text ${passwordStrength.toLowerCase()}`}>
            Strength: {passwordStrength}
          </div>
        )}

        {/* Confirm Password */}
        <div className="password-wrapper">
          <div className="input-box">
            <input
              type={showCPassword ? "text" : "password"}
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            <label>Confirm Password</label>
          </div>
          <span className="toggle-eye" onClick={() => setShowCPassword(!showCPassword)}>
            {showCPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className="error">{formik.errors.confirmPassword}</div>
        )}

        {/* Submit Button */}
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? (
            <AiOutlineLoading3Quarters className="spinner" />
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;