import { FaRegHeart } from "react-icons/fa";
import "./home.css";
import RoleFeatures from "../RoleFeatures/RoleFeatures";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setLoggedIn(!!token);
  }, []);

  const onHandleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("role");
    setLoggedIn(false);
    navigate("/");
  };

  const onHandleLogin = () => {
    setLoggedIn(true);
    navigate("/login");
  };

  return (
    <>
      <div className="logout-container">
        {loggedIn ? (
          <button onClick={onHandleLogout}>Sign Out</button>
        ) : (
          <button onClick={onHandleLogin}>Sign In</button>
        )}
      </div>

      <main className="main-container">
        <div className="website-logo">
          <FaRegHeart color="white" size={30} />
        </div>
        <h1>Welcome to MediCare Companion</h1>
        <p className="home-decription">
          Your trusted partner in medication management. Choose your role to get
          started with personalized features.
        </p>
        <RoleFeatures />
        <p className="note-content">
          You can switch between roles anytime after setup
        </p>
      </main>
    </>
  );
};

export default Home;