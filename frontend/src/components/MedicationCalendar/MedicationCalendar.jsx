import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./medicationCalendar.css";

const MedicationCalendar = ({ onDateSelect }) => {
  const [value, setValue] = useState(new Date());

  // Function to convert a date to IST date string (YYYY-MM-DD)
  const getISTDateString = (date = new Date()) => {
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(date.getTime() + istOffset);
    return istDate.toISOString().split("T")[0];
  };

  // Set today's date in IST
  const today = getISTDateString();

  // Simulated missed medication dates (in YYYY-MM-DD format)
  const missedDates = [
    "2025-06-01", "2025-06-02", "2025-06-03", "2025-06-04", "2025-06-05",
    "2025-06-06", "2025-06-07", "2025-06-08", "2025-06-09", "2025-06-10",
    "2025-06-11", "2025-06-12", "2025-06-13", "2025-06-14", "2025-06-15",
    "2025-06-16", "2025-06-17", "2025-06-18", "2025-06-19", "2025-06-20",
    "2025-06-21"
  ];

  // Add colored dots below dates
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dateStr = getISTDateString(date);
      if (dateStr === today) {
        return <div className="dot blue-dot"></div>;
      } else if (missedDates.includes(dateStr)) {
        return <div className="dot red-dot"></div>;
      } else {
        return null;
      }
    }
  };

  // Handle click on date
  const handleDateChange = (date) => {
    setValue(date);

    const dateStr = getISTDateString(date);
    const formatted = date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    if (dateStr === today) {
      onDateSelect(formatted, "today");
    } else if (missedDates.includes(dateStr)) {
      onDateSelect(formatted, "missed");
    } else {
      onDateSelect(formatted, "taken");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: '10px' }}>
      <Calendar
        onChange={handleDateChange}
        value={value}
        tileContent={tileContent}
      />
    </div>
  );
};

export default MedicationCalendar;
