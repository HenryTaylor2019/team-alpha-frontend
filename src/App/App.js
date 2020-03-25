import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


import Header from "../Components/Header";
import GamePage from "../Components/Game/GamePage"


import Instructions from "../Components/Instructions/Instructions";
import Scores from "../Components/Scores";


class App extends React.Component{
  componentDidMount(){
    this.props.getData();
  }
  render(){
    let {loaded}= this.props
    return !loaded?<p>Loading</p> : (
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
          <Header />
          <Scores />
        </Route>
      </Fragment>
    </Router>
    )
  }
}

export default App;
