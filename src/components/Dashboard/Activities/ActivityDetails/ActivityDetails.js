import React from "react";
import ActivityDetail from "./ActivityDetail";
import Lessons from "./Lessons";

const ActivityDetails = () => {
  return (
    <React.Fragment>
      <ActivityDetail />

      {/* <div className="input_container">
        <input
          type="text"
          className="input help_text_input"
          placeholder="What can we help you with"
        />
        <span className="ico">ICO</span>
      </div> */}

      <div className="activities lessons">
        <Lessons />
        <Lessons />
        <Lessons />
        <Lessons />
      </div>
    </React.Fragment>
  );
};

export default ActivityDetails;
