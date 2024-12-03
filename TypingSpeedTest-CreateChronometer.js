const theTimer = document.querySelector(".timer");
const textArea = document.querySelector("#test-area");
const originTxt = document.querySelector("#origin-text h2").innerHTML;
const testWrapper = document.querySelector("#test-area");
const resetButton = document.querySelector("#reset");


var Timer = new Array(0, 0, 0, 0);
var timeRunnig = false;
var interval;


function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

function runTimer() {
    let currectTime = leadingZero(Timer[0]) + ":" + leadingZero(Timer[1]) + ":" + leadingZero(Timer[2]);
    theTimer.innerHTML = currectTime;
    Timer[3]++; // صدم ثانیه
    Timer[0] = Math.floor((Timer[3] / 100) / 60); //عدد صحیح تابع فلور دقیقه
    Timer[1] = Math.floor(Timer[3] / 100) - (Timer[0] * 60); //ثانیه 
    Timer[2] = Math.floor(Timer[3] - (Timer[1] * 100) - (Timer[0] * 6000)); // صدم ثانیه با احتساب دقیقه و ثانیه

}


function cronometer() {
    let txtEnteredLength = textArea.value.length;
    if (txtEnteredLength == 0 && !timeRunnig) {
        timeRunnig = true;
        interval = setInterval(runTimer, 10);
    }
}


function spellCheck() {
    let txtEntered = textArea.value;
    let originTxtMatch = originTxt.substring(0, txtEntered.length);

    if (txtEntered == originTxt) {

        testWrapper.style.borderColor = "green";
        clearInterval(interval);

    } else if (txtEntered == originTxtMatch) {

        testWrapper.style.borderColor = "#FFB200";

    } else if (txtEntered == null) {
        testWrapper.style.borderColor = "gray";

    } else {

        testWrapper.style.borderColor = "red";

    }

}


function reset() {
    clearInterval(interval);
    Timer = new Array(0, 0, 0, 0);
    timeRunnig = false;
    interval == null;
    textArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "gray";

}



//events
textArea.addEventListener('keypress', cronometer);
textArea.addEventListener('keyup', spellCheck);
resetButton.addEventListener('click', reset);










// substring()
var testSub = "Hello Word";
testSub = testSub.substring(0, 5);
console.log(testSub);