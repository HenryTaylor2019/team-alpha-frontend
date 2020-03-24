import React from "react";
import '../../css/find1.css';
import stock from '../../Images/stock.png'
import FooterScores from "./FooterScores";


const Scores = ({ score }) => (
    <>
        <div className="gallery">
            <h1>Your Score:</h1>
            <h2>{ score }</h2>
            <section className="find-gallery">
                <figure className="photo">

                    <picture>
                        <img src={stock} alt="stockimage"/>
                    </picture>
                </figure>

            </section>
        </div>
        <FooterScores />
    </>
);

export default Scores;