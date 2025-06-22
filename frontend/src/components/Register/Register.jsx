import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const navigate = useNavigate();

  const onHandleInputs = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const signUpSuccess = () => {
    alert("User registered successfully");
    navigate("/login");
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    console.log(import.meta.env.VITE_API_URL);

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const signUpUrl = `https://medication-management-system-ov6n.onrender.com/api/users/signup`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };

      const response = await fetch(signUpUrl, options);
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};

      if (response.ok) {
        signUpSuccess();
      } else {
        alert(data.error || data.message || "Registration failed.");
      }

      setUser({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
      });
    } catch (error) {
      console.error("Network Error:", error);
      alert("Could not connect to server.");
    }
  };

  return (
    <section>
      <div className="website-name">
        <h1>M</h1>
      </div>

      <section className="register-container">
        <form className="register-form" onSubmit={formSubmit}>
          <div className="form-header">
            <h2>Create an account</h2>
            <p>Join MediCare today</p>
          </div>

          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              id="fullname"
              type="text"
              placeholder="John Doe"
              name="name"
              required
              value={user.name}
              onChange={onHandleInputs}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="example@mail.com"
              name="email"
              required
              value={user.email}
              onChange={onHandleInputs}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
              required
              value={user.password}
              onChange={onHandleInputs}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              name="confirmPassword"
              required
              value={user.confirmPassword}
              onChange={onHandleInputs}
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Select Role</label>
            <select
              id="role"
              name="role"
              value={user.role}
              onChange={onHandleInputs}
              required
            >
              <option value="">Select Role</option>
              <option value="patient">Patient</option>
              <option value="caretaker">Caretaker</option>
            </select>
          </div>

          <label className="checkbox">
            <input type="checkbox" required /> I agree to the{" "}
            <span className="link-text">Terms and Conditions</span>
          </label>

          <button type="submit" className="submit-button">
            Sign Up
          </button>

          <p className="switch-link">
            Already have an account?{" "}
            <span className="link-text" onClick={() => navigate("/login")}>
              Sign in
            </span>
          </p>
        </form>
      </section>
    </section>
  );
};

export default Register;