var startbtn;
var stopbtn;
var size;
var option;
var speed;
var selectedAnimation;
var animationSpeed = 250;
var timeout;
var display;


window.onload = () => {
    startbtn = document.querySelector('#start');
    stopbtn = document.getElementById('stop');
    size = document.getElementById('size');
    option = document.getElementById('animation');
    speed = document.getElementById('turbo');
    display = document.getElementById('display');
    loadEventListeners();
}
function loadEventListeners() {
    startbtn.addEventListener('click', startButton);
    stopbtn.addEventListener('click', stopButton);
    size.addEventListener('change',sizeChange);
    // option.addEventListener('change',optionChange);
    speed.addEventListener('change', speedChange);

}
function startButton() {
    startbtn.disabled = true;
    stopbtn.disabled = false;
    option.disabled = true;
    optionChange();
}

function sizeChange() {
    $("#display").css("font-size", `${size.value}`);

}
function optionChange() {

    let texts = ANIMATIONS[option.value].split("=====\n");
    let idx = 0;

    var displayFunction = function () {
        display.value = texts[idx];
        idx = (idx + 1) % texts.length;
        timeOut = setTimeout(displayFunction, animationSpeed);
    };
    timeOut = setTimeout(displayFunction, animationSpeed);
}
function speedChange() {
    if (animationSpeed == 250) {
        animationSpeed = 50;
    }
    else {
        animationSpeed = 250;
    }
}
function stopButton() {
    startbtn.disabled = false;
    stopbtn.disabled = true;
    option.disabled = false;
    clearTimeout(timeOut);
    display.value = ANIMATIONS[selectedAnimation.value];
    
}

