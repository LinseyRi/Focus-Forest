
let hours = 0;
let minutes = 0; 
let seconds = 0; 
let milliseconds = 0; 

let hourSlot = document.getElementById('hour');
let minuteSlot = document.getElementById('minute');
let secondSlot = document.getElementById('second');
let millisecondSlot = document.getElementById('millisecond');

let start = document.getElementById('start'); 
let pause = document.getElementById('pause'); 
let reset = document.getElementById('reset'); 

start.addEventListener('click', timerStart);
pause.addEventListener('click', timerPause); 
reset.addEventListener('click', timerReset); 

let addition; 

function timerStart() {
    addition = setInterval(() => { timer() }, 10) // execute every millisecond 
}

function timerPause() {
    console.log("Pausing"); 
    clearInterval(addition); 
}

function timerReset() {
    hours = 0; 
    minutes = 0; 
    seconds = 0; 
    milliseconds = 0; 
    hourSlot.innerText = '00'; 
    minuteSlot.innerText = '00'; 
    secondSlot.innerText = '00'; 
    millisecondSlot.innerText = '00';
}

function timer() {
    if ((milliseconds += 10) == 1000) {
        milliseconds = 0; 
        seconds++; 
    }
    if (seconds == 60) {
        seconds = 0; 
        minutes++; 
    }
    if (minutes == 60) {
        minutes = 0; 
        hours++; 
    }
    hourSlot.innerText = cleanContent(hours); 
    minuteSlot.innerHTML = cleanContent(minutes); 
    secondSlot.innerHTML = cleanContent(seconds); 
    millisecondSlot.innerHTML = cleanContent(milliseconds); 
}

function cleanContent(input) {
    return input >= 10 ? input : `0${input}`
}