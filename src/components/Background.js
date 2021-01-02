import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Background.css";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-scroll";

function Background() {
  return (
    <div className="background-container" id="background-id">
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
        <Link
          to="about-id"
          className="about-me-link"
          smooth={true}
          duration={1000}
        >
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            About Me
          </Button>
        </Link>

        <Link
          to="cards-id"
          className="projects-link"
          smooth={true}
          duration={1000}
        >
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            View Projects <i className="fas fa-code" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Background;
