import CareTakerInfo from "../CareTakerInfo/CareTakerInfo";
import NavBar from "../NavBar/NavBar";
import CalendarView from "../CalendarView/CalendarView";
import Notifications from "../Notification/Notifications";
import Overview from "../Overview/Overview";
import RecentActivity from "../RecentActivity/RecentActivity";
import Tab from "../Tab/Tab";

const tabs = [
  { label: "Overview", content: <Overview /> },
  { label: "Recent Activity", content: <RecentActivity /> },
  { label: "Calender View", content: <CalendarView /> },
  { label: "Notifications", content: <Notifications /> },
];

const CareTakerDashboard = () => {
  return (
    <>
      <NavBar />
      <CareTakerInfo />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tab tabs={tabs} />
      </div>
    </>
  );
};

export default CareTakerDashboard;