import React from "react";

const CountDown = ({time}) => {

        let timer = time;

        let warning = time <= 5 ? { color: 'red' } : { color: 'rgb(246, 170, 25)' };

        return (
            <div>
                <h2 className="countdown" style={warning}>{timer}</h2>
            </div>
        );
    
}

export default CountDown;


// Create a class based component with this.state
// Add a progress or timeRemaining value to this.state
// Update the JSX to use that value 
// In componentDidMount  create a setInterval that updates the appropriate value with setState
// Technically speaking you should cancel the timer on componentWillUnmount
// You shouldn't need any document. anything.
// I'd do it with a class rather than Hooks, because it's a bit simpler.

