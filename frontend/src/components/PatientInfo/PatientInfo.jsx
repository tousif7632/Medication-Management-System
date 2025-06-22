import { RxPerson } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa6";

import "./patientInfo.css";

const PatientInfo = ({ status }) => {
  const dayStreak = 0;
  const monthlyRate = 0;
  return (
    <>
      <section className="patient-view">
        <div className="patient-info">
          <div className="patient-profile-icon-container">
            <div className="patient-profile-icon">
              <RxPerson color="white" size={25} />
            </div>
            <div>
              <h3 className="greeting-message">Good Morning!</h3>
              <p className="intro-message">
                Ready to stay on track with your medication?
              </p>
            </div>
          </div>
          <div className="patient-activities-container">
            <div className="patient-activity">
              <p>{status ? dayStreak + 1 : 0}</p>
              Day Streak
            </div>
            <div className="patient-activity">
              {status ? (
                <div style={{ fontSize: "20px" }}>✔</div>
              ) : (
                <p>
                  <FaRegCircle />
                </p>
              )}
              Today's Status
            </div>
            <div className="patient-activity">
              <p>{status ? monthlyRate + 3 : 0}%</p>Monthly Rate
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PatientInfo;