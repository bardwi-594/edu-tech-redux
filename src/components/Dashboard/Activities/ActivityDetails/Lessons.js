import React from "react";
import { Link } from "react-router-dom";

const Lessons = () => {
  return (
    <div>
      <Link to="/dashboard/codePlayground">
        <div className="lessons_card">
          <div className="lesson_card_heading">
            <h3>LESSON 1</h3>
            <div className="lesson_time">27 minutes</div>
          </div>
          <div className="lesson_card_status status_complete">COMPLETED</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Lessons;
