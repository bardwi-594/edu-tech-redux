import React from "react";
import Navbar from "../Navbar/Navbar";
import DashSidebar from "./DashSidebar/DashSidebar";
import DashMain from "./DashMain/DashMain";

const Dashboard = props => {
  return (
    <React.Fragment>
      <Navbar />
      <div class="wrapper dashboard_wrapper">
        <div class="container">
          <DashSidebar />
          <DashMain
            codePlayground={props.codePlayground}
            activityDetails={props.activityDetails}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
