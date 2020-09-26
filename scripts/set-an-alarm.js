// Global variables

const windowWidth = window.innerWidth,
    container = document.querySelector(".container"),
    clock = document.querySelector(".clock"),
    dial = document.querySelector(".dial"),
    // hourHand = document.querySelector(".hour-hand"), /* already been declared */
    // minuteHand = document.querySelector(".minute-hand"), /* already been declared */
    setAnAlarm = document.querySelector(".set-an-alarm"),
    label = document.querySelector("#label"),
    color = document.querySelector("#color"),
    hour = document.querySelector("#hour"),
    minute = document.querySelector("#minute"),
    buttonCancelSetAnAlarm =  document.querySelector(".button-cancel-set-an-alarm"),
    buttonSetAnAlarm = document.querySelector(".button-set-an-alarm");

// Event listeners

buttonCancelSetAnAlarm.addEventListener("click", cancelAlarmSettings);

buttonSetAnAlarm.addEventListener("click", openAlarmSettings);

// Functions

function closeAlarmSettings() {
    if (windowWidth > 0 && windowWidth <= 360) {
        container.style.paddingTop = "calc(50vh - 8rem - 2.25rem - 1.75rem)";
        dial.style.width = "16rem";
        dial.style.height = "16rem";
        dial.style.boxShadow = "0 0 20px 10px rgba(35, 35, 40, .24)";
        hourHand.style.width = "16rem";
        hourHand.style.height = "16rem";
        minuteHand.style.width = "16rem";
        minuteHand.style.height = "16rem";
        setAnAlarm.style.display = "none";
        buttonSetAnAlarm.style.display = "flex";
    } else if (windowWidth > 360 && windowWidth < 500) {
        container.style.paddingTop = "calc(50vh - 9rem - 2.25rem - 1.75rem)";
        dial.style.width = "18rem";
        dial.style.height = "18rem";
        dial.style.boxShadow = "0 0 24px 12px rgba(35, 35, 40, .24)";
        hourHand.style.width = "18rem";
        hourHand.style.height = "18rem";
        minuteHand.style.width = "18rem";
        minuteHand.style.height = "18rem";
        setAnAlarm.style.display = "none";
        buttonSetAnAlarm.style.display = "flex";
    } else if (windowWidth >= 500) {
        container.style.paddingTop = "calc(50vh - 12.125rem - 2.25rem - 1.75rem)";
        clock.style.paddingTop = "2.25rem";
        dial.style.width = "24.25rem";
        dial.style.height = "24.25rem";
        dial.style.boxShadow = "0 0 32px 16px rgba(35, 35, 40, .24)";
        hourHand.style.width = "24.25rem";
        hourHand.style.height = "24.25rem";
        minuteHand.style.width = "24.25rem";
        minuteHand.style.height = "24.25rem";
        setAnAlarm.style.display = "none";
        buttonSetAnAlarm.style.display = "flex";
    }
}

function clearAlarmSetting() {
    label.value = "";
    color.value = "";
    hour.value = "";
    minute.value = "";
}

function cancelAlarmSettings() {
    closeAlarmSettings();
    clearAlarmSetting();
}

function openAlarmSettings() {
    if (windowWidth > 0 && windowWidth <= 360) {
        container.style.paddingTop = "3.5rem";
        dial.style.width = "12rem";
        dial.style.height = "12rem";
        dial.style.boxShadow = "0 0 40px 10px rgba(35, 35, 40, .16)";
        hourHand.style.width = "12rem";
        hourHand.style.height = "12rem";
        minuteHand.style.width = "12rem";
        minuteHand.style.height = "12rem";
        setAnAlarm.style.display = "block";
        buttonSetAnAlarm.style.display = "none";
    } else if (windowWidth > 360 && windowWidth < 500) {
        container.style.paddingTop = "3.5rem";
        dial.style.width = "13rem";
        dial.style.height = "13rem";
        dial.style.boxShadow = "0 0 48px 12px rgba(35, 35, 40, .16)";
        hourHand.style.width = "13rem";
        hourHand.style.height = "13rem";
        minuteHand.style.width = "13rem";
        minuteHand.style.height = "13rem";
        setAnAlarm.style.display = "block";
        buttonSetAnAlarm.style.display = "none";
    } else if (windowWidth >= 500) {
        container.style.paddingTop = "3.5rem";
        clock.style.paddingTop = "0";
        dial.style.width = "18rem";
        dial.style.height = "18rem";
        dial.style.boxShadow = "0 0 64px 16px rgba(35, 35, 40, .16)";
        hourHand.style.width = "18rem";
        hourHand.style.height = "18rem";
        minuteHand.style.width = "18rem";
        minuteHand.style.height = "18rem";
        setAnAlarm.style.display = "grid";
        buttonSetAnAlarm.style.display = "none";
    }
}