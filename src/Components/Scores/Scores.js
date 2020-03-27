import React from "react";
import FooterScores from "../Game/FooterScore/";


const Scores = ({ score }) => (
    <>
        <section class="find-gallery">
            <h1>Your Score:</h1>
            <h2>{score} out of 10</h2>
            
            <figure class="photo">
                <picture>
                {score >= 5 ?
                    <img className="finish-img" src="https://github.com/HenryTaylor2019/team-alpha-frontend/blob/2a6e9771eaf98f486d1b990a7ceb4c44963cd4ef/src/Atomic/img/congratulations.jpg?raw=true" alt="congratulations"/>
                    :
                    <img className="finish-img" src="https://cdn.pixabay.com/photo/2017/06/30/19/52/apocalypse-2459465_960_720.jpg" alt="congratulations"/>
                }
                </picture>
            </figure>

            {score >= 5 ? 
            <h1>Congratulations </h1>
            :
            <h1>You will probably die</h1> 
            }

        </section>



        <FooterScores />
    </>
);

export default Scores;