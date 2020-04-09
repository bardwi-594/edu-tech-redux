import React from "react";

const PlaygroundButtons = props => {
  return (
    <div className="playground_buttons">
      <button className="btn">I have a Question</button>
      <button onClick={props.activeTabHandler} className="btn active">
        I understand, go next
      </button>
    </div>
  );
};

export default PlaygroundButtons;
