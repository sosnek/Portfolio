import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Background.css";
import ReactTypingEffect from "react-typing-effect";

function Background() {
  return (
     
          
      <div className="background-container">
      <video src="/videos/carvid.webm" autoPlay loop muted />
      <h1>Hi, I'm Adam</h1>

      <ReactTypingEffect
        className="typewriter"
        staticText="I'm"
        text={["A software developer"]}
        speed="100"
        typingDelay="500"
        eraseDelay="1000"
      />

      <div className="background-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          About Me
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          >
          View Projects <i className="fas fa-code" />
        </Button>
      </div>
    </div>
    
  );
}

export default Background;
