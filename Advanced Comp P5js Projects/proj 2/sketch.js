// this sketch goes over the DOM element of video capture


var capture;
var captureImage;



function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO); // this is an html element btw hence the bottom location
  capture.hide(); // hides the webcam located at the bottom 
  capture.size(1920, AUTO);

  pixelDensity(.5);
}

function draw() {
  // background(220);

  capture.loadPixels(); // capture has an attribute called pixels (i.e. capture.pixels)
  // this returns the array including the rgba values of each pixel
  // console.log(capture.pixels);

  for (let i = 0; i < capture.pixels.length; i += 4) {


    // capture.pixels[i] = r;
    // capture.pixels[i+1] = random(255); // noise!
    // capture.pixels[i+1] = g;
    // capture.pixels[i+2] = b;
  }

  // mosaicFilter();


  capture.updatePixels();

  image(capture, 0, 0); // you can actually put your video cam into the image function
  // // I'm not sure if the fit parameters works

}







function mosaicFilter() {

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
