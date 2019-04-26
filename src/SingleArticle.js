import React from "react";
import "./App.css";

export default function SingleArticle(props) {
    return (
        <div className="article-card">
        <h1>{props.title}</h1>
        {/* <img alt='new image here' src={props.urlToImage} /> */}
        <p>{props.content}</p>
        <img className="article-image" alt="new img here" src={props.urlToImage} />
        <p>{props.url}</p>
        <button className="share-button">Share</button>
        <button className="fact-check-button">Fact-Check</button>
      </div>
    );
}