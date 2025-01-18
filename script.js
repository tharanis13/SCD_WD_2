let Display = document.getElementById('time');
let [sec, min, hour] = [0, 0, 0];
let timer = null;
let lapsContainer = document.getElementById('laps');

function start() {
    sec++;
    if (sec === 60) {
        min++;
        sec = 0;

        if (min === 60) {
            hour++;
            min = 0;
        }
    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;

    Display.innerText = `${h} : ${m} : ${s}`;
}

function Startwatch() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(start, 1000);
}

function stop() {
    clearInterval(timer);
}

function Lap() {
    if (hour === 0 && min === 0 && sec === 0) {
        alert('Start the stopwatch first to record laps!');
        return;
    }
    let lapTime = Display.innerText;
    let lapElement = document.createElement('p');
    lapElement.textContent = `Lap: ${lapTime}`;
    lapsContainer.appendChild(lapElement);
}

function Reset() {
    clearInterval(timer);
    [sec, min, hour] = [0, 0, 0];
    Display.innerText = "00 : 00 : 00";
    lapsContainer.innerHTML = '<h3>Laps</h3>'; // Clear all laps
}
