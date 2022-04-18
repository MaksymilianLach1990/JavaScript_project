
const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");
const checkPointBtn = document.querySelector("#checkPointBtn");
const pointList = document.querySelector("#pointList");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let titleCheckPoint = `<h1 id="title">Checkpoints List</h1>`;
let innerText = titleCheckPoint;
let intervalId;
let points = [];
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.style.borderColor = "white";
pauseBtn.style.borderColor = "white";
resetBtn.style.borderColor = "white";
checkPointBtn.style.borderColor = "white"
pointList.innerHTML = titleCheckPoint;
resetBtn.onmousedown = () => {
    resetBtn.style.borderColor = "black";
}
resetBtn.onmouseup = () => {
    resetBtn.style.borderColor = "white";
}

checkPointBtn.onmousedown = () => {
    checkPointBtn.style.borderColor = "black";
}
checkPointBtn.onmouseup = () => {
    checkPointBtn.style.borderColor = "white";
}

startBtn.addEventListener("click", () => {
    if(paused){
        startBtn.style.borderColor = "black";
        pauseBtn.style.borderColor = "white"
        resetBtn.style.borderColor = "white"
        checkPointBtn.style.borderColor = "white"
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        startBtn.style.borderColor = "white";
        pauseBtn.style.borderColor = "black";
        resetBtn.style.borderColor = "white";
        checkPointBtn.style.borderColor = "white"        
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    startBtn.style.borderColor = "white";
    pauseBtn.style.borderColor = "white";
    checkPointBtn.style.borderColor = "white"
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    points = [];
    innerText = titleCheckPoint
    timeDisplay.textContent = "00:00:00";
    pointList.innerHTML = innerText;
    
});

checkPointBtn.addEventListener("click", () => {
    if(paused){
        return console.log("Time is stopped!");
    }
    startBtn.style.borderColor = "black";
    pauseBtn.style.borderColor = "white";
    resetBtn.style.borderColor = "white";

    elapsedTime = Date.now() - startTime;

    secs = pad(Math.floor((elapsedTime / 1000) % 60));
    mins = pad(Math.floor((elapsedTime / (1000 * 60)) % 60));
    hrs = pad(Math.floor((elapsedTime / (1000 * 60 * 60)) % 60));

    let newPoint = `${hrs}:${mins}:${secs}`;
    points.push(newPoint);
    
    let line = `<h4 id="checkPoint">Survey ${points.length} : ${newPoint}</h4>`
    innerText = innerText + line
    pointList.innerHTML = `${innerText}`;
})

function pad(unit) {
    return (("0") + unit).length > 2 ? unit : "0" + unit;
}

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = pad(Math.floor((elapsedTime / 1000) % 60));
    mins = pad(Math.floor((elapsedTime / (1000 * 60)) % 60));
    hrs = pad(Math.floor((elapsedTime / (1000 * 60 * 60)) % 60));

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;    
}
