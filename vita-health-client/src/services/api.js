// src/services/api.js

// ✅ GET all appointments
export const getAppointments = () => {
  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  return Promise.resolve({ data: appointments });
};

// ✅ CREATE a new appointment
export const createAppointment = (data) => {
  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  // Assign a unique ID
  const newAppointment = {
    id: Date.now(), // unique
    ...data,
  };

  appointments.push(newAppointment);
  localStorage.setItem("appointments", JSON.stringify(appointments));
  return Promise.resolve(newAppointment);
};

// ✅ UPDATE an existing appointment
export const updateAppointment = (id, updatedData) => {
  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  const updated = appointments.map((appt) =>
    appt.id === id ? { ...appt, ...updatedData, id } : appt // 💥 Ensure ID stays
  );

  localStorage.setItem("appointments", JSON.stringify(updated));
  return Promise.resolve();
};

// ✅ DELETE an appointment
export const deleteAppointment = (id) => {
  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  const filtered = appointments.filter((appt) => appt.id !== id);
  localStorage.setItem("appointments", JSON.stringify(filtered));
  return Promise.resolve();
};
