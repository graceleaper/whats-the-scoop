import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Tutorial from './Tutorial'
import Quiz from './Quiz'
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Switch>
            <Route exact path="/" component={Tutorial} />
            <Route exact path="/quiz" component={Quiz} />
          </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
