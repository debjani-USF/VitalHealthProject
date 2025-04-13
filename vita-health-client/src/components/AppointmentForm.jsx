import { useEffect, useState } from "react";
import { createAppointment, updateAppointment } from "../services/api";

export default function AppointmentForm({ onCreated, editingAppt, onCancel }) {
  const [formData, setFormData] = useState({
    doctorName: "",
    date: "",
    notes: "",
  });

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (editingAppt) {
      setFormData({
        doctorName: editingAppt.doctorName,
        date: editingAppt.date,
        notes: editingAppt.notes,
      });
    } else {
      setFormData({
        doctorName: "",
        date: "",
        notes: "",
      });
    }
  }, [editingAppt]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { doctorName, date, notes } = formData;

    if (!doctorName || !date) {
      alert("Please fill out all required fields.");
      return;
    }

    const apptData = {
      patientName: currentUser.name, // ✅ this ensures correct patient
      doctorName,
      date,
      notes,
    };

    if (editingAppt) {
      await updateAppointment(editingAppt.id, { ...apptData, id: editingAppt.id });
      onCancel(); // reset edit state
    } else {
      await createAppointment(apptData);
    }

    onCreated(); // refresh list
    setFormData({ doctorName: "", date: "", notes: "" }); // reset form
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h3>{editingAppt ? "✏️ Edit Appointment" : "➕ Add Appointment"}</h3>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
      >
        {/* Don't show patientName field anymore */}
        <input
          name="doctorName"
          placeholder="Doctor Name"
          value={formData.doctorName}
          onChange={handleChange}
          required
        />
        <input
          name="date"
          type="datetime-local"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <textarea
          name="notes"
          placeholder="Notes"
          value={formData.notes}
          onChange={handleChange}
        />
        <button type="submit">
          {editingAppt ? "Update" : "Create"}
        </button>
        {editingAppt && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}
