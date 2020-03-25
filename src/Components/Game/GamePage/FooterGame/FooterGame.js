import React from "react";


const FooterGame = ({ handleIncrement }) => {

    return(
        <div className="footer-div">
          <button type="button" onClick={ handleIncrement }>Skip Round</button>
        </div>
    )
}

export default FooterGame;