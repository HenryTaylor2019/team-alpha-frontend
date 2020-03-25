import React from "react";
<<<<<<< HEAD
import FooterGame from "./FooterGame";
=======
import FooterGame from "./FooterGame/";
>>>>>>> c97aeb50ed7acfd7ff00d8505cbb64f413df9dc1
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
                                <img src={ srcImage } alt="stockimage" />
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