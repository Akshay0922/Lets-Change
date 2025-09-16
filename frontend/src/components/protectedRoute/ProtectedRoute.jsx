import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // token login ke baad store hoga
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};