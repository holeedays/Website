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