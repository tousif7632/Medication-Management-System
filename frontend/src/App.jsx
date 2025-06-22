import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PatientDashboard from "./components/PatientDashboard/PatientDashboard";
import CareTakerDashboard from "./components/CareTakerDashboard/CareTakerDashboard";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/caretaker" element={<CareTakerDashboard />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;