import React, { Component } from "react";
import CountDown from "./CountDown.js"

class Header extends Component {

    render() {


        return (
            <>
                <div className="header-div">
                    <div className="img-counter">
                        <p>1/10</p>
                    </div>
                    <div className="timer">
                     <CountDown />
                    </div>
                    <h1>Hazard Perception</h1>
                </div>
            </>
        );
    }
}
export default Header;
