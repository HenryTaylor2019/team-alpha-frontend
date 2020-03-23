import React from "react";
import './css/find1.css';
import find from './img/find.png'

class Images extends React.Component {
    render() {
        return (

            <div>
                <div>
                    <div className="gallery">

                        <section className="find-gallery">
                            <p className="title">Find the odd one out!</p>
                            <figure className="photo">

                                <picture>
                                    <img src={find} alt="stockimage"></img>
                                </picture>
                                
                                <figcaption>
                                    <button onClick=""></button>
                                </figcaption>
                            </figure>
                            <p>One point for each good answer</p>
                        </section>
                    </div>
                </div>
            </div>

        );
    }
}

export default Images;