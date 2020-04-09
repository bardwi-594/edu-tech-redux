import React from "react";
import { Link } from "react-router-dom";

const Activity = () => {
  return (
    <div>
      <Link to="/dashboard/1">
        <div className="activity_card">
          <div className="activity_card_img">
            <img src="https://dummyimage.com/195x135" alt="" />
          </div>
          <div className="activity_card_content">
            <h3 className="activity_card_heading">Activity 1</h3>
            <p className="activity_card_desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Suscipit, blanditiis.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Activity;
