import { useEffect, useState } from "react";
import { getAppointments, deleteAppointment } from "../services/api";
import AppointmentForm from "../components/AppointmentForm";
import DashboardLayout from "../components/DashboardLayout";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [editingAppt, setEditingAppt] = useState(null);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const fetchAppointments = () => {
    getAppointments()
      .then((res) => {
        const all = res.data;

        // Only show user's own appointments if role is patient
        const filtered =
          currentUser.role === "patient"
            ? all.filter((a) => a.patientName === currentUser.name)
            : all;

        setAppointments(filtered);
      })
      .catch((err) => console.error("Error fetching appointments", err));
  };

  const handleDelete = async (id) => {
    try {
      await deleteAppointment(id);
      fetchAppointments(); // refresh list
    } catch (err) {
      console.error("Error deleting appointment", err);
    }
  };

  const handleEdit = (appt) => {
    setEditingAppt(appt);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <DashboardLayout>
      <div style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
        <h2>📅 Appointments</h2>

        
        <AppointmentForm
          onCreated={fetchAppointments}
          editingAppt={editingAppt}
          onCancel={() => setEditingAppt(null)}
        />

        <div style={{ marginTop: "2rem" }}>
          {appointments.length === 0 ? (
            <div
              style={{
                padding: "2rem",
                background: "#f9fafc",
                borderRadius: "8px",
                textAlign: "center",
                color: "#555",
                border: "1px solid #e3e3e3",
              }}
            >
              <p>No appointments found.</p>
              <p>You can create one using the form above!</p>
            </div>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {appointments.map((appt) => (
                <li
                  key={appt.id}
                  style={{
                    background: "#f7f7f7",
                    border: "1px solid #ddd",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                  }}
                >
                  <strong>{appt.patientName}</strong> with{" "}
                  <em>{appt.doctorName}</em> on{" "}
                  {new Date(appt.date).toLocaleString()}
                  <br />
                  <small>📝 {appt.notes}</small>
                  <br />
                  <button onClick={() => handleEdit(appt)}>✏️ Edit</button>
                  <button
                    onClick={() => handleDelete(appt.id)}
                    style={{ marginLeft: "1rem", color: "red" }}
                  >
                    🗑️ Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
