import React from "react";
import '../../css/find1.css';
import { Link } from "react-router-dom";


const FooterScores = () => {

    return (
        <div className="footer-div">
            <Link to="/">
                <button type="button" href="/">Play Again</button>
            </Link>
        </div>
    )
}

export default FooterScores;