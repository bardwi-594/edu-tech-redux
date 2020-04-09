import React from "react";
import Activities from "../Activities/Activities";
import CodePlayground from "../../CodePlayground/CodePlayground";
import ActivityDetails from "../Activities/ActivityDetails/ActivityDetails";

const DashMain = (props) => {
  return (
    <div className="dashboard_main">
      <div className="container">
        <div className="welcome_text_container">
          <div>
            <h1 className="dashboard_welcome_text">Session 1</h1>
            <ul className="path">
              <li>Home</li>
              <li>Dashboard</li>
            </ul>
          </div>
          <div className="search">
            <div class="input_container">
              <input
                type="text"
                class="input help_text_input"
                placeholder="SEARCH"
              />
              <span class="ico">ICO</span>
            </div>
          </div>
        </div>

        {props.activityDetails ? (
          <ActivityDetails />
        ) : props.codePlayground ? (
          <CodePlayground />
        ) : (
          <Activities />
        )}
      </div>
    </div>
  );
};

export default DashMain;
