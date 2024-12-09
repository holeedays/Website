const increment = 10; // offset value that is applied to most x, y dimensions of each shape
let randomXlims; // sets the random width of all shapes
let randomYlims; // sets the random height of all shapes
let i = 0; // interval variable for timing variations in attributes
let showText = true;

// these variables are to get random RGB values for the fill of the face
let randomRed = 255;
let randomGreen = 255;
let randomBlue = 255;

// these variables are to get random RGB values for the background fill
let randomRed2 = 255;
let randomGreen2 = 255;
let randomBlue2 = 255;

let customFont; // need to predefine it out of all functions to preload custom font and add it

function setup() {
  createCanvas(400, 400).parent("sketch-container2");
  strokeJoin(ROUND); // allows vertices to be rounded instead of sharp
}

function preload() {
  customFont = loadFont('P5js Stuff/Awesome_production_2_2024_12_06_15_29_38/Soda Cream.otf');  
}

function draw() { // draw() tries to run @ 60 fps
  
  background(randomRed2, randomBlue2, randomGreen2);
  
  // string variables here for starter text
  let beginningText = 'Mouse-click to change face color';
  let beginningText2 = 'Key-press to change background color - enjoy!'

  // show the starting text until mouse is clicked or key is clicked
  if (showText === true) {
    textAlign(CENTER, CENTER);
    textFont(customFont, 20);
    text(beginningText, width/2, 10);
    text(beginningText2, width/2, 370);
    if(mouseIsPressed === true || keyIsPressed === true) {
      showText = false;
      }
  }
  // sets the randomness variables: size of the face features change every 20/60 FPS or every 1/3 of a second
  i += 1; 
  if (i >= 20) {
    randomXlims = random(0, mouseX); // don't worry about the errors, the mouse is outside of the frame
    randomYlims = random (0, mouseY);
    // console.log(randomXlims, randomYlims); 
    // console.log(frameCount);
    i = 0
  }
  
  // setting origin to center 
  translate(width/2, height/2);
  
  // head
  push();
    stroke(randomRed, randomGreen, randomBlue); 
    strokeWeight(40);
    fill(randomRed, randomGreen, randomBlue);
    ellipse(0, 0, mouseX + increment, mouseY + increment);
  pop();
  push();
  
    // reads mouseX and mouseY as the standard cartesian plane, not translated one
  
      noFill();
      strokeWeight(mouseX/17 + 5);
  
    // nose
    push();
      fill(0);
      triangle(0, -randomYlims/4, randomXlims/20 + increment, randomYlims/20, -randomXlims/20 - increment, randomYlims/20);
      noStroke();
      fill(randomRed, randomGreen, randomBlue);
      ellipse(-randomXlims/20 - increment, randomYlims/20 + increment, randomXlims/10, randomYlims/10);
      ellipse(randomXlims/20 + increment, randomYlims/20 + increment, randomXlims/10, randomYlims/10);
    pop();
  
    push();
      strokeWeight(mouseX/23 + 5);
      // NOTE: dividing mouseX or mouseY by a larger number slows acceleration of geometry
      // these be the eyes
      arc(-mouseX/5 - increment, -mouseY/7 - increment, randomXlims/4 + increment, randomYlims/5, PI, 0);
      arc(mouseX/5 + increment, -mouseY/7 - increment, randomXlims/4 + increment, randomYlims/5, PI, 0);
  
      // eyebrows
      line(-randomXlims/3 - increment, -mouseY/3 - increment, -randomXlims/4 + increment, -mouseY/3 - increment);
      line(randomXlims/3 + increment, -mouseY/3 - increment, randomXlims/4 - increment, -mouseY/3 - increment);

  
      // dimples of the mouth
      strokeWeight(mouseX/19 + 5);
      line(-randomXlims/3.5 - increment, randomYlims/5.2 + increment, -randomXlims/5, randomYlims/5.2 + increment);
      line(randomXlims/3.5 + increment, randomYlims/5.2 + increment, randomXlims/5, randomYlims/5.2 + increment);
    pop();
  
      // mouth smiley :)
      arc(0, randomYlims/5 + increment, randomXlims/2 + increment, randomYlims/2.5, 0 + .05, PI - .05);
      
  pop();
  
}

function mousePressed() {
  randomRed = random(0,255);
  randomGreen = random(0,255);
  randomBlue = random(0,255);
}

function keyPressed() {
  randomRed2 = random(0,255);
  randomGreen2 = random(0,255);
  randomBlue2 = random(0,255);
}