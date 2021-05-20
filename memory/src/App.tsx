import React, {CSSProperties, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import MainPage from "./pages/MainPage/MainPage"
import GamePage from "./pages/GamePage/GamePage"
import ScoreBoardPage from "./pages/ScoreBoardPage/ScoreBoardPage"

import './App.css';
function App() {
  return (
    <div className="App" >
        <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/game" component={GamePage} />
          <Route path="/score" component={ScoreBoardPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
