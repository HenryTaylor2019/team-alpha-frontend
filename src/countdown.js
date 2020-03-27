
function startTimer(duration, display) {

    let timer = duration;

    setInterval(function () {
        let seconds = parseInt(timer % 21, 10);        

        display.textContent = seconds;
        
        if (--timer < 0) {
            timer = duration;
        
            location.replace("card2.html");
        
        } 
    }, 1000);
} 

window.onload = function () {
    
let twentySeconds = 20,

display = document.querySelector('#time');

startTimer(twentySeconds, display);

};
