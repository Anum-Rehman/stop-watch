// var count = 5;
// function timer(){
//     console.log("Skip in " + count);
//     count--;
// }

// var interval = setInterval(timer, 1000)

// setTimeout(function(){
//     clearInterval(interval)
//     console.log("Skip Ad")
// }, 5000)
var minHead = document.getElementById("min");
var secHead = document.getElementById("sec");
var miliSecHead = document.getElementById("miliSec");
var interval;

var min = 0;
var sec = 0;
var milisec = 0;

function timer(){
    milisec++;
    miliSecHead.innerHTML = milisec;
    if(milisec === 100){
        sec++;
        secHead.innerHTML = sec;
        milisec = 0;
    }
    else if(sec === 60){
        min++;
        minHead.innerHTML = min;
        sec = 0;
    }
}

function startTimer(){
    interval = setInterval(timer, 10);
}

function stopTimer(){
    clearInterval(interval)
}

function resetTimer(){
    minHead.innerHTML = 0;
    secHead.innerHTML = 0;
    miliSecHead.innerHTML = 0;
}