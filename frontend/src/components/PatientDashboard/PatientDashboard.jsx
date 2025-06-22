import React, { useState, useRef } from "react";

import NavBar from "../NavBar/NavBar";
import PatientInfo from "../PatientInfo/PatientInfo";
import { CiImageOn, CiClock2 } from "react-icons/ci";
import { IoCameraOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import MedicationCalendar from "../MedicationCalendar/MedicationCalendar";

import "./patientDashboard.css";

const PatientDashboard = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [isTaken, setIsTaken] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleMarkAsTaken = () => {
    setIsTaken(true);
  };

  const openFileSelector = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <NavBar />
      <PatientInfo status={isTaken} />
      <section className="medication-section">
        <div className="medication-card">
          <h3 className="medication-heading">
            <SlCalender color="blue" />
            Today's Medication
          </h3>

          {!isTaken ? (
            <div>
              <div className="medication-label">
                <div className="day-schedule">
                  <div className="day">1</div>
                  <div>
                    <p className="medication-date">
                      <strong>Daily Medication Set</strong>
                    </p>
                    <p>Complete set of daily tablets</p>
                  </div>
                </div>
                <div className="medication-time">
                  <CiClock2 />
                  8:00 AM
                </div>
              </div>

              <div className="upload-box">
                <div>
                  <CiImageOn size={50} />
                </div>

                <label className="upload-label">
                  Add Proof Photo (Optional)
                </label>
                <p className="upload-description">
                  Take a photo of your medication or pill organizer as
                  confirmation
                </p>

                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden-file-input"
                />

                <button onClick={openFileSelector} className="take-photo-btn">
                  <IoCameraOutline /> Take Photo
                </button>

                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="preview-image"
                  />
                )}
              </div>
            </div>
          ) : (
            <div>
              <div className="medication-success-box">
                <div className="success-icon">✓</div>
                <div className="success-content">
                  <h3>Medication Completed!</h3>
                  <p>
                    Great job! You've taken your medication for June 21, 2025.
                  </p>
                </div>
              </div>
              <div className="medication-success-label">
                <div className="day-success-schedule">
                  <div className="success-icon-medicine">✓</div>
                  <div>
                    <p className="medication-success-date">
                      Daily Medication Set
                    </p>
                    <p>Complete set of daily tablets</p>
                  </div>
                </div>
                <div className="medication-success-time">
                  <CiClock2 />
                  8:00 AM
                </div>
              </div>
            </div>
          )}

          {!isTaken && (
            <button onClick={handleMarkAsTaken} className="mark-taken-btn">
              Mark as Taken
            </button>
          )}
        </div>

        <div className="calendar-box">
          <p className="calender-label">
            <strong>Medication Calendar</strong>
          </p>
          <MedicationCalendar />
          <div className="schedule-container">
            <div className="schedule">
              <div className="green mark-symbol"></div>
              <p>Medication taken</p>
            </div>
            <div className="schedule">
              <div className="red mark-symbol"></div>
              <p>Missed medication</p>
            </div>
            <div className="schedule">
              <div className="blue mark-symbol"></div>
              <p>Today</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PatientDashboard;