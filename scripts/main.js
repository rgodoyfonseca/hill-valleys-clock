// Global variables

const hourHand = document.querySelector(".hour-hand"),
    minuteHand = document.querySelector(".minute-hand");

// Functions

function getCurrentHour() {
    let date = new Date(),
        hour = date.getHours();

    if (hour >= 12) {
        hour -= 12;
    }

    return hour;
}

function getCurrentMinute() {
    let date = new Date(),
        minute = date.getMinutes();

    return minute;
}

function getHourHandRotationDegree() {
    let hourHandRotationDegree = (getCurrentHour() * 30) + (getCurrentMinute() * 0.5);

    return hourHandRotationDegree;
}

function getMinuteHandRotationDegree() {
    let minuteHandRotationDegree = getCurrentMinute() * 6;

    return minuteHandRotationDegree;
}

// param[in] i: clock hand rotation degree
// param[in] j: clock hand HTML element
function setTime(i, j) {
    let clockHandRotationDegree = i;

    if (clockHandRotationDegree <= 180) {
        j.style.transition = "800ms";
        j.style.transform = `rotate(${clockHandRotationDegree}deg)`;
    } else {
        j.style.transition = "800ms";
        j.style.transform = `rotate(${clockHandRotationDegree - 360}deg)`;
    }
}

// param[in] j: clock hand HTML element
function resetRotationDegree(j) {
    j.style.transition = "";
    j.style.transform = "rotate(-180deg)";
}

// toDo: simplify function calls

let setClock = function setClock() {
    if (getHourHandRotationDegree() == 180 && hourHand.style.transform == "rotate(180deg)") {
        resetRotationDegree(hourHand);
    } else if (getHourHandRotationDegree() == 180 && hourHand.style.transform == "rotate(-180deg)") {
        resetRotationDegree(hourHand);
    } else {
        setTime(getHourHandRotationDegree(), hourHand);
    }

    if (getMinuteHandRotationDegree() == 180 && minuteHand.style.transform == "rotate(180deg)") {
        resetRotationDegree(minuteHand);
    } else if (getMinuteHandRotationDegree() == 180 && minuteHand.style.transform == "rotate(-180deg)") {
        resetRotationDegree(minuteHand);
    } else {
        setTime(getMinuteHandRotationDegree(), minuteHand);
    }
}

setInterval(setClock, 1000);