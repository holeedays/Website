var wordArray = ["move", "size", "crazy"];
var font;

var moveFinal;
var sizeFinal;
var crazyFinal;

var mouseClicks = 1;

var move1 = {
    oscillatingFactor: -1,
    int: 0
}

var move2 = {
    y: 0,
    speed: 1,
    gravity: 0.2
}

var move3 = {
    xPoints: [],
    yPoints: [],
    moveFactor: -51,
    int: 0
}

var size1 = {
    speed: 1,
    smallPoints: [],
    bigPoints: []
}

var size2 = {
    speed: 1,
    smallPoints: [],
    bigPoints: []
}

var size3 = {
    timer: 0,
    smallPoints: [],
    middlePoints: [],
    bigPoints: []
}

var crazy1 = {
    shadeValue: 256,
    int: 0
}

var crazy2 = {
    timer: 0
}

var crazy3 = {
    lineOrigin: [0,0]
}

function preload() {
    // font = loadFont("Advanced Comp P5js Projects/proj 1/Coolvetica.otf");
    font = loadFont("Advanced Comp P5js Projects/proj 1/Coolvetica.otf");
}

function setup() {
    createCanvas(600, 600).parent("ACCsketch-container1");

    setupGlobalParameters();

    moveFinal = new MoveFinal(wordArray[0], width/2 - 125, height/2 + 25, 100, 1);
    moveFinal.setup();

    sizeFinal = new SizeFinal(wordArray[1], width/2 - 100, height/2 + 25, width/2 - 160, height/2 + 50, 100, 200, 2);
    sizeFinal.setup();

    crazyFinal = new CrazyFinal(wordArray[2], width/2 - 75, height/2 - 50, 100, 10, 1);
    crazyFinal.setup();
}

function draw() {
    background(0);

    switch(mouseClicks) {
        case 1:
            fill(255);
            noStroke();

            moveFinal.update();
            moveFinal.display();
            break;
        case 2:
            fill(255);
            noStroke();

            sizeFinal.update();
            sizeFinal.display();
            break;
        case 3:
            fill(255);
            noStroke();

            crazyFinal.update();
            crazyFinal.display();
            break;
        case 4:
            fill(255);
            noStroke();

            Move1(wordArray[0]);
            break;
        case 5:
            Move2(wordArray[0]);
            break;
        case 6:
            Move3(wordArray[0]);
            break;
        case 7:
            Size1(wordArray[1]);
            break;
        case 8:
            Size2(wordArray[1]);
            break;
        case 9:
            Size3(wordArray[1]);
            break;
        case 10: 
            background(255);
            Crazy1(wordArray[2]);
            break;
        case 11:
            Crazy2(wordArray[2]);
            break;
        case 12:
            Crazy3(wordArray[2]);
            break;
        case 13:
            resetAll();
            break;
    }
}

function setupGlobalParameters() {

    angleMode(DEGREES);
    textAlign(CENTER);
    fill(255);
    textSize(15);
    textFont(font);
}

function resetAll() {

    moveFinal.reset();

    sizeFinal.reset();

    crazyFinal.reset();

    for (let i = 0; i < crazy3.lineOrigin.length; i++)
        crazy3.lineOrigin[i] = 0;

    move1.oscillatingFactor = -1;
    move1.int = 0;
    move2.y = 0;
    move2.speed = 1;
    move2.gravity = 0.2;
    move3.xPoints = [];
    move3.yPoints = [];
    move3.moveFactor = -51;
    move3.int = 0;
    size1.speed = 1;
    size1.smallPoints = [];
    size1.bigPoints = [];
    size2.speed = 1;
    size2.smallPoints = [];
    size2.bigPoints = [];
    size3.timer = 0;
    size3.smallPoints = [];
    size3.middlePoints = [];
    size3.bigPoints = [];
    crazy1.shadeValue = 256;
    crazy1.int = 0;
    crazy2.timer = 0;
    mouseClicks = 1;
}

function mousePressed() {

    mouseClicks++;
}

function keyPressed() {

    if (key === 'e') {

        if (mouseClicks === 1) 
            moveFinal.amplitude += .1;

        if (mouseClicks === 2) {
            sizeFinal.switch ++;

            if (sizeFinal.ePressed === false)
                sizeFinal.ePressed = true;
        }
           
        if (mouseClicks === 3)
            crazyFinal.strobeSpeed ++;
    }
}

