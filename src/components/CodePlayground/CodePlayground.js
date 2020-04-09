import React, { Component } from "react";

import Learn from "./Learn/Learn";
import PlaygroundButtons from "./PlaygroundButtons/PlaygroundButtons";
import PlaygroundNav from "./PlaygroundNav/PlaygroundNav";
import Execute from "./Execute/Execute";
import Evaluate from "./Evaluate/Evaluate";
import Resources from "./Resources/Resources";

class CodePlayground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ["learn", "execute", "evaluate", "resources"],
      activeTab: "learn"
    };
  }

  activeTabHandler = tabName => {
    const { activeTab, tabs } = this.state;

    const activeIndex = tabs.findIndex(tab => tab === activeTab);

    this.setState({
      activeTab: tabs[activeIndex + 1]
    });
  };

  render() {
    let active;
    if (this.state.activeTab === "learn") {
      active = <Learn />;
    } else if (this.state.activeTab === "execute") {
      active = <Execute />;
    } else if (this.state.activeTab === "evaluate") {
      active = <Evaluate />;
    } else if (this.state.activeTab === "resources") {
      active = <Resources />;
    }

    return (
      <div className="codeplayground">
        <PlaygroundNav activeTab={this.state.activeTab} />

        <div className="playground_content">
          {active}
          <PlaygroundButtons activeTabHandler={this.activeTabHandler} />
        </div>
      </div>
    );
  }
}

export default CodePlayground;
