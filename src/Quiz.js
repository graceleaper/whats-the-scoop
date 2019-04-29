import React, { Component } from "react";
import "./App.css";
import { getRealNews } from "./news";
import SingleArticle from "./SingleArticle";
import { Spring } from "react-spring/renderprops";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      refreshing: true
    };
    this.fetchReliableNews = this.fetchReliableNews.bind(this);
    this.shuffleNews = this.shuffleNews.bind(this);
  }

  componentDidMount() {
    this.fetchReliableNews();
  }

  // shuffling elements in an array
  shuffleNews(array) {
    let newArray = [];
    while (array.length !== 0) {
      let randomIndex = Math.floor(Math.random() * array.length);
      newArray.push(array[randomIndex]);
      array.splice(randomIndex, 1);
    }
    return (array = newArray);
  }

  fetchReliableNews() {
    getRealNews()
      .then(allArticles => this.shuffleNews(allArticles))
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  render() {
    return (
      <div className="all-articles">
        <h1 className="logo"> What's the Scoop?</h1>
        {this.state.articles.map((article, index) => {
          return (
            <Spring
            key={index}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 500, duration: 500 }}
            >
              {props => (
                <div style={props}>
                  <SingleArticle
                    key={index}
                    title={article.title}
                    description={article.description}
                    urlToImage={article.urlToImage}
                    url={article.url}
                    source={article.source.name}
                  />
                </div>
              )}
            </Spring>
          );
        })}
      </div>
    );
  }
}
