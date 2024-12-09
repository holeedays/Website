let increasing = true; // used for the translation of the shapes back and forth

let radius = 50;// width and height of the shape for the function ZeOpticalIllusion

let displacement1 = radius; // a measure of how far the surrounding shapes should be from the center shape, displacement 1 is for the smaller circles and displacement2 is for the bigger circles 

let displacement2 = radius + 20;

let theWheelDecide = 2; // this variable will be used in the nested loop to make sure the surrounding circles are big for one and small for the other

let bigCircles; // decides how big the big circles/squares can be, stores a random value within a certain range

let smallCircles; // decides how small the small circles/squares can be, also stores a random value within a certain

let diffCircleSize = false; // used in the for and nested for loop in my ZeOpticalIllusion function; it works hand in hand with the circlesAreDiff variable

let randomJitter; // used to change the size of one of the two main circles

let circlesAreDiff = false; // boolean for if the circles are different 

let circlesAreNotDiff = false; // boolean for if the circles are not different

let newIllusion = true; // boolean for whether a new pair of circles has been generated

let yesClicked = false; // boolean for whether yes was clicked

let noClicked = false; // boolean for whether no was clicked

let answered = false; // boolean for whether the question "Are these 2 circles the same size?" was answered

let countdown = 0; // used as a 2 second timer when yes or no has been selected

let SMILEKINDS; // this is for a custom font


function preload() {
  
  SMILEKINDS = loadFont('P5js Stuff/Optical_Illusions_5_2024_12_06_15_46_02/SMILE KINDS.otf');
}

function setup() {
  
  createCanvas(600, 600).parent("sketch-container5");
  
  angleMode(DEGREES);
  
  // these are just random assignments; the newIllusion if statement down below will generate actual values for the circles shown in sketch
  
  theWheelDecide = 0;
  
  bigCircles = 1;

  smallCircles = 1;
  
}

function draw() {
  background(240, 213, 227);
  
  // text
  
  push();
  
    textFont(SMILEKINDS);
    textAlign(CENTER);
    textSize(32);
  
    // title
  
    text("THE EBBINGHAUS ILLUSION GAME", width/2, height/6);

    textSize(25);
  
    // Question + Y/N
  
    text("Are these 2 circles the same size?", width/2, 5* height/6);
    text("Yup", width/4, 5.5 * height/6);
    text("Nope", 3 * width/4, 5.5 * height/6);
    
    // Highlights yes or no if you're hovering over the words
    
    if (mouseX < width/4 + 25 && mouseX > width/4 - 25 && mouseY < 5.5 * height/6 + 15 && mouseY > 5.5 * height/6 - 15) {
      
      fill(252, 250, 251);
      text("Yup", width/4, 5.5 * height/6);
      
      
    } else if (mouseX < 3 * width/4 + 25 && mouseX > 3 * width/4 - 25 && mouseY < 5.5 * height/6 + 15 && mouseY > 5.5 * height/6 - 15) {
      
      fill(252, 250, 251);
      text("Nope", 3 * width/4, 5.5 * height/6);
    }
  
  pop();

  // these variables are used to determine the amount of movement the smaller circles do
  
    // this is for the smaller surrounding circles
  
  let displacement1LowerLim = radius + smallCircles/10;
  let displacement1UpperLim = radius + 10;
  
    // this is for the bigger surrounding circles
    
  let displacement2LowerLim = radius + bigCircles/3;
  let displacement2UpperLim = radius + 50;
  
  // now we draw the circles
  push();
  
    fill(255, 245, 251);
  
    ZeOpticalIllusion(150, height/2, radius, 5);
  
  pop();
  
  // these 4 if statements just restrict how much the surrounding circles can translate 
  
  if (increasing === true) {
    displacement1 += deltaTime/25; 
    displacement2 += deltaTime/25;
  }
  
  if (displacement1 >= displacement1UpperLim && displacement2 >= displacement2UpperLim) {
    increasing = false;
  }
  
  if (increasing === false) {
    displacement1 -= deltaTime/25;
    displacement2 -= deltaTime/25;
  }
  
  if (displacement1 <= displacement1LowerLim && displacement2 <= displacement2LowerLim) {
    increasing = true;
  }
  
  push();
  
  // this section determines whether the player has selected an answer and if the circles are different or not: whether they picked the correct choice, they're greeted with a "you're right" or "you're wrong" message
  
    if (circlesAreNotDiff && answered) {
      push();
      
        rectMode(CENTER);

        fill(240);
        rect(width/2, height/2, width, height, 20, 20, 20, 20);
      
      pop();

      countdown ++;
      
      if (yesClicked) {
      
        textFont(SMILEKINDS);
        textAlign(CENTER);
        textSize(50);
        
        text("You're correct!", width/2, height/2);

      }
      
      if (noClicked) {
      
        textFont(SMILEKINDS);
        textAlign(CENTER);
        textSize(50);
        
        text("Sorry, you're wrong. :(", width/2, height/2);
        
        }  
      
       if (countdown > 120) {
        
        circlesAreNotDiff = false;
         
        yesClicked = false;
        noClicked = false;
         
        answered = false;
         
        countdown = 0;
        
      }
      
    }
      
    if (circlesAreDiff && answered) {
      
      push();
      
        rectMode(CENTER);

        fill(240);
        rect(width/2, height/2, width, height, 20, 20, 20, 20);
      
      pop();
      
      countdown ++;
      
      if (yesClicked) {
      
        textFont(SMILEKINDS);
        textAlign(CENTER);
        textSize(50);
        
        text("Sorry, you're wrong. :(", width/2, height/2);

      }
      
      if (noClicked) {
      
        textFont(SMILEKINDS);
        textAlign(CENTER);
        textSize(50);
        
        text("You're correct!", width/2, height/2);
      
        }
      
      if (countdown > 120) {
        
        circlesAreDiff = false;
        
        yesClicked = false;
        noClicked = false;
        
        answered = false;
        
        countdown = 0;
        
      }
    }
  
  // this whole if statement is only triggered when mouseClicked and when the section above has done running: this generates a new randomized set of values for the circles 
  
    if (newIllusion && answered === false) {
  
      theWheelDecide = round(random(0, 100));

      radius = floor(random(20, 70));

      bigCircles = round(random(radius + 20, radius + 50));

      smallCircles = round(random(radius - 20, radius - 10));

      displacement1 = radius + smallCircles/2;

      displacement2 = radius + bigCircles/2;

      let i = ceil(random(0, 10)); // we're just selecting a random value for i so we can determine if the 2 main circles are the same size or not

      if (i % 2 === 0) {

        diffCircleSize = true;

        circlesAreDiff = true;

        randomJitter = round(random(-70, 70));

        console.log(1);

        } else if (i % 2 !== 0) {

          circlesAreNotDiff = true;

        }

      newIllusion = false;

      }
  
  pop();

}

