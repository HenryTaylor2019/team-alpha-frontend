import React from "react";

import { Link } from "react-router-dom";


const FooterScores = ({handleIncrement}) => {

    return (
        <div className="footer-div">
            <Link to="/">
                <button onClick={handleIncrement} type="button" href="/">Play Again</button>
            </Link>
        </div>
    )
}

export default FooterScores;