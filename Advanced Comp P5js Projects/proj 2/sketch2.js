// ML5.js (machine learning)


// https://docs.ml5js.org/#/reference/handpose <-- this is the library and the tutorial for hands, there are a bunch of other tutorials so don't worry

var capture, handPose, faceMesh;
var hands = [];
var faces = [];


var sizeLeftEye = 20;
var sizeRightEye = 20;

function preload() {

    handPose = ml5.handPose();
    faceMesh = ml5.faceMesh();
}

function setup() {

    // set up camera
    createCanvas(windowWidth, windowHeight);
    capture = createCapture(VIDEO);
    capture.hide();
    capture.size(1920, AUTO);
    pixelDensity(0.2);

    // set up ml5 
    handPose.detectStart(capture, gotHands); // gotHands has a parameter(results), the results are stored in our hands array 
    // starts the model to detect hands
    // once our model starts, it is constantly looking for hands
    // once it finds hands, it calls gotHands


    faceMesh.detectStart(capture, gotFaces);

}

function draw() {
    background(220);

    capture.loadPixels();
    capture.updatePixels();

    image(capture, 0, 0);   

    fill(0, 255, 0);
    
    
    // for (let hand of hands) { // the hiearchy of the arrays are hands --> individual hand 
    //     // --> keypoints, keypoints3D, etc arrays --> x, y, and identification of the phalange node 

    //     console.log(hand);
    //     for (let kp of hand.keypoints) {

    //         circle(kp.x, kp.y, 10);
    //     }    
    // }


    // basically the same for loop but with numerics
    for (let i = 0; i < hands.length; i++) {

        const hand = hands[i];
        const currentKeypoints = hand.keypoints;

        // for (let j = 0; j < currentKeypoints.length; j++) {

        //     let keypoint = currentKeypoints[j];

        //     circle(keypoint.x, keypoint.y, 10);
        // }


        const pinchDistance = dist(currentKeypoints[8].x, currentKeypoints[8].y, 
            currentKeypoints[4].x, currentKeypoints[4].y);

        const midPoint = {

            x: (currentKeypoints[4].x + currentKeypoints[8].x) / 2,
            y: (currentKeypoints[4].y + currentKeypoints[8].y) / 2
        }
        
        circle(midPoint.x, midPoint.y, pinchDistance);
    }


    for (let i = 0; i < faces.length; i++) {

        const face = faces[i];
        const currentKeypoints = face.keypoints;

        for (let j = 0; j < currentKeypoints.length; j++) {

            let keypoint = currentKeypoints[j];

            circle(keypoint.x, keypoint.y, 10);
        }

        // sizeLeftEye = (face.leftEye.height) * 5;

        // sizeRightEye = (face.rightEye.height) * 5;

        // textAlign(CENTER);

        // const yOffset = 20;

        // textSize(sizeLeftEye);
        // text("👁️", face.leftEye.centerX, face.leftEye.centerY + yOffset);
        // textSize(sizeRightEye);
        // text("👁️", face.rightEye.centerX, face.rightEye.centerY + yOffset);

        

        console.log(face);

    }
   

}

function gotHands(results) {
    
    hands = results;
}

function gotFaces(results) {

    faces = results;
}