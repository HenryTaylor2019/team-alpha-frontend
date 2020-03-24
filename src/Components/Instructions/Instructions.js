import React, { Component } from "react";

import FooterInstructions from "./FooterInstructions";

class Instructions extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="gallery">

                        <section className="find-gallery">

                            <figure className="photo">

                                <picture>
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Pandemiclogo.svg/1200px-Pandemiclogo.svg.png" alt="stockimage"></img>
                                </picture>

                            </figure>
                        </section>

                        <section className="instructions-section">
                            <h2>Instructions</h2>
                            <p>In order to survive a pandemic, you will need to confidently and quickly spot potential hazards</p>
                            <p>This game will help you test your skills in hazard percetion and potentially sve your life!</p>

                            <h4>The Rules</h4>
                            <ul className="list">
                                <li>Click on the hazard in the photo before the time runs out</li>
                                <li>You have 20 seconds for each photo</li>
                                <li>There are 10 photos in each round</li>
                                <li>When you are ready, click the button below to start</li>
                            </ul>

                        </section>

                    </div>
                </div>
                <FooterInstructions />
            </>
        );
    }
}

export default Instructions;