
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
    destroyTrees(); 
}

function timer() {
    if ((milliseconds += 10) == 1000) {
        milliseconds = 0; 
        seconds++; 
        if (seconds % 10 == 0) {
            growTree(); 
        }
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

// generate tree icons 

let openGround = [
    "cube-1", 
    "cube-2",
    "cube-3",
    "cube-4",
    "cube-5",
    "cube-6",
    "cube-7",
    "cube-8",
    "cube-9",
]

function growTree() {
    console.log(`Forest open ground squares: `, openGround.length)
    if (openGround.length > 0) {
        let newTree = document.createElement("i"); 
        newTree.classList.add('fa-solid'); 
        newTree.classList.add('fa-tree'); 
        let cubeId = selectRandomBox();
        let parent = document.getElementById(cubeId)
        parent.appendChild(newTree); 
    } else {
        console.log("Forest Grown"); 
    }
}

function selectRandomBox() {
    let cube;
    if (openGround.length > 1) {
        while (!openGround.includes(cube)) {
            let r = Math.floor(Math.random() * 9)
            cube = `cube-${r}`
        }
    } else {
        cube = openGround[0]
    }
    console.log(cube); 
    openGround.splice(openGround.indexOf(cube), 1)
    console.log(openGround)   
    return cube; 
}

function destroyTrees() {
    let allGround = document.getElementsByClassName("forest-cube"); 
    for (let cube of allGround) {
        while (cube.firstChild) {
            cube.removeChild(cube.lastChild); 
        }
    }
}