import React from "react";
import "./App.css";

export default class UnreliableCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="reveal-card">
        <p className="clickbait_reveal">
          This is from a clickbait source at {this.props.url}
        </p>
      </div>
    );
  }
}
