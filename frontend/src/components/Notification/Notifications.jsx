import { useState } from "react";
import { CiMail, CiBellOn } from "react-icons/ci";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

import "./notifications.css";

const Notifications = () => {
  const [toggleOne, setToggleOne] = useState(true);
  const [toggleTwo, setToggleTwo] = useState(true);

  const onToggleOne = () => {
    setToggleOne((prev) => !prev);
  };
  const onToggleTwo = () => {
    setToggleTwo((prev) => !prev);
  };

  return (
    <>
      <section className="notification-section">
        <h4>
          <CiBellOn color="blue" size={25} />
          Notification Preferences
        </h4>
        <div className="notification-row">
          <div>
            <h6>Email Notifications</h6>
            <p>Receive medication alerts via email</p>
          </div>
          <div onClick={onToggleOne}>
            {toggleOne ? (
              <BsToggleOn className="toggle-icon" size={40} />
            ) : (
              <BsToggleOff className="toggle-icon" size={40} />
            )}
          </div>
        </div>
        {toggleOne && (
          <div className="input-row">
            <label>
              <strong>Email Address</strong>
            </label>
            <input type="email" placeholder="caretaker@gmail.com" />
          </div>
        )}
        <hr className="separator" color="gainsboro" />
        <div className="notification-row">
          <div>
            <h6>Missed Medication Alerts</h6>
            <p>Get notified when medication is not taken on time</p>
          </div>
          <div onClick={onToggleTwo}>
            {toggleTwo ? (
              <BsToggleOn className="toggle-icon" size={40} />
            ) : (
              <BsToggleOff className="toggle-icon" size={40} />
            )}
          </div>
        </div>
        {toggleTwo && (
          <div>
            <div className="input-row">
              <label>
                <strong>Alert me if medication isn't taken within</strong>
              </label>
              <div className="dropdown-row">
                <label>Reminder Interval</label>
                <select>
                  <option value="2">2 hrs</option>
                  <option value="3">3 hrs</option>
                  <option value="4">4 hrs</option>
                  <option value="5">5 hrs</option>
                  <option value="6">6 hrs</option>
                </select>
              </div>
            </div>
            <div className="input-row">
              <label>
                <strong>Daily reminder time</strong>
              </label>
              <div className="time-input-row">
                <label>Reminder Time</label>
                <input type="time" defaultValue="20:00" />
                <p>Time to check if today's medication was taken</p>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="email-preview-section">
        <div className="preview-header">
          <CiMail />
          <h3>Email Preview</h3>
        </div>
        <div className="preview-body">
          <p>
            <strong>Subject: Medication Alert - Eleanor Thompson</strong>
          </p>
          <p>
            Hello,
            <br /> This is a reminder that Eleanor Thompson has not taken her
            medication today.
            <br />
            Please check with her to ensure she takes her prescribed medication.
            <br />
            Current adherence rate: 85% (5-day streak)
          </p>
        </div>
      </section>
      <div className="save-notification-settings">
        <button className="save-text">Save Notification Settings</button>
      </div>
    </>
  );
};

export default Notifications;