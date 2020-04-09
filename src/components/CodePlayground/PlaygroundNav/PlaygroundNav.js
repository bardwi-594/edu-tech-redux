import React from "react";

const PlaygroundNav = props => {
  return (
    <ul className="codeplayground_nav">
      <li
        className={props.activeTab === "learn" ? "item btn active" : "item btn"}
      >
        Learn
      </li>
      <li
        className={
          props.activeTab === "execute" ? "item btn active" : "item btn"
        }
      >
        Execute
      </li>
      <li
        className={
          props.activeTab === "evaluate" ? "item btn active" : "item btn"
        }
      >
        Evaluate
      </li>
      <li
        className={
          props.activeTab === "resources" ? "item btn active" : "item btn"
        }
      >
        Resources
      </li>
    </ul>
  );
};

export default PlaygroundNav;
