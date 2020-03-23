import React, { Component } from "react";
import './css/find1.css';
import stock from './Images/stock.png'
import FooterScores from "./Components/FooterScores";



class Scores extends Component {
    render() {
        return (
<>
            <div>
                <div className="gallery">
                    <h1>Your Score:</h1>
                    <h2>state.score</h2>
                    <section className="find-gallery">
                        <figure className="photo">

                            <picture>
                                <img src={stock} alt="stockimage"></img>
                            </picture>
                        </figure>

                    </section>
                </div>
            </div>
            <FooterScores />
            </>
        );
    }
}

export default Scores;