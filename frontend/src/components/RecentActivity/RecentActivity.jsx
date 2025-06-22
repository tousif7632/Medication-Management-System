import { IoWarningOutline, IoCameraOutline } from "react-icons/io5";

import "./recentActivity.css";

const activityData = [
  {
    id: 1,
    day: "Monday, June 10",
    time: "8:30 AM",
    photo: true,
    status: "Completed",
  },
  {
    id: 2,
    day: "Tuesday, June 11",
    time: "9:00 AM",
    photo: false,
    status: "Completed",
  },
  {
    id: 3,
    day: "Wednesday, June 12",
    time: "7:30 AM",
    photo: false,
    status: "Missed",
  },
  {
    id: 4,
    day: "Thursday, June 13",
    time: "8:45 AM",
    photo: true,
    status: "Completed",
  },
  {
    id: 5,
    day: "Friday, June 14",
    time: "8:15 AM",
    photo: false,
    status: "Missed",
  },
];

const RecentActivity = () => {
  return (
    <section className="activity-section">
      <h2 className="activity-title">Recent Medication Activity</h2>
      {activityData.map((activity) => (
        <div className="activity-item" key={activity.id}>
          <div
            className={`status-icon ${
              activity.status === "Completed" ? "completed" : "missed"
            }`}
          >
            {activity.status === "Completed" ? (
              "✔"
            ) : (
              <IoWarningOutline color="red" />
            )}
          </div>
          <div className="activity-main">
            <div className="activity-left">
              <p className="activity-day">{activity.day}</p>
              <p className="activity-time">Taken at {activity.time}</p>
            </div>
            <div className="activity-right">
              {activity.photo && (
                <span className="activity-photo">
                  <IoCameraOutline /> Photo
                </span>
              )}
              <span
                className={`status-text ${
                  activity.status === "Completed" ? "completed" : "missed"
                }`}
              >
                {activity.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RecentActivity;