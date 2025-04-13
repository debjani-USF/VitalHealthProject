// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  console.log("✅ [ProtectedRoute] currentUser =", currentUser); // 🪵 Log it

  if (!currentUser || !currentUser.email) {
    console.log("⛔ Redirecting to /login"); // 🚨 Log if redirecting
    return <Navigate to="/login" replace />;
  }

  return children;
}
