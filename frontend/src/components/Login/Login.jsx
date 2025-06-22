import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Cookies from "js-cookie";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value.trim(),
    }));
  };
  const signInSuccess = (access_token, role) => {
    Cookies.set("role", role);
    Cookies.set("token", access_token, { expires: 30 });

    navigate("/");
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const loginUrl = "http://localhost:5000/api/users/login";
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log("Login Response:", data);

      if (response.ok) {
        alert(`Welcome back, ${user.email}`);
        signInSuccess(data.access_token, data.user.role);
        setUser({ email: "", password: "" });
      } else {
        setError(data.error || "Login failed.");
        alert("Invalid login credentials.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("Server error during login.");
    }
  };

  return (
    <section>
      <div className="website-name">
        <h1>MediCare</h1>
      </div>

      <section className="login-container">
        <form className="login-form" onSubmit={onSubmitForm}>
          <div className="text-center">
            <h2 className="heading">Sign in to your account</h2>
            <p className="subtext">Welcome back to MediCare</p>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputs}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputs}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>
            <button type="button" className="link-button">
              Forgot password?
            </button>
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>

          {error && <p className="error-message">{error}</p>}

          <p className="login-text">
            Don’t have an account?{" "}
            <span className="link-button" onClick={() => navigate("/register")}>
              Sign up
            </span>
          </p>
        </form>
      </section>
    </section>
  );
};

export default Login;