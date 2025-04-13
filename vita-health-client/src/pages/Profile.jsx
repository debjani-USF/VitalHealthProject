// src/pages/Profile.jsx
import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Profile() {
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setUser(storedUser);
      setFormData({ name: storedUser.name, password: storedUser.password });
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedUser = { ...user, ...formData };
    setUser(updatedUser);
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = allUsers.map((u) =>
      u.email === updatedUser.email ? updatedUser : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setMessage("Profile updated successfully! ✅");
  };

  return (
    <DashboardLayout>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>👤 My Profile</h2>

        {message && <p style={{ color: "green" }}>{message}</p>}

        <form onSubmit={handleUpdate}>
          <label>Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Save Changes
          </button>
        </form>

        <div style={{ marginTop: "2rem" }}>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      </div>
    </DashboardLayout>
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
  backgroundColor: "#4f46e5",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
};
