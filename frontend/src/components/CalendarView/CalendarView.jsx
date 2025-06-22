import { useState } from "react";
import MedicationCalendar from "../MedicationCalendar/MedicationCalendar";
import { IoWarningOutline } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import "./calendarView.css";

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState("June 22, 2025");
  const [status, setStatus] = useState("today"); // 'taken', 'missed', or 'today'

  return (
    <section className="calendar-view-section">
      <h2>Medication Calendar Overview</h2>
      <div className="calender-view">
        <div className="calendar-container">
          <MedicationCalendar
            onDateSelect={(date, status) => {
              setSelectedDate(date);
              setStatus(status);
            }}
          />
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

        {/* Right-side dynamic details */}
        <div className="medication-details">
          <p>Details for {selectedDate}</p>

          {status === "missed" && (
            <div className="medication-status-view">
              <h6 style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <IoWarningOutline /> Medication Missed
              </h6>
              <p>Eleanor Thompson did not take their medication on this day.</p>
            </div>
          )}

          {status === "taken" && (
            <div className="medication-status-view">
              <h6 style={{ display: "flex", gap: "5px", alignItems: "center", color: "green" }}>
                ✔ Medication Taken
              </h6>
              <p>Eleanor Thompson took their medication as scheduled.</p>
            </div>
          )}

          {status === "today" && (
            <div className="medication-status-view today-box">
              <h6 style={{ display: "flex", gap: "5px", alignItems: "center", color: "#1a73e8" }}>
                <FaClock /> Today
              </h6>
              <p>
                <a href="#">Monitor Eleanor Thompson's medication status for today.</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalendarView;
