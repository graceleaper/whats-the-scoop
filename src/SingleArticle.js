import React from "react";
import "./App.css";
import RevealCard from "./RevealCard"

export default class SingleArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        revealCard: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    return this.setState({
        revealCard: !this.state.revealCard
    })
  }

  render() {

    return (
          <div className="article-card" background={this.props.urlToImage}>
          <h1>{this.props.title}</h1>
          <img className="article-image" alt="new img here" src={this.props.urlToImage} />
          <p>{this.props.description}</p>
          <button onClick={this.handleClick} className="share-button">Share</button>
          <button onClick={this.handleClick} className="fact-check-button">Fact-Check</button>
          {this.state.revealCard ? <RevealCard source={this.props.source} url={this.props.url}/> : null}
        </div>
      );
  }  
}