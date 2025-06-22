import { RxPerson } from "react-icons/rx";
import { RiGroupLine } from "react-icons/ri";
import "./navbar.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState("Patient");

  useEffect(() => {
    if (location.pathname.includes("caretaker")) {
      setRole("Caretaker");
    } else {
      setRole("Patient");
    }
  }, [location.pathname]);

  const onToggleRole = () => {
    if (role === "Patient") {
      setRole("Caretaker");
      navigate("/caretaker");
    } else {
      setRole("Patient");
      navigate("/patient");
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="company-name-container">
          <div className="logo">
            <Link to="/" className="nav-link">
              M
            </Link>
          </div>
          <div className="company-info">
            <h2 className="company-name">MediCare Companion</h2>
            <p className="role">{role} View</p>
          </div>
        </div>

        <div className="switch-role-container" onClick={onToggleRole}>
          {role === "Patient" ? (
            <RiGroupLine size={18} />
          ) : (
            <RxPerson size={18} />
          )}
          <span className="switch-text">
            Switch to {role === "Patient" ? "Caretaker" : "Patient"}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;