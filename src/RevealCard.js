import React from "react";
import "./App.css";
import CredibleCard from "./CredibleCard";
import UnreliableCard from "./UnreliableCard";

export default class RevealCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="reveal-card">
        {this.props.url.includes("nytimes") ? (
          <CredibleCard url={this.props.url} />
        ) : (
          <UnreliableCard url={this.props.url} />
        )}
      </div>
    );
  }
}