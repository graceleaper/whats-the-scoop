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
          <div className="article-card">
          <h1>{this.props.title}</h1>
          {/* <img alt='new image here' src={props.urlToImage} /> */}
          <p>{this.props.content}</p>
          <img className="article-image" alt="new img here" src={this.props.urlToImage} />
          <p>{this.props.url}</p>
          <button onClick={this.handleClick} className="share-button">Share</button>
          {/* {this.state.revealCard ? <RevealCard url={this.props.url}/> : null} */}
          <button onClick={this.handleClick} className="fact-check-button">Fact-Check</button>
          {this.state.revealCard ? <RevealCard url={this.props.url}/> : null}
        </div>
      );
  }  
}

// import React from "react";
// import "./App.css";
// // import RevealCard from "./RevealCard"

// export default class SingleArticle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//   }
//   render() {
//     return (
//           <div className="article-card">
//           <h1>{this.props.title}</h1>
//           {/* <img alt='new image here' src={props.urlToImage} /> */}
//           <p>{this.props.content}</p>
//           <img className="article-image" alt="new img here" src={this.props.urlToImage} />
//           <p>{this.props.url}</p>
//           <button className="share-button">Share</button>
//           <button className="fact-check-button">Fact-Check</button>
//         </div>
//       );
//   }  
// }