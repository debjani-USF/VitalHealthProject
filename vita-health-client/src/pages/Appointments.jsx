import { useEffect, useState } from "react";
import { getAppointments, deleteAppointment } from "../services/api";
import AppointmentForm from "../components/AppointmentForm";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [editingAppt, setEditingAppt] = useState(null);

  const fetchAppointments = () => {
    getAppointments()
      .then((res) => setAppointments(res.data))
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
    <div>
      <h2>📅 Appointments</h2>

      <AppointmentForm
  onCreated={fetchAppointments}
  editingAppt={editingAppt}
  onCancel={() => setEditingAppt(null)}
        />


      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <ul>
          {appointments.map((appt) => (
            <li key={appt.id}>
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
  );
}
