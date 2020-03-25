import React from "react";
import FooterGame from "./FooterGame";
import HeaderGame from "../HeaderGame";


const Gamepage = ({ handleIncrement, srcImage }) => {

    return (
        <>
            <HeaderGame />
            <div>
                <div className="gallery">

                    <section >
                        <p className="title">Click on the Hazard</p>
                        <figure className="photo">

                            <picture>
                                <img src={ srcImage }alt="stockimage" />
                            </picture>
                            <div
                                onClick={ handleIncrement }
                                style={{
                                    padding: '20px',
                                    backgroundColor: 'red'
                                }}>

                            </div>
                        </figure>

                    </section>
                </div>
            </div>

            <FooterGame />
        </>
    );
}

export default Gamepage;