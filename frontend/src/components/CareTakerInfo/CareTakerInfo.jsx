import { RiGroupLine } from "react-icons/ri";

import "./caretakerInfo.css";

const CareTakerInfo = () => {
  return (
    <>
      <section className="caretaker-view">
        <div className="caretaker-info">
          <div className="caretaker-profile-icon-container">
            <div className="caretaker-profile-icon">
              <RiGroupLine color="white" size={25} />
            </div>
            <div>
              <h3 className="greeting-message">Caretaker Dashboard</h3>
              <p className="intro-message">
                Monitoring Eleanor Thompson's medication adherence
              </p>
            </div>
          </div>
          <div className="caretaker-activities-container">
            <div className="caretaker-activity">
              <p>85%</p>
              Adherence Rate
            </div>
            <div className="caretaker-activity">
              <p>5</p>Current Streak
            </div>
            <div className="caretaker-activity">
              <p>4</p>Missed This Month
            </div>
            <div className="caretaker-activity">
              <p>3</p>Taken This Week
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareTakerInfo;