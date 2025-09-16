// import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { toast } from "react-toastify";

// import "./signupForm.css";

// const getPasswordStrength = (password) => {
//   if (password.length < 6) return "Too Weak";
//   if (password.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/)) return "Strong";
//   if (password.match(/^(?=.*[A-Z])|(?=.*[0-9])/)) return "Medium";
//   return "Weak";
// };

// const SignupForm = ({ switchToLogin, onClose }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showCPassword, setShowCPassword] = useState(false);
//   const [passwordStrength, setPasswordStrength] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

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

//     onSubmit: async (values, { resetForm }) => {
//       setLoading(true);
//       try {
//         const res = await fetch("http://localhost:2209/api/auth/signup", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(values),
//         });

//         const data = await res.json();

//         if (res.ok) {
//           toast.success("Signup successful! Welcome aboard.");
//           resetForm();
//           setPasswordStrength("");
//           setTimeout(() => {
//             onClose();
//           }, 1500);
//           setTimeout(() => setSuccess(false), 4000);
//         } else {
//           toast.error(`${data.message}`);
//         }
//       } catch {
//         toast.error("Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     },

//   });

//   const handlePasswordChange = (e) => {
//     formik.handleChange(e);
//     setPasswordStrength(getPasswordStrength(e.target.value));
//   };

//   return (
//     <div className="signup-container">
//       {success && (
//         <div className="success-card">
//           Signup Successful! Welcome aboard.
//         </div>
//       )}

//       <form onSubmit={formik.handleSubmit} className="signup-form">
//         <h2>SIGN UP</h2>

//         <div className="input-box">
//           <input
//             type="text"
//             name="name"
//             value={formik.values.name}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             required
//           />
//           <label>Full Name</label>
//         </div>
//         <div className="error">
//           {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
//         </div>

//         <div className="input-box">
//           <input
//             type="email"
//             name="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             required
//           />
//           <label>Email</label>
//         </div>
//         <div className="error">
//           {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
//         </div>

//         <div className="input-box">
//           <input
//             type="text"
//             name="place"
//             value={formik.values.place}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             required
//           />
//           <label>Place</label>
//         </div>
//         <div className="error">
//           {formik.touched.place && formik.errors.place ? formik.errors.place : ""}
//         </div>

//         <div className="password-wrapper">
//           <div className="input-box">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={formik.values.password}
//               onChange={handlePasswordChange}
//               onBlur={formik.handleBlur}
//               required
//             />
//             <label>Password</label>
//             {formik.values.password && (
//               <span
//                 className={`strength-inside ${passwordStrength.toLowerCase()}`}
//               >
//                 {passwordStrength}
//               </span>
//             )}
//           </div>
//           <span
//             className="toggle-eye"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? <FaEyeSlash /> : <FaEye />}
//           </span>
//         </div>
//         <div className="error">
//           {formik.touched.password && formik.errors.password
//             ? formik.errors.password
//             : ""}
//         </div>

//         <div className="password-wrapper">
//           <div className="input-box">
//             <input
//               type={showCPassword ? "text" : "password"}
//               name="confirmPassword"
//               value={formik.values.confirmPassword}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               required
//             />
//             <label>Confirm Password</label>
//           </div>
//           <span
//             className="toggle-eye"
//             onClick={() => setShowCPassword(!showCPassword)}
//           >
//             {showCPassword ? <FaEyeSlash /> : <FaEye />}
//           </span>
//         </div>
//         <div className="error">
//           {formik.touched.confirmPassword && formik.errors.confirmPassword
//             ? formik.errors.confirmPassword
//             : ""}
//         </div>

//         <div className="submit-row">
//           <button type="submit" className="submit-btn" disabled={loading}>
//             {loading ? (
//               <AiOutlineLoading3Quarters className="spinner" />
//             ) : (
//               "Sign Up"
//             )}
//           </button>

//           <div className="signup-login-link">
//             Already have an account? <span onClick={switchToLogin}>Login</span>
//           </div>

//         </div>

//       </form>
//     </div>
//   );
// };

// export default SignupForm;























import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

import "./signupForm.css";

const getPasswordStrength = (password) => {
  if (password.length < 6) return "Too Weak";
  if (password.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/)) return "Strong";
  if (password.match(/^(?=.*[A-Z])|(?=.*[0-9])/)) return "Medium";
  return "Weak";
};

const SignupForm = ({ switchToLogin, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [loading, setLoading] = useState(false);

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

    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:2209/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (res.ok) {
          toast.success("Signup successful! Welcome aboard.");
          resetForm();
          setPasswordStrength("");

          // ✅ save token in localStorage (if backend sends it)
          if (data.token) {
            localStorage.setItem("token", data.token);
          }
          if (data.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
          }

          setTimeout(() => {
            onClose();
          }, 1500);
        } else {
          toast.error(data.message || "Signup failed");
        }
      } catch {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    },
  });

  const handlePasswordChange = (e) => {
    formik.handleChange(e);
    setPasswordStrength(getPasswordStrength(e.target.value));
  };

  return (
    <div className="signup-container">
      <form onSubmit={formik.handleSubmit} className="signup-form">
        <h2>SIGN UP</h2>

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
        <div className="error">
          {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
        </div>

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
        <div className="error">
          {formik.touched.place && formik.errors.place ? formik.errors.place : ""}
        </div>

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
            {formik.values.password && (
              <span
                className={`strength-inside ${passwordStrength.toLowerCase()}`}
              >
                {passwordStrength}
              </span>
            )}
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
          <span
            className="toggle-eye"
            onClick={() => setShowCPassword(!showCPassword)}
          >
            {showCPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
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
              "Sign Up"
            )}
          </button>

          <div className="signup-login-link">
            Already have an account? <span onClick={switchToLogin}>Login</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;