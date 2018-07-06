
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import "./assets/scss/material-kit-react.css?v=1.1.0";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import StarWars from "views/StarWars/StarWars.js";
import Giphy from "views/Giphy/Giphy.js"
import RockPaperScissors from "views/RPS/RockPaperScissors.js"
import Board from "views/Hangman/Board"

var hist = createBrowserHistory(HashRouter);

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/rps" component={RockPaperScissors} />
      <Route exact path="/starwars" component={StarWars} />
      <Route exact path="/giphy" component={Giphy} />
      <Route exact path="/hangman" component={Board} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);