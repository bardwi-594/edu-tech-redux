import React from "react";
import Chapter from "./Chapter";

const DashSidebar = () => {
  return (
    <div className="dashboard_sidebar">
      <h1 className="sidebar_heading">Topics </h1>
      <h2 className="sidebar_chapter_info">
        Artificial Intelligence
        {/* <br /> <span>___</span> */}
      </h2>
      <div className="sidebar_nav">
        <ul className="chapters">
          <Chapter />
          <Chapter />
        </ul>
      </div>
    </div>
  );
};

export default DashSidebar;
