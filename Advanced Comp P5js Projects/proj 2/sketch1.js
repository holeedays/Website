// this sketch goes over other DOM elements like sliders, buttons, etc


let slider, currentValue, button;

var r, g, b;

function setup() {

    createCanvas(400, 400);
    slider = createSlider (0, 50, 25, 1);
    slider.position(10, 10);



    button = createButton("Click");
    button.position(10, 40);

    button.mousePressed(repaint);

    // function call: repaint();
    // function callback: repaint <-- it is a function that is called after another function is 
    // initiated; integrated via javascript

    r = 255;
    g = 255;
    b = 255;
}


function draw() {

    background(220);

    currentValue = slider.value();

    fill(r, g, b);
    circle(width/2, height/2, currentValue * 10);
}

function repaint() {

    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
}