import React from "react";
import FooterScores from "./FooterScores";




const Scores = ({ score }) => (
    <>
        <section class="find-gallery">
            <h1>Your Score:</h1>
            <h2>{score} out of 10</h2>
            
            <figure class="photo">
                <picture>
                    <img src="https://github.com/HenryTaylor2019/team-alpha-frontend/blob/2a6e9771eaf98f486d1b990a7ceb4c44963cd4ef/src/Atomic/img/congratulations.jpg?raw=true" alt="congratulations"/>
                </picture>
            </figure>
        </section>






        <FooterScores />
    </>
);

export default Scores;