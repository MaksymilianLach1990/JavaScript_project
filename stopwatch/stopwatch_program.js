
const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = pad(Math.floor((elapsedTime / 1000) % 60));
    mins = pad(Math.floor((elapsedTime / (1000 * 60)) % 60));
    hrs = pad(Math.floor((elapsedTime / (1000 * 60 * 60)) % 60));

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}