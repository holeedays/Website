
function Crazy1(string) {

    noStroke();

    let points = font.textToPoints(string, width/2 - 175, height/2 + 50, 100, {sampleFactor: 0.3});

    if (crazy1.shadeValue > 255)
        crazy1.int = -1;
    else if (crazy1.shadeValue < 0)
        crazy1.int = 1;

    crazy1.shadeValue += crazy1.int * deltaTime/10;


    for (let i = 0; i < points.length; i++) {
        fill(crazy1.shadeValue + 210);
        circle(points[i].x, points[i].y, 5);
        fill(crazy1.shadeValue + 190);
        circle(points[i].x + 10, points[i].y - 10, 5);
        fill(crazy1.shadeValue + 170);
        circle(points[i].x + 20, points[i].y - 20, 5);
        fill(crazy1.shadeValue + 150);
        circle(points[i].x + 30, points[i].y - 30, 5);
        fill(crazy1.shadeValue + 130);
        circle(points[i].x + 40, points[i].y - 40, 5);
        fill(crazy1.shadeValue + 110);
        circle(points[i].x + 50, points[i].y - 50, 5);
        fill(crazy1.shadeValue + 90);
        circle(points[i].x + 60, points[i].y - 60, 5);
        fill(crazy1.shadeValue + 70);
        circle(points[i].x + 70, points[i].y - 70, 5);
        fill(crazy1.shadeValue + 50);
        circle(points[i].x + 70, points[i].y - 70, 5);
        fill(crazy1.shadeValue + 30);
        circle(points[i].x + 80, points[i].y - 80, 5);
        fill(crazy1.shadeValue + 10);
        circle(points[i].x + 90, points[i].y - 90, 5);
    }
}

function Crazy2(string) {

    noStroke();

    let points = font.textToPoints(string, width/2 - 100, height/2 + 50, 100, {sampleFactor: 0.3});
    
    let randomJitterX = random(-150, 150);
    let randomJitterY = random(-150, 150);
    let randomR = int(random(0, 255));
    let randomG = int(random(0, 255));
    let randomB = int(random(0, 255));

    if (crazy2.timer > 3) {
        for (let p of points) {
            fill(randomR, randomG, randomB);
            circle(p.x + randomJitterX, p.y + randomJitterY, 5);
        }
        crazy2.timer = 0;
    }

    crazy2.timer += deltaTime/10;
}

function Crazy3(string) {

    let points = font.textToPoints(string, mouseX, mouseY, 100, {sampleFactor: 0.2});

    textAlign(CENTER);
    fill(255);

    text("hold spacebar down to see the word", width/2, 500);

    push();
    
    stroke(255);

    for (let p of points) {
        line(p.x, p.y, crazy3.lineOrigin[0], crazy3.lineOrigin[1]);
    }

    pop();
    
    if (keyIsDown(32)) {
        crazy3.lineOrigin[0] = random(0, width);
        crazy3.lineOrigin[1] = random(0, height);
    } 
}

class CrazyFinal {

    constructor(string, x, y, fontSize, arrayLength, strobeSpeed) {

        this.string = string;
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;

        this.strobeSpeed = strobeSpeed;

        this.arrayLength = arrayLength;
        this.masterArray = [];
        this.shadeArray = [];

        this.shadeValue = 0;
        this.shadeIncrement = 1;
    }

    setup() {

        this.createArrays();
        this.setupShadeValues();
    }

    update() {

        this.updateShadeValues();
    }

    display() {

        for (let i = 0; i < this.arrayLength; i++) {
            fill(this.shadeArray[i]);
            for (let j = 0; j < this.masterArray[i].length; j++) {
                circle(this.masterArray[i][j].x, this.masterArray[i][j].y, 5);
            }
        }

        push();
            if (this.strobeSpeed === 1) {
                fill(255);
                text("(EPILEPSY WARNING) Keep pressing E to increase strobe speed", width/2, 500);
            }
        pop();
    }

    createArrays() {

        for (let i = 0; i < this.arrayLength; i++) {

            this.points = font.textToPoints(this.string, this.x - i * 10, this.y + i * 10, this.fontSize, {sampleFactor: 0.3});
            this.masterArray.push(this.points);
        }
    }

    setupShadeValues() {

        for (let i = 0; i < this.arrayLength; i++) {

            this.shadeArray.push(0); 
        }
    }

    updateShadeValues() {

        if (this.shadeValue >= 255/this.arrayLength)
            this.shadeIncrement = -1;
        else if (this.shadeValue <= -255/this.arrayLength)
            this.shadeIncrement = 1;

        this.shadeValue += this.shadeIncrement * deltaTime/10 * this.strobeSpeed;

        for (let i = 0; i < this.arrayLength; i++) {
            this.shadeArray[i] += this.shadeValue * i;

            if (this.shadeArray[i] > 255)
                this.shadeArray[i] = 255;
            if (this.shadeArray[i] < 0)
                this.shadeArray[i] = 0;

            // constrain(this.shadeArray[i]);
        }
    }

    reset() {

        this.shadeValue = 0;
        this.shadeIncrement = 1;
        this.strobeSpeed = 1;
    }

}