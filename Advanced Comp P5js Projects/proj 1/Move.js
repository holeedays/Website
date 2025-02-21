function Move1(string) {

    noStroke();

    let points = font.textToPoints(string, width/2 - 150, height/2 - 100, 100, {sampleFactor: 0.1});

    if (move1.oscillatingFactor > 250)
        move1.int = -1;
    else if (move1.oscillatingFactor < 0)
        move1.int = 1;

    move1.oscillatingFactor += move1.int * deltaTime/10;

    for (let i = 0; i < points.length; i++) {
        circle(points[i].x, points[i].y + move1.oscillatingFactor, 5);
    }
}

function Move2(string) {

    noStroke();

    let points = font.textToPoints(string, width/2 - 150, height/2, 100, {sampleFactor: 0.1});
    
    for (let p of points) {
        circle(p.x, p.y + move2.y, 10);
    }

    move2.y = move2.y + move2.speed;
    move2.speed = move2.speed + move2.gravity;

    if (move2.y > 300)
        move2.speed = -0.95 * move2.speed;
}

function Move3(string) {

    noStroke();

    angleMode(DEGREES);

    let points = font.textToPoints(string, width/2 - 150, height/2, 100, {sampleFactor: 0.2});

    if (move3.xPoints.length != points.length) {

        for (let p of points) {
            move3.xPoints.push(p.x);
        }

        move3.xPoints.sort(); // organize all the x points

        for (let i = 0; i < move3.xPoints.length; i++) { // organize all the y points relative to the x points (something breaks here though)
            for (let j = 0; j < points.length; j++)
                if (move3.xPoints[i] == points[j].x) {
                    move3.yPoints.push(points[j].y);
                    break;
                }
        }
    }

    if (move3.moveFactor < -50)
        move3.int = 1;
    else if (move3.moveFactor > 50)
        move3.int = -1;

    move3.moveFactor += move3.int;

    for (let i = 0; i < move3.xPoints.length; i++) { // cause an oscillating shape
        circle (move3.xPoints[i], move3.yPoints[i] + sin(i * (360/move3.xPoints.length)) * move3.moveFactor, 5);
    }
}


class MoveFinal {

    constructor(string, x, y, fontSize, speed) {

        this.degrees = 0;
        this.amplitude = 1;

        this.speed = speed;

        this.points = font.textToPoints(string, x, y, fontSize, {sampleFactor: 0.2});
        this.xPoints = [];
        this.yPoints = [];

        this.yPointsBackup = [];
    }

    setup() {

        this.organizeArrays();
    }

    update() {

        this.calculateYPos();
    }

    display() {

        for (let i = 0; i < this.xPoints.length; i++) {
            circle(this.xPoints[i], this.yPoints[i], 5);
        }

        if (this.amplitude <= 1) // on keyPressed() the text dissappears
            text("Keep pressing E to increase the amplitude", width/2, 500);
    }

    organizeArrays() {

        for (let p of this.points) {
            this.xPoints.push(p.x);
        }

        this.xPoints.sort(); // sort the x array in numerical order
        
        for (let i = 0; i < this.xPoints.length; i++) { // all arrays should have the same length
            for (let j = 0; j < this.xPoints.length; j++) {
                if (this.xPoints[i] == this.points[j].x) {
                    this.yPoints.push(this.points[j].y);
                    this.yPointsBackup.push(this.points[j].y);
                    this.points[j].x = 0; // this is to make sure that we don't push the same y-coord for overlapping x-coords
                    break;
                }
            }
        }
    }

    calculateYPos() {

        this.degrees += this.speed * deltaTime/10;

        for (let i = 0; i < this.yPoints.length; i++) {

            this.moveFactor = sin((i + this.degrees) * (360/this.yPoints.length)) * this.amplitude;

            this.yPoints[i] += this.moveFactor;
        }
    }

    resetYPos() {
        
        this.yPointsLength = this.yPoints.length;

        this.yPoints.splice(0, this.yPointsLength);

        for (let i = 0; i < this.yPointsLength; i++)
            this.yPoints.push(this.yPointsBackup[i]);
    }

    reset() {

        this.resetYPos();
        this.amplitude = 1;
        this.degrees = 0;
    }
}
