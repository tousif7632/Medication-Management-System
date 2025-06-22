import { SlCalender } from "react-icons/sl";
import { CiMail, CiBellOn } from "react-icons/ci";

import "./overview.css";

const Overview = () => {
  return (
    <section className="overview-section">
      <div className="overview-top">
        <div className="overview-box">
          <h3 className="medication-heading">
            <SlCalender color="blue" />
            Today's Status
          </h3>
          <div className="medication-row">
            <div className="medication-info">
              <h6>Daily Medication Set</h6>
              <p>8:00 AM</p>
            </div>
            <div className="medication-status">Pending</div>
          </div>
        </div>
        <div className="overview-box">
          <h6 className="box-title">Quick Actions</h6>
          <div className="quick-action">
            <CiMail />
            <p>Send Reminder Email</p>
          </div>
          <div className="quick-action">
            <CiBellOn size={20} />
            <p>Configure Notifications</p>
          </div>
          <div className="quick-action">
            <SlCalender />
            <p>View Full Calendar</p>
          </div>
        </div>
      </div>
      <div className="overview-bottom">
        <h6 className="progress-heading">Monthly Adherence Progress</h6>
        <p className="progress-percent">
          Overall Progress <p>85%</p>
        </p>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: "85%" }}></div>
        </div>

        <div className="progress-stats">
          <p className="stats">
            <span style={{ color: "green" }}>22 days</span>
            <span>Taken</span>
          </p>
          <p className="stats">
            <span style={{ color: "red" }}> 3 days </span>
            <span>Missed</span>
          </p>

          <p className="stats">
            <span style={{ color: "blue" }}>5 days </span>
            <span>Remaining</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;