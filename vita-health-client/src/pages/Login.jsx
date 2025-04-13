// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );
  
    if (matchedUser) {
      // 🟢 Set default role if not present
      const userWithRole = {
        ...matchedUser,
        role: matchedUser.role || "patient",
      };
  
      // ✅ Save updated user to currentUser
      localStorage.setItem("currentUser", JSON.stringify(userWithRole));
  
      // ✅ Also update the user in the users array (bonus fix)
      const updatedUsers = users.map((user) =>
        user.email === matchedUser.email ? userWithRole : user
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
  
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };
  

  return (
    <AuthLayout
      title="Login"
      subtitle="Enter your credentials to access your account"
      footerText="Don't have an account?"
      footerLink="/register"
      footerLinkText="Register"
    >
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </AuthLayout>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#1a4ed8",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
};
