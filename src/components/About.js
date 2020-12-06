import React from "react";
import "./About.css";
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Me</h1>
        <div>
          <Image src="images/me.jpg" roundedCircle />
        </div>
      </div>
    </div>
  );
}

export default About;
