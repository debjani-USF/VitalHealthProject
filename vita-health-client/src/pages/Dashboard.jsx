import DashboardLayout from "../components/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Hello, John Doe 👋</h2>
      <p style={{ marginBottom: "2rem" }}>Welcome to your dashboard</p>

      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {/* Appointments */}
        <Card title="Upcoming Appointments" count="0" desc="No upcoming appointments" linkText="View all appointments" />

        {/* Medical Reports */}
        <Card title="Medical Reports" count="0" desc="No medical reports available" linkText="View all reports" />

        {/* Quick Actions */}
        <div style={cardStyle}>
          <h3>Quick Actions</h3>
          <button style={actionBtn}>📅 Book New Appointment</button>
          <button style={actionBtn}>👤 Update Profile</button>
        </div>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h3>Recent Appointments</h3>
        <p>No appointments found</p>
        <a href="#" style={{ color: "#1a73e8" }}>View all appointments</a>
      </div>
    </DashboardLayout>
  );
}

function Card({ title, count, desc, linkText }) {
  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{count}</p>
      <p>{desc}</p>
      <a href="#" style={{ color: "#1a73e8" }}>{linkText}</a>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "1.5rem",
  borderRadius: "0.75rem",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  minWidth: "280px",
  flex: "1",
};

const actionBtn = {
  display: "block",
  width: "100%",
  marginTop: "0.5rem",
  padding: "0.6rem 1rem",
  border: "1px solid #ddd",
  borderRadius: "0.5rem",
  backgroundColor: "#f1f1f1",
  cursor: "pointer",
};
