import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Tutorial() {
  return (
    <div className="App">
      <header>
        <div className="front-image-container">
          <img
            className="newspapers"
            alt="newspaper"
            src={require("./newspapers.jpg")}></img>
            <h1 className="centered-title">What's the Scoop?</h1>
        </div>
        <div className="tutorial-guide">
        <h2>Intro</h2>
          <p>
            The goal of this study tool is to raise awareness on media literacy
            by practicing how to identify misinformation. You will be shown a
            simulated news feed with a combination of credible and questionable media outlets.
          </p>
          <p>
            You want to "Share" articles coming from credible news sources, and
            "Fact-Check" articles coming from low credibility sources.
          </p>
        </div>

        <Link to={"/quiz"}>
          <button className="start">Start</button>
        </Link>
      </header>
    </div>
  );
}

export default Tutorial;
