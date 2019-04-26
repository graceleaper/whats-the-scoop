import React, { Component } from "react";
import "./App.css";
import { getRealNews } from './news'
import SingleArticle from "./SingleArticle";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      refreshing: true
    };
    // this.fetchRealNews = this.fetchRealNews.bind(this)
    this.fetchReliableNews = this.fetchReliableNews.bind(this)
    // this.selectReliableNews = this.selectReliableNews.bind(this)
    this.shuffleNews = this.shuffleNews.bind(this)
  }

  componentDidMount() {
    // this.fetchRealNews();
    this.fetchReliableNews();

  }

  // shuffling elements in an array
  shuffleNews(array) {
    let newArray = [];
    while(array.length !==0) {
      let randomIndex = Math.floor(Math.random() * array.length);
      newArray.push(array[randomIndex]);
      array.splice(randomIndex,1)
    }
    return array = newArray;
  }

  // selectReliableNews(array) {
  //   const newArray = array.splice(0, 5);
  //   return newArray;
  // }

  fetchReliableNews() {
    getRealNews()
      // .then(selectArticles => this.selectReliableNews(selectArticles))
      .then(allArticles => this.shuffleNews(allArticles))
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
      console.log('here is state: ', this.state.articles)
  }

  render() {
    return (
      <div className="all-articles">
        <h1> What's the Scoop?</h1>
        {this.state.articles.map((article, index) => {
          return (
            <SingleArticle key={index}
            title={article.title}
            description={article.description}
            urlToImage={article.urlToImage}
            url={article.url}
            />
          )
        })}
      </div>
    );
  }
}