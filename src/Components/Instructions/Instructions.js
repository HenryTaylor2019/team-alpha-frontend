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
                        <p>In order to survive a pandemic, you will need to confidently and quickly spot potential hazards. This game will help you test your skills in hazard percetion and potentially sve your life!</p>

                        <h3>The Rules</h3>
                        <p>Click on the hazard in the photo before the time runs out.
                        You have 20 seconds for each photo
                        There are 10 photos in each round
                        When you are ready, click the button below to start.
                        PLACEHOLDER TEXT!! NEEDS REPLACING!!
                                  </p>

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