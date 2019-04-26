import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function Tutorial() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>What's the Scoop?</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img className="responsive_gif" alt="logo here" src={require('./animat-responsive-color.gif')} />
        <h2>Tutorial</h2>
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Hi! The goal of this game is to raise awareness on media literacy by
          practicing how to identify misinformation.
        </p>

        <Link to={'/quiz/'}>
            <div className="start">Start</div>
        </Link>
      </header>
    </div>
  );
}

export default Tutorial;