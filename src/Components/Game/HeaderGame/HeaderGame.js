import React from "react";
import CountDown from "../../CountDown.js"


const Header = ({ counter }) => { 

        return (
            <>
                <div className="header-div">
                    <div className="img-counter">
                        {/* Update counter below */}
                        <p>{counter}/10</p> 
                    </div>
                    <div className="timer">
                     <CountDown />
                    </div>
                    <h1>Hazard Perception</h1>
                </div>
            </>
        );

}

export default Header;
