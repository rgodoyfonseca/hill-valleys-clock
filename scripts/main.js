function updateClock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();

    if (hour >= 12) {
        hour -= 12;
    }

    let hourCurrentDeg = (hour * 30) + (minute * 0.5);
    let minuteCurrentDeg = minute * 6;

    if (hourCurrentDeg <= 180) {
        document.querySelector("#hour-hand").style.transform = `rotate(${hourCurrentDeg}deg)`;
    } else {
        document.querySelector("#hour-hand").style.transform = `rotate(${hourCurrentDeg - 360}deg)`;
    }

    if (minuteCurrentDeg <= 180) {
        document.querySelector("#minute-hand").style.transform = `rotate(${minuteCurrentDeg}deg)`;
    } else {
        document.querySelector("#minute-hand").style.transform = `rotate(${minuteCurrentDeg - 360}deg)`;
    }
}

setInterval(updateClock, 1000);

const transition = document.querySelector("#minute-hand");

transition.addEventListener("transitionstart", function() {
    // document.querySelector("#minute-hand-sound").play();
    console.log("Hill Valley's clock minute hand sound");
})