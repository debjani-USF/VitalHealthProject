import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function DashboardLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          backgroundColor: "#f3f4f6",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "2px 0 8px rgba(0,0,0,0.05)",
        }}
      >
        <div>
          <img src={logo} alt="Vita Health Logo" style={{ width: "80px", marginBottom: "2rem" }} />

          <nav style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <Link to="/dashboard">📊 Dashboard</Link>
            <Link to="/appointments">📅 Appointments</Link>
            <Link to="/profile">👤 My Profile</Link>
            <Link to="/reports">📄 Medical Reports</Link>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          style={{
            background: "none",
            border: "none",
            color: "red",
            fontWeight: "bold",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "1rem",
            marginTop: "2rem",
          }}
        >
          🔓 Logout
        </button>
      </aside>

      {/* Main content */}
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          backgroundColor: "#f9fafb",
          padding: "2rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {children}
      </main>
    </div>
  );
}
