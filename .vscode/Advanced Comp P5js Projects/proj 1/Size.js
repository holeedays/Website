function Size1(string) {

    noStroke();

    let points = font.textToPoints(string, width/2 - 100, height/2, 200, {sampleFactor: 0.1});

    if (size1.bigPoints.length != points.length) {
        size1.smallPoints = font.textToPoints(string, width/2 - 100, height/2, 100, {sampleFactor: 0.2});
        size1.bigPoints = font.textToPoints(string, width/2 - 150, height/2 + 50, 200, {sampleFactor: 0.1});
    }
   
    for (let i = 0; i < size1.smallPoints.length; i++) {

        if (size1.smallPoints[i].x <= size1.bigPoints[i].x)
            size1.smallPoints[i].x += size1.speed * deltaTime/50; // the e inflates really slow
        
        if (size1.smallPoints[i].x >= size1.bigPoints[i].x)
            size1.smallPoints[i].x -= size1.speed * deltaTime/100;

        if (size1.smallPoints[i].y <= size1.bigPoints[i].y)
            size1.smallPoints[i].y += size1.speed * deltaTime/100;

        if (size1.smallPoints[i].y >= size1.bigPoints[i].y)
            size1.smallPoints[i].y -= size1.speed * deltaTime/100;

        circle(size1.smallPoints[i].x, size1.smallPoints[i].y, 5);
    }
}

function Size2(string) {

    noStroke();

    let points = font.textToPoints(string, width/2 - 100, height/2, 200, {sampleFactor: 0.1});

    if (size2.bigPoints.length != points.length) {
        size2.smallPoints = font.textToPoints(string, width/2 - 100, height/2, 100, {sampleFactor: 0.2});
        size2.bigPoints = font.textToPoints(string, width/2 - 150, height/2 + 50, 200, {sampleFactor: 0.1});
    }
   
    for (let i = 0; i < size2.smallPoints.length; i++) {

        if (size2.smallPoints[i].x <= size2.bigPoints[i].x)
            size2.bigPoints[i].x -= size2.speed * deltaTime/50; // the e shrinks really slow
        
        if (size2.smallPoints[i].x >= size2.bigPoints[i].x)
            size2.bigPoints[i].x += size2.speed * deltaTime/100;

        if (size2.smallPoints[i].y <= size2.bigPoints[i].y)
            size2.bigPoints[i].y -= size2.speed * deltaTime/100;

        if (size2.smallPoints[i].y >= size2.bigPoints[i].y)
            size2.bigPoints[i].y += size2.speed * deltaTime/100;

        circle(size2.bigPoints[i].x, size2.bigPoints[i].y, 5);
    }
}

function Size3(string) {

    noStroke();

    let points = font.textToPoints(string, width/2 - 100, height/2, 100, {sampleFactor: 0.2});

    if (size3.smallPoints.length != points.length) {
        size3.smallPoints = font.textToPoints(string, width/2 - 150, height/2, 100, {sampleFactor: 0.2});
        size3.middlePoints = font.textToPoints(string, width/2 - 150, height/2, 150, {sampleFactor: 0.15});
        size3.bigPoints = font.textToPoints(string, width/2 - 150, height/2, 200, {sampleFactor: 0.1});
    }

    size3.timer += deltaTime/100;

    if (size3.timer > 0 && size3.timer <= 1)
        for (let p of size3.smallPoints)
            rect(p.x, p.y, 5, 5);
    else if (size3.timer > 1 && size3.timer <= 2)
        for (let p of size3.middlePoints)
            rect(p.x, p.y, 5, 5);
    else if (size3.timer > 2 && size3.timer <= 3) 
        for (let p of size3.bigPoints)
            rect(p.x, p.y, 5, 5);
    else if (size3.timer > 3)
            size3.timer = 0;
}

class SizeFinal {

    constructor(string, xSmall, ySmall, xBig, yBig, fontSizeSmall, fontSizeBig, speed) {

        this.smallPoints = font.textToPoints(string, xSmall, ySmall, fontSizeSmall, {sampleFactor: 0.2});
        this.bigPoints = font.textToPoints(string, xBig, yBig, fontSizeBig, {sampleFactor: 0.1})

        this.points = font.textToPoints(string, xSmall, ySmall, fontSizeSmall, {sampleFactor: 0.2}); // these are the points we are going to manipulate

        this.switch = 0;
        this.speed = speed;

        this.ePressed = false;
    }

    setup() {

    }

    update() {

        if (this.switch % 2 === 0)
            this.expand();
        else if (this.switch % 2 === 1)
            this.shrink();

        // console.log(this.switch);
    }
    
    display() {

        for (let point of this.points) {
            circle(point.x, point.y, 5);
        }

        if (this.ePressed === false) {
            text("Press E to shrink/expand the text", width/2, 500);
        }
    }

    expand() {

        for (let i = 0; i < this.points.length; i++) {

            if (this.points[i].x <= this.bigPoints[i].x)
                this.points[i].x += this.speed * deltaTime/50; // the e inflates really slow
            
            if (this.points[i].x >= this.bigPoints[i].x)
                this.points[i].x -= this.speed * deltaTime/50;
    
            if (this.points[i].y <= this.bigPoints[i].y)
                this.points[i].y += this.speed * deltaTime/100;
    
            if (this.points[i].y >= this.bigPoints[i].y)
                this.points[i].y -= this.speed * deltaTime/100;
        }
    }

    shrink() {

        for (let i = 0; i < this.points.length; i++) {

            if (this.smallPoints[i].x <= this.points[i].x)
                this.points[i].x -= this.speed * deltaTime/50; // the e inflates really slow
            
            if (this.smallPoints[i].x >= this.points[i].x)
                this.points[i].x += this.speed * deltaTime/50;
    
            if (this.smallPoints[i].y <= this.points[i].y)
                this.points[i].y -= this.speed * deltaTime/100;
    
            if (this.smallPoints[i].y >= this.points[i].y)
                this.points[i].y += this.speed * deltaTime/100;
        }
    }

    reset() {

        this.switch = 0;
        this.ePressed = false;
    }
}
