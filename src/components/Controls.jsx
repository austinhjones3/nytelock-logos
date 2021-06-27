import React, { Component } from "react";
import "../styles/Controls.css";
export default class Controls extends Component {
  render() {
    const { setActive } = this.props;
    return (
      <div id="controls">
        <div id="controls-header">
          <div id="controls-text">
            <p>
              <span id="p-bullet">• </span>
              HOW DO I KNOW WHICH LOGO STYLE IS RIGHT FOR ME?
            </p>
            <h1>Different Types of Logo Styles</h1>
          </div>
          <button className="btn btn-warning">Contact Us</button>
        </div>
        <div id="btn-suite">
          <button onClick={() => setActive(() => "letter")}>Lettermark Logos</button>
        </div>
      </div>
    );
  }
}
