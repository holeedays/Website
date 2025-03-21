var capture;





let faceapi;
let detections = [];

let video;
let canvas;

var layers;
var expressions = {neutral, happy, angry, sad, disgusted, surprised, fearful};
var pixelationValue = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("canvas");

  video = createCapture(VIDEO);// Create the video
  video.id("video");
  video.size(1920, 1080);
  video.hide();

  const faceOptions = {
    withLandmarks: true,
    withExpressions: true,
    withDescriptors: true,
    minConfidence: 0.5
  };

  //Initialize the model
  
  faceapi = ml5.faceApi(video, faceOptions, faceReady); // faceApi is deprecated in the version 1.0 of ML5.js so we're using an older library
  // this function is a consistent loop given the construction of the callback function faceReady() --> gotFaces()

//   layers = {

//     layer1: createGraphics(width, height),
//     layer2: createGraphics(width, height)
//   }
}

function draw() {


    video.loadPixels();

    clear();//Draw transparent background

    // image(video, 0, 0);

    // draw face scans
    drawBoxes(detections);//Draw detection box
    drawLandmarks(detections); // Draw all the face points

    createExpressions();
    
    pixelateExpression();
    drawExpressions(detections, 40, 600, 50);//Draw face expression text

    video.updatePixels();
}


function faceReady() {

    faceapi.detect(gotFaces);// Start detecting faces
}

function gotFaces(error, result) { 
    if (error) {
        console.log(error);
        return;
    }

    detections = result; //Now all the data in this detections
    // console.log(detections);

    faceapi.detect(gotFaces);// Call the function again at here, causes infinite loop
}

function drawBoxes(detections){

  if (detections.length > 0) {//If at least 1 face is detected
    for (let i = 0; i < detections.length; i++){
        let {x, y, width, height} = detections[i].alignedRect._box;
        stroke(44, 169, 225);
        strokeWeight(1);
        noFill();
        rect(x, y, width, height);
    }
  }
}

function drawLandmarks(detections){

  if (detections.length > 0) {//If at least 1 face is detected: 
    for (let i = 0; i < detections.length; i++){
      let points = detections[i].landmarks.positions;
      for (let j = 0; j < points.length; j++) {
        stroke(44, 169, 225);
        strokeWeight(3);
        square(points[j]._x, points[j]._y,2);
      }
    }
  }
}

function createExpressions() {

    if (detections.length > 0) {
        expressions = detections[0].expressions;
    }
}

function drawExpressions(detections, x, y, textYSpace){

  if(detections.length > 0){//If at least 1 face is detected

        // console.log(2);

        // let {neutral, happy, angry, sad, disgusted, surprised, fearful} = detections[0].expressions; // expressions seem to be an inbuilt system with faceApi and not face mesh 

        // image classification also doesn't achieve the same thing for some reason :/
        textFont('Helvetica Neue');
        textSize(30);
        noStroke();
        fill(44, 169, 225);

        text("neutral:       " + nf(expressions.neutral*100, 2, 2)+"%", x, y);
        text("happiness: " + nf(expressions.happy*100, 2, 2)+"%", x, y+textYSpace);
        text("anger:        " + nf(expressions.angry*100, 2, 2)+"%", x, y+textYSpace*2);
        text("sad:            "+ nf(expressions.sad*100, 2, 2)+"%", x, y+textYSpace*3);
        text("disgusted: " + nf(expressions.disgusted*100, 2, 2)+"%", x, y+textYSpace*4);
        text("surprised:  " + nf(expressions.surprised*100, 2, 2)+"%", x, y+textYSpace*5);
        text("fear:           " + nf(expressions.fearful*100, 2, 2)+"%", x, y+textYSpace*6);
  }
  else{//If no faces is detected

        // console.log(1);

        text("neutral: ", x, y);
        text("happiness: ", x, y + textYSpace);
        text("anger: ", x, y + textYSpace*2);
        text("sad: ", x, y + textYSpace*3);
        text("disgusted: ", x, y + textYSpace*4);
        text("surprised: ", x, y + textYSpace*5);
        text("fear: ", x, y + textYSpace*6);
  }
}

function pixelate(increment) {

    // let increment = 10; // quantity of circles basically
  
    for (let y = 0; y < video.height; y += increment) {
      for (let x = 0; x < video.width; x += increment) {
  
        let index = (x + y * video.width) * 4;
  
        let r = video.pixels[index];
        let g = video.pixels[index+1];
        let b = video.pixels[index+2];
        let a = video.pixels[index+3];
  
        noStroke();
        fill(r, g, b, a);
        rect(x, y, increment);
      }
    }
}

function pixelateExpression() {

    if (detections.length === 0) {
        return;
    }


    if (expressions.neutral*100 > 50) {

        pixelationValue = 10;
    }
    else if (expressions.happy*100 > 50) {

        pixelationValue -= 1;
        
        if (pixelationValue < 6) {
            pixelationValue = 6;
        }
    } 
    else if (expressions.sad*100 > 50) {

        pixelationValue += 2;

        if (pixelationValue > 20) {
            pixelationValue = 20;
        }
    }

    console.log(pixelationValue);

    pixelate(pixelationValue);
}





// function draw() {

//     capture.loadPixels();

//     // applyPointillistFilter();

//     // applyMotionBlur();

//     capture.updatePixels();

//     image(capture, 0, 0); // have to turn this off during pointillist filter
// }












////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function applyPointillistFilter() {

    var increment = (capture.pixels.length / 4) / 125;

    for (let i = 0; i < capture.pixels.length; i += increment) {

        var x1 = floor(random(capture.width));
        var y1 = floor(random(capture.height));
    
        // var x2 = floor(x1 + random(-10, 10));
        // var y2 = floor(y1 + random(-10, 10));
        
    
        var pixelColor = capture.get(x1, y1);
    
        fill(pixelColor);
        noStroke();
        circle(x1, y1, 10);
    }
}

function applyMotionBlur() {

    for (let i = 0; i < capture.pixels.length; i += 4) {

        var r = capture.pixels[i];
        var g = capture.pixels[i + 1];
        var b = capture.pixels[i + 2];

        var brightness = floor(random(0, (r + g + b) / 3));

        // capture.pixels[i] = random(0, 255);
        // capture.pixels[i + 1] = random(0, 255);
        // capture.pixels[i + 2] = random(0, 255);
        capture.pixels[i + 3] = brightness;
    }
}


function applyMosaicFilter() {

    let increment = 10; // quantity of circles basically
  
    for (let y = 0; y < capture.height; y += increment) {
      for (let x = 0; x < capture.width; x += increment) {
  
        let index = (x + y * capture.width) * 4;
  
        let r = capture.pixels[index];
        let g = capture.pixels[index+1];
        let b = capture.pixels[index+2];
        let a = capture.pixels[index+3];
  
        fill(r, g, b);
        circle(x,y,5);
      }
    }
  }



