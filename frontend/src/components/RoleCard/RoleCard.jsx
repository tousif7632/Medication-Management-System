import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import "../RoleFeatures/roleFeature.css";

const RoleCard = ({ roleDetails }) => {
  const { role, icon, description, features } = roleDetails;
  const navigate = useNavigate();
  const roleType = role.toLowerCase();

  const handleRoleClick = () => {
    const loggedInRole = Cookies.get("role");

    if (loggedInRole === roleType) {
      navigate(`/${roleType}`);
    } else {
      alert(
        `You are not a ${
          roleType.charAt(0).toUpperCase() + roleType.slice(1)
        }. Please login as a ${
          roleType.charAt(0).toUpperCase() + roleType.slice(1)
        } to continue.`
      );
    }
  };

  return (
    <section>
      <div className={`role-card ${roleType}-card`}>
        <div className={`icon-container ${roleType}-icon`}>{icon}</div>
        <div className="role-info">
          <h2 className={`${roleType}`}>I'm a {role}</h2>
          <p className="role-description">{description}</p>
        </div>
        <ul className={`${roleType}-features role-features`}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button
          className={`role-btn ${roleType}-btn`}
          onClick={handleRoleClick}
        >
          Continue as {role}
        </button>
      </div>
    </section>
  );
};

export default RoleCard;