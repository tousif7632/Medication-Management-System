import RoleCard from "../RoleCard/RoleCard";
import { RxPerson } from "react-icons/rx";
import { RiGroupLine } from "react-icons/ri";

import "./roleFeature.css";

const roleDetails = [
  {
    id: 1,
    role: "Patient",
    icon: <RxPerson size={25} color="#4e71ff" />,
    description:
      "Track your medication schedule and maintain your health records",
    features: [
      "Mark medications as taken",
      "Upload proof photos (optional)",
      "View your medication calendar",
      "Large, easy-to-use interface",
    ],
  },
  {
    id: 2,
    role: "Caretaker",
    icon: <RiGroupLine size={25} color="#16c47f" />,
    description: "Monitor and support your loved one's medication adherence",
    features: [
      "Monitor medication compliance",
      "Set up notification preferences",
      "View detailed reports",
      "Receive email alerts",
    ],
  },
];

const RoleFeatures = () => {
  return (
    <section className="role-card-container">
      {roleDetails.map((role) => (
        <RoleCard key={role.id} roleDetails={role} />
      ))}
    </section>
  );
};

export default RoleFeatures;