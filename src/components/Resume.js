import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
      <div className="resume-container">
        <h1>My Resume</h1>
        <div className="resume-wrapper">
          <ul className="resume-item">
            <img src="images/resume1.jpg"></img>
            <img src="images/resume2.PNG"></img>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
