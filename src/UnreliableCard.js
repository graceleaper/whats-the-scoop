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
        <img
          className="searching"
          alt="magnifying glass"
          src={require("./animat-search-color.gif")}
        />
        <p className="clickbait_reveal">
          This article comes from {this.props.source}, a clickbait source.
        </p>
        <p className="clickbait_reveal">
          {this.props.source} has been identified as a media source with strong
          bias and misleading reports. You can read more on the media bias of
          this source{" "}
          <a
            href="https://mediabiasfactcheck.com/mashable/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </div>
    );
  }
}
