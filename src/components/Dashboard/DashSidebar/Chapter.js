import React from "react";

const Chapter = () => {
  return (
    <li class="chapter">
      <div className="chapter_head">
        <span>Introduction</span> <span>6hrs</span> <span>3 Sessions</span>
      </div>
      <div className="chapter_content">
        <ul className="sessions">
          <li className="session_complete">
            <span class="session_text">Session 1</span>
            <span className="session_status complete">Complete</span>
          </li>
          <li className="session_progress">
            <span class="session_text">Session 2</span>
            <span className="session_status">In-Progress</span>
          </li>
          <li>
            <span class="session_text">Session 3</span>
            <span className="session_status complete"></span>
          </li>
        </ul>
        <div className="progress">Progress</div>
      </div>
    </li>
  );
};

export default Chapter;
