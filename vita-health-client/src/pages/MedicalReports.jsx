// src/pages/MedicalReports.jsx
import DashboardLayout from "../components/DashboardLayout";

export default function MedicalReports() {
  return (
    <DashboardLayout>
      <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>
          📄 Medical Reports
        </h2>

        <div style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "1rem",
          textAlign: "center",
          color: "#555",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
        }}>
          <p>No medical reports available at this time.</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
