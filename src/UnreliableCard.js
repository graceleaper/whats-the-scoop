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
            <img className="searching" alt="magnifying glass" src={require('./animat-search-color.gif')}/>
        <p>This article comes from {this.props.source}, a clickbait source.</p>
        <p className="clickbait_reveal">
          This is from a clickbait source at {this.props.url}
        </p>
      </div>
    );
  }
}
