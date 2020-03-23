import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "./Navbar";
// import Footer from "./Footer";
import Find1 from "./Find1"
const App = () => (
  
  <Router>
    
      <Fragment>
        <Navbar></Navbar>
     
        <Switch>
          <Route exact path="/find/1" component={ Find1 } />
          <Route exact path="/find/2" component={ Find1 } />
        </Switch>
        {/* <Footer></Footer> */}
      </Fragment>
  </Router>  
);
export default App;
