
let hours = 0;
let minutes = 0; 
let seconds = 0; 
let milliseconds = 0; 

let hourSlot = document.getElementById('hour');
let minuteSlot = document.getElementById('minute');
let secondSlot = document.getElementById('second');

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
    destroyTrees(); 
}

function timer() {
    if ((milliseconds += 10) == 1000) {
        milliseconds = 0; 
        seconds++; 
    }
    if (seconds == 60) {
        seconds = 0; 
        growTree(); 
        minutes++; 
        // if (minutes % 10 == 0) {
        //     growTree(); 
        // }
    }
    if (minutes == 60) {
        minutes = 0; 
        hours++; 
    }
    hourSlot.innerText = cleanContent(hours); 
    minuteSlot.innerHTML = cleanContent(minutes); 
    secondSlot.innerHTML = cleanContent(seconds); 
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
    "cube-10",
    "cube-11",
    "cube-12",
    "cube-13",
    "cube-14",
    "cube-15",
    "cube-16",
]

function growTree() {
    // Create tree icon element and add it to a random available cube on the DOM 
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
    // Find an unfilled element on the forest grid 
    // Returns: HTML ID of available elements 
    let cube;
    if (openGround.length > 1) {
        while (!openGround.includes(cube)) {
            let r = Math.floor(Math.random() * 16)
            cube = `cube-${r}`
        }
    } else {
        cube = openGround[0]
    }
    openGround.splice(openGround.indexOf(cube), 1)
    return cube; 
}

function destroyTrees() {
    // Finds all elements inside forest grid cubes and removes them 
    let allGround = document.getElementsByClassName("forest-cube"); 
    for (let cube of allGround) {
        while (cube.firstChild) {
            cube.removeChild(cube.lastChild); 
        }
    }
}