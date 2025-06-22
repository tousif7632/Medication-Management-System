import { useState } from "react";

import "./tabs.css";

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const renderContent = (content) => {
    return content;
  };

  return (
    <>
      <div className="carataker-details-container">
        <div className="tabs-container">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={index === activeTab ? "active" : ""}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="info">{renderContent(tabs[activeTab].content)}</div>
      </div>
    </>
  );
};

export default Tab;