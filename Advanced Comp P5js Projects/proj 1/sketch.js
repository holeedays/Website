var wordArray = ["move", "size", "crazy"];
var font;

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
    font = loadFont("Advanced Comp P5js Projects/proj 1/Coolvetica.otf");
}

function setup() {
    createCanvas(600, 600);

}

function draw() {
    background(0);

    switch(mouseClicks) {
        case 1:
            Move1(wordArray[0]);
            break;
        case 2:
            Move2(wordArray[0]);
            break;
        case 3:
            Move3(wordArray[0]);
            break;
        case 4:
            Size1(wordArray[1]);
            break;
        case 5:
            Size2(wordArray[1]);
            break;
        case 6:
            Size3(wordArray[1]);
            break;
        case 7: 
            background(255);
            Crazy1(wordArray[2]);
            break;
        case 8:
            Crazy2(wordArray[2]);
            break;
        case 9:
            Crazy3(wordArray[2]);
            break;
        case 10:
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
            break;
    }
}

function mousePressed() {
    mouseClicks++;
}





