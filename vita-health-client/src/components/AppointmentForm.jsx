import { useState, useEffect } from "react";
import { createAppointment, updateAppointment } from "../services/api";

export default function AppointmentForm({ onCreated, editingAppt, onCancel }) {
  const [form, setForm] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    notes: "",
  });

  useEffect(() => {
    if (editingAppt) {
      setForm({
        patientName: editingAppt.patientName,
        doctorName: editingAppt.doctorName,
        date: editingAppt.date.slice(0, 16), // trim for input[type=datetime-local]
        notes: editingAppt.notes,
      });
    } else {
      setForm({
        patientName: "",
        doctorName: "",
        date: "",
        notes: "",
      });
    }
  }, [editingAppt]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingAppt) {
        await updateAppointment(editingAppt.id, {
          ...form,
          id: editingAppt.id, 
        });
        onCancel(); // exit edit mode
      } else {
        await createAppointment(form);
      }

      setForm({
        patientName: "",
        doctorName: "",
        date: "",
        notes: "",
      });

      onCreated(); // refresh list
    } catch (err) {
      console.error("Error saving appointment", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h3>{editingAppt ? "✏️ Edit Appointment" : "➕ Add Appointment"}</h3>

      <input
        name="patientName"
        placeholder="Patient Name"
        value={form.patientName}
        onChange={handleChange}
        required
      />
      <br />
      <input
        name="doctorName"
        placeholder="Doctor Name"
        value={form.doctorName}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="datetime-local"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="notes"
        placeholder="Notes"
        value={form.notes}
        onChange={handleChange}
      />
      <br />

      <button type="submit">
        {editingAppt ? "Update Appointment" : "Create Appointment"}
      </button>

      {editingAppt && (
        <button
          type="button"
          onClick={onCancel}
          style={{ marginLeft: "1rem" }}
        >
          Cancel
        </button>
      )}
    </form>
  );
}
