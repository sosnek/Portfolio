import React from "react";
import "./About.css";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <div className="about" id="about-id">
      <div className="about-container">
        <h1>About Me</h1>
        <div>
          <Image className="about-image" src="images/me.jpg" roundedCircle />
          <div className="about-text-container">
            <h2>
              Hi! I'm Adam. I recently graduated from Software Engineering Technology at Conestoga College.{" "}
            </h2>
            <h2>
              As a software developer, I strive to create clean and efficient
              code to ensure my projects are of the highest level quality.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
