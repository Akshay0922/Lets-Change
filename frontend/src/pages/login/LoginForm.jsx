// import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// import "./loginForm.css";

// export const LoginForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email("Invalid email format")
//         .required("Email is required"),
//       password: Yup.string().required("Password is required"),
//     }),
//     onSubmit: async (values, { resetForm }) => {
//       setLoading(true);
//       try {
//         const res = await fetch("http://localhost:2209/api/auth/login", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(values),
//         });

//         const data = await res.json();

//         if (res.ok) {
//           toast.success("Login successful! Welcome back.");
//           resetForm();

//           localStorage.setItem("token", data.token);
//           localStorage.setItem("user", JSON.stringify(data.user));

//           console.log("User:", data.user);

//           setTimeout(() => {
//             navigate("/");
//           }, 1500);
//         } else {
//           toast.error(data.message || "Invalid credentials");
//         }
//       } catch (error) {
//         console.error("Login error:", error);
//         toast.error("Something went wrong, please try again.");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <form onSubmit={formik.handleSubmit} className="login-form">
//           <h2>LOGIN</h2>

//           <div className="input-box">
//             <input
//               type="email"
//               name="email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               required
//             />
//             <label>Email</label>
//           </div>
//           <div className="error">
//             {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
//           </div>

//           <div className="password-wrapper">
//             <div className="input-box">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 required
//               />
//               <label>Password</label>
//             </div>
//             <span
//               className="toggle-eye"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>
//           <div className="error">
//             {formik.touched.password && formik.errors.password
//               ? formik.errors.password
//               : ""}
//           </div>

//           <div className="submit-row">
//             <button type="submit" className="submit-btn" disabled={loading}>
//               {loading ? (
//                 <AiOutlineLoading3Quarters className="spinner" />
//               ) : (
//                 "Login"
//               )}
//             </button>

//             <div className="login-signup-link">
//               Don't have an account?{" "}
//               <span onClick={() => navigate("/signup")}>Signup</span>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };








import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./loginForm.css";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:2209/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (res.ok) {
          toast.success("Login successful! Welcome back.");
          resetForm();

          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));

          console.log("User:", data.user);

          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          toast.error(data.message || "Invalid credentials");
        }
      } catch (error) {
        console.error("Login error:", error);
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

          <div className="forgot-password" onClick={() => navigate("/forgot-password")}>
            Forgot Password?
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
              Don't have an account?{" "}
              <span onClick={() => navigate("/signup")}>Signup</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};