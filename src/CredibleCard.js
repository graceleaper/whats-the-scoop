import React from "react";
import "./App.css";

export default class CredibleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="reveal-card">
        <p className="real_news_reveal">
          Read more of this article at {this.props.url}
        </p>
      </div>
    );
  }
}
