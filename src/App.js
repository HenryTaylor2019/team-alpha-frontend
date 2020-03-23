import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


import Navbar from "./Components/Navbar";
import GamePage from "./GamePage.js"
import Footer from "./Components/Footer.js"

const App = () => (

  <Router>

    <Fragment>

      <Navbar />

      <Switch>
        <Route path="/gamepage">
          <GamePage />
        </Route>
      </Switch>

        <Footer />

    </Fragment>
  </Router>
);
export default App;
