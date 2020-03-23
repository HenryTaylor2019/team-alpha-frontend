import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


import Header from "./Components/Header";
import GamePage from "./GamePage.js"


import Instructions from "./Instructions";
import Scores from "./Scores";

const App = () => (

  <Router>

    <Fragment>

      <Route >
        <Header />
      </Route>

      <Switch>
        <Route exact path="/">
          <Instructions />
        </Route>
      </Switch>

      <Switch>
        <Route path="/gamepage">
          <GamePage />
        </Route>
      </Switch>

      <Switch>
        <Route path="/scores">
          <Scores />
        </Route>
      </Switch>



    </Fragment>
  </Router>
);
export default App;
