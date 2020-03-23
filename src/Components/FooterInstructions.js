import React from "react";
import '../css/find1.css';
import { Link } from "react-router-dom";


const FooterInstructions = () => {


    return(
        <div className="footer-div">
          <Link to="/gamepage">
          <button type="button">Get Started</button>
          </Link>
        </div>
    )
}

export default FooterInstructions;