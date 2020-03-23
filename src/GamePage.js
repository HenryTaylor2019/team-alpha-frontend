import React, { Component } from "react";
import './css/find1.css';
import stock from './Images/stock.png'
import FooterGame from "./Components/FooterGame";

class Gamepage extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <>
                <div>
                    <div className="gallery">

                        <section className="find-gallery">
                            <p className="title">Click on the Hazard</p>
                            <figure className="photo">

                                <picture>
                                    <img src={stock} alt="stockimage"></img>
                                </picture>
                            </figure>

                        </section>
                    </div>
                </div>

                <FooterGame />
            </>
        );
    }
}

export default Gamepage;