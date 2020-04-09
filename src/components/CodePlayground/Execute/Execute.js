import React, { Component } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

import { Terminal } from "xterm";
//import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";
const term = new Terminal();
// const fitAddon = new FitAddon();
// term.loadAddon(fitAddon);

class Execute extends Component {
  componentDidMount = () => {
    term.open(document.getElementById("xterm"));
    term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
  };

  render() {
    return (
      <div className="execute" id="playground-execute">
        <div className="execute_cta">
          <a href="/" className="prev-btn">
            Previous
          </a>

          <a href="/" className="next-btn">
            Next
          </a>
        </div>

        <div className="execute_content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
            adipisci voluptatem voluptatum beatae assumenda illo voluptate vero
            illum delectus modi?Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptatibus id, incidunt quam, non nam minus.
          </p>

          <div className="ide">
            <div className="editor">
              <AceEditor
                width="100%"
                height="93%"
                mode="python"
                theme="monokai"
                name="ace-editor"
                editorProps={{ $blockScrolling: true }}
              />
              <button className="btn" type="button">
                RUN
              </button>
            </div>
            <div className="terminal">
              <div id="xterm"></div>
              <button className="btn" type="button">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Execute;
