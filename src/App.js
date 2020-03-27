import React, { Fragment } from "react";
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";

import Header from "./Components/Header";
import GamePage from "./Components/Game/GamePage"

import Instructions from "./Components/Instructions/Instructions";
import Scores from "./Components/Scores";


// Do we need this as there is an app folder now?

const App = () => (
  <Router>

    <Fragment>

      <Route exact path="/">
        <Header />
        <Instructions />
      </Route>
   
      <Route path="/gamepage">
        <GamePage />
      </Route>

      <Route path="/scores">
        {/* <Header /> */}
        <Scores />
      </Route>
   
    </Fragment>
  </Router>
);
export default App;

