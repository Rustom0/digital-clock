let hrs = document.getElementById("hrs");
let mins = document.getElementById("min");
let secs = document.getElementById("sec");

setInterval(getTime, 1000);
function getTime () {
    // Get the current time
    let currentTime = new Date();
    let currentHrs = (currentTime.getHours()<10? "0":"") + currentTime.getHours();
    let currentMins = (currentTime.getMinutes()<10? "0":"") + currentTime.getMinutes();
    let currentSecs = (currentTime.getSeconds()<10? "0":"") + currentTime.getSeconds();

    hrs.innerHTML = currentHrs;
    mins.innerHTML = currentMins;
    secs.innerHTML = currentSecs;
};

