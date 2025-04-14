// machine learning; we are using google's teachable machine

var capture, classifier;
var imageModelURL = "https://teachablemachine.withgoogle.com/models/2Ps20yVEB/"

var detectionResults;

function preload() {

    classifier = ml5.imageClassifier(imageModelURL + "model.json", 
        {
            flipped: true
        }
    );
}


function setup() {

    createCanvas(windowWidth, windowHeight);
    capture = createCapture(VIDEO);
    capture.hide();

    classifier.classifyStart(capture, gotResult);
}

function draw() {

    background(220);
    image(capture, 0, 0, width, height);

    console.log(detectionResults);
}

function gotResult(results) {

    // detectionResults = results[0].label;

    detectionResults = results;
}