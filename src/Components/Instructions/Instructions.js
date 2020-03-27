import React, { Component } from "react";
import { Link } from "react-router-dom";
import FooterInstructions from "./FooterInstructions";

class Instructions extends Component {
    render() {
        return (
            <>
                <div class="next">

                    <section class="first-page resolution">

                        <h3>Instructions</h3>
                        <p class="text">In order to survive a pandemic, you will need to confidently and quickly spot potential hazards in your day to day life. This game will help you test your skills in hazard percetion could and potentially save your life so you best take it seriously!</p>

                        <h3>The Rules</h3>
                        <p class="text">
                            Click on the hazard in the photo before the time runs out
                            There is one hazard per page
                            There are 10 photos in each round
                            When you are ready, click the button below to start.
                        </p>
                        <h4>Good Luck!</h4>

                        <div class="rest">
                            <Link to="/gamepage">
                                <button class="begin-button" onclick="">Begin Test</button>
                            </Link>
                        </div>
                    </section>
                    <section class="find-gallery photo-main resolution">

                        <img class="first-page" src="https://github.com/HenryTaylor2019/team-alpha-frontend/blob/f60dbd549c0258a4c803d97b870ec98872d5af03/src/Atomic/img/pandemic.png?raw=true" alt="pandemic Logo"></img>

                    </section>

                </div>
                <FooterInstructions />
            </>
        );
    }
}

export default Instructions;