// the function that draws the circles

function ZeOpticalIllusion(x, y, radius, iterations) {
  
  // we're creating two circles surrounded by a number of circles of different sizes
  
    for(let centerPieces = 0; centerPieces < 2; centerPieces ++) {

      // big center circles
      
      let distance = centerPieces * 300;
      
      if (diffCircleSize === false) {
        
        circle(x + distance, y, radius);

      } else if (diffCircleSize === true) {
        
        circle(x + distance, y, radius + randomJitter);
        
        diffCircleSize = false;
      }
            
      for(let surroundingPieces = 0; surroundingPieces < iterations; surroundingPieces ++) {
          
          // the shapes around the center shape
        
          push();
        
            translate(x + distance, y);
        
            rotate(360/iterations * surroundingPieces);
        
            if ((theWheelDecide + centerPieces) % 2 !== 1) {
              
              circle(displacement1, 0, smallCircles);
              
            }
        
            if ((theWheelDecide + centerPieces) % 2 === 1) {
              
              circle(displacement2, 0, bigCircles)
              
            }
        
          pop();
      
      }
  }
}

function mouseClicked() {
  
  // parameters for countdown can be used to encompass the entire if-statement to prevent additional clicking when the "you're right" and "you're wrong" screen is shown
  
    // mouseClicked triggers a number of if statements (below when the ZeOpticalIllusion is called in draw)
  
  if (countdown === 0 || countdown > 120) {
    
    if (mouseX < width/4 + 25 && mouseX > width/4 - 25 && mouseY < 5.5 * height/6 + 15 && mouseY > 5.5 * height/6 - 15) {
    
      yesClicked = true;
      
      answered = true; 
      
      newIllusion = true;
    
    } else if (mouseX < 3 * width/4 + 25 && mouseX > 3 * width/4 - 25 && mouseY < 5.5 * height/6 + 15 && mouseY > 5.5 * height/6 - 15) {
    
      noClicked = true;
      
      answered = true;
      
      newIllusion = true;
    
    }
  }
}