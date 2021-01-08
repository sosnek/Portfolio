import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume" id="resume-id">
      <div className="resume-container">
        <h1>My Resume</h1>
        <div className="resume-wrapper">
          <ul className="resume-item">
            <img src="images/resume1.PNG"></img>
          </ul>
          <ul className="resume-item2">
            <img src="images/resume2.PNG"></img>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
