# 🌟 Vita Health

> Streamlining patient care with a clean and interactive web app built using **React** and **.NET Core**.

---

## 🏥 Project Overview
**Vita Health** is a full-stack medical appointment and records management system designed for both **patients** and **doctors**. It helps users:
- Book, view, edit, and delete appointments 🗓️
- Manage medical profiles 👤
- View medical reports 📄 (simplified)
- Authenticate securely via local storage 🔐

---

## 🚀 Tech Stack

### 💻 Frontend
- React (Vite setup)
- React Router DOM
- Tailwind CSS (or custom styling)
- LocalStorage for auth/session

### 🖥️ Backend
- ASP.NET Core Web API
- C#
- In-memory storage using `List<T>` (simulating a database)

---

## 📁 Folder Structure
```
📦 VitaHealthProject
├── 📂 VitaHealthAPI          # .NET Core Web API backend
├── 📂 vita-health-client     # React frontend
```

---

## 🔐 Authentication Logic

- On login, user details are stored in `localStorage` under `currentUser`
- Routes are protected using a custom `ProtectedRoute.jsx`
- Role-based access: Patients see their own appointments only

---

## ⚙️ Services Explained

### 📁 `services/api.js`
Handles all **frontend API interactions with localStorage** (simulating REST API):

- `getAppointments()` - fetches all appointments
- `createAppointment(data)` - adds a new appointment to localStorage
- `updateAppointment(id, data)` - modifies appointment by ID
- `deleteAppointment(id)` - removes an appointment

### 📁 `components/`
- `DashboardLayout.jsx` - Unified layout for all logged-in pages (sidebar, logout)
- `ProtectedRoute.jsx` - Protects routes if user isn't authenticated
- `AppointmentForm.jsx` - Handles both create/edit logic
- `Sidebar.jsx` - Navigation drawer with icons and links

### 📁 `pages/`
- `Login.jsx` - Authenticates users, sets session
- `Register.jsx` - Allows new users to register
- `Dashboard.jsx` - Summary of upcoming appointments
- `Appointments.jsx` - Full list of user-specific appointments
- `Profile.jsx` - Update name/password
- `Reports.jsx` - Placeholder for medical reports view

---

## 🧪 How to Run the App

### 1. Clone the Repo
```bash
git clone https://github.com/YOUR_USERNAME/VitalHealthProject.git
cd VitalHealthProject
```

### 2. Start the Frontend
```bash
cd vita-health-client
npm install
npm run dev
```

### 3. Start the Backend
```bash
cd ../VitaHealthAPI
# Open in Visual Studio or run:
dotnet run
```

---

## 🌱 How to Contribute
1. Fork the repo 🍴
2. Create your branch `git checkout -b feature/awesome-feature`
3. Commit your changes `git commit -m "feat: add awesome feature"`
4. Push to branch `git push origin feature/awesome-feature`
5. Open a PR 🚀

---

## 📦 Future Enhancements
- 🔄 Real-time backend integration (MongoDB / SQL Server)
- 📧 Email appointment confirmations
- 📎 Upload/download medical records (PDFs)

---

## 💬 License
MIT — Use this freely for learning, projects, or extensions.

> "Building modern health systems, one line at a time!" 🧠💻

