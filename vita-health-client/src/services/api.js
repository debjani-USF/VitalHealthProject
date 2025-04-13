//For API calls
import axios from "axios";

const BASE_URL = "https://localhost:7090/api"; // ASP.NET Core API

export const getAppointments = () =>
  axios.get(`${BASE_URL}/appointments`);

export const createAppointment = (data) =>
  axios.post(`${BASE_URL}/appointments`, data);

export const updateAppointment = (id, data) =>
  axios.put(`${BASE_URL}/appointments/${id}`, data);

export const deleteAppointment = (id) =>
  axios.delete(`${BASE_URL}/appointments/${id}`);
