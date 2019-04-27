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
      <img className="check-mark" alt="check mark" src={require('./animat-checkmark-color.gif')}/>
        <p>
            This article comes from {this.props.source}, a mainstream source.
        </p>
        <p className="real_news_reveal">
          You can read the rest of this article <a href={this.props.url}>here</a>.
        </p>
      </div>
    );
  }
}
