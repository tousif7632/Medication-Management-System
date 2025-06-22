# Medication Management System

A full-stack web application designed to help patients and caretakers manage medications efficiently. The system allows users to register, log in, add medications, mark them as taken, and track adherence — all powered by a Node.js backend with SQLite and a React frontend.

---

## 🌟 Features

### ✅ User Authentication
- Secure signup and login system using SQLite database.
- Role-based authentication for **Patients** and **Caretakers**.

### 💊 Medication Management (CRUD)
- Add medications with name, dosage, and frequency.
- View a list of medications.
- Mark medications as taken for a particular day.
- Track adherence percentage based on scheduled vs. taken doses.

### 📊 Dashboard (Patient/Caretaker)
- Role-based dashboard selection.
- Live display of medication history.
- Calendar view with medication status (Taken, Missed, Today).

### 📁 Additional UI Features
- Medication photo upload interface (UI built).
- Notification settings interface (UI built).
- Clean modular structure for easy maintenance.

---

## 🛠 Technology Stack

### Frontend
- React (JavaScript)
- React Query
- React Calendar
- CSS (custom + React Calendar override)

### Backend
- Node.js
- Express.js
- SQLite (file-based DB)

---

## 🚀 Project Setup

### 🔹 Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
Install dependencies:

bash
Copy
Edit
npm install
Start the backend server:

bash
Copy
Edit
node index.js
Ensure port 5000 is free (or change it in the code if needed).

🔹 Frontend Setup
Navigate to the frontend folder:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the frontend server:

bash
Copy
Edit
npm start
The frontend runs by default on http://localhost:3000

🧪 Running Tests
We use Vitest for component and logic testing.

Navigate to frontend/ or backend/ (depending on where tests are written).

Run:

bash
Copy
Edit
npx vitest
✅ Sample Test Cases Covered:
User authentication logic

Medication addition and marking

Rendering of dashboard components

⚙️ Features in Progress / Optional Features
Real-time update (WebSocket) system

Medication proof upload system

Graphical adherence tracking over time

Notification reminders

✅ Form Validation & Error Handling
All forms (Login, Signup, Add Medication) use validation.

Input fields are sanitized on the backend.

User-friendly error messages and loading indicators included.

🔒 Security
Passwords are hashed before storing.

Inputs are sanitized to prevent SQL injection.

APIs follow security best practices.

🌐 Deployment (Optional)
If deployed, update this section:

Frontend: [Vercel/Netlify link]

Backend: [Render/Heroku link]

🤝 Acknowledgments
Built as part of the Website Learners assignment.

📞 Contact
Created by [Md Tousif Alam]
Email: [your.email@example.com]
GitHub: [github.com/yourusername]

yaml
Copy
Edit

---

### 📌 Notes:
- Replace `[Md Tousif Alam]`, email, GitHub link, and any placeholder links with your own.
- If you have implemented Phase 2 or 3 features, mention them clearly.
- Add screenshots or video links if required by the assignment reviewer.

Let me know if you'd like a **PDF version** or want help writing **Git commit messages** for your final submission.








