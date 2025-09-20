let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;
let isRunning = false;

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

document.getElementById("start").addEventListener("click", () => {
    if (!isRunning) {
        timer = setInterval(stopwatch, 100); 
        isRunning = true;
    }
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    updateDisplay();
    isRunning = false;
    document.getElementById("laps").innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
    if (isRunning) {
        let lapTime = document.getElementById("display").innerText;
        let lapList = document.getElementById("laps");
        let lapItem = document.createElement("p");
        lapItem.innerText = `Lap: ${lapTime}`;
        lapList.appendChild(lapItem);
    }
});

updateDisplay();