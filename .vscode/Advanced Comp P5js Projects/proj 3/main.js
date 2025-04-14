// we're learning about DOM elements!

var button = document.getElementById("firstButton");

// first parameter is the event ("click" is an actual event in html; it's onclick for html element), the second is the callback function
button.addEventListener("click", ClickButton); 

function ClickButton() {

    console.log("Button has been pressed");
}



const slider = document.getElementById("slider");
const SliderCounterDisplay = document.getElementById("sliderCounterDisplay");


slider.addEventListener("input", SliderCounter);

function SliderCounter() {
    SliderCounterDisplay.innerHTML = slider.value;
    console.log(slider.value);
}