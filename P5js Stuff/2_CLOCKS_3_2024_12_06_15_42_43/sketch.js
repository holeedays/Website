let quadsInterval = 100; // 3, 6, 9, 12
let quadsSize = 20; // the size of the 3, 6, 9, 12 dots

let millisCounter; // the amount of milliseconds the project is currently running at

let tenMinsTracker; // counts when ten minutes has occurred since project start

let buttonsWidth = 200; // w & h for my buttons on the popup
let buttonsHeight = 100;

let bool = false; // set to true in the case of mousePressed()
let storedMillis = 0; // see in mousePressed()

let savedTimeMins = 0; // this records how much has the minute hand on the procrastinate timer rotated
let A = 0; // this var works in conjunction with savedTimeMins
let savedTimeHrs = 0; // same functionality as the savedTimeMins
let B = 0; // this var works in conjunction with SaveTimeHrs

// used for displaying the time text of the procrastination clock

let procrastinateHr = 0;
let procrastinateMin = 0;
let procrastinateSec = 0;

// these are all supplementary variables used for the time text

let nSec = 0;
let nMin = 0;
let nHr = 0;

let aSec = 0;
let aMin = 0;
let aHr = 0;

let storedPSec = 0;
let storedPMin = 0;
let storedPHr = 0;

// tenMins means 10 minutes or whatever you want to set it to --> it's the interval for the appearance of the tab
let tenMins = 10;



function setup() {
  createCanvas(600, 600).parent("sketch-container3");
  noStroke();
  angleMode(DEGREES);
  frameRate(60);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(220);
  
  let sec = second();
  let mins = minute();
  let hr = hour() - 12;
  
  // top/world clock
  
  push();
    translate(width/2, height/2 - 150);
  
    push();
      fill(255, 255, 255, 100);
      circle(0, 0, 200);
    pop();
  
    // console.log(hr, mins, sec);
    push();
      fill(255, 0, 0, 100);
      arc(0, 0, 200, 200, -90, 30*hr - 90);
      fill(0, 255, 0, 100);
      arc(0, 0, 200, 200, -90, 6*mins - 90);
      fill(0, 0, 255, 100);
      arc(0, 0, 200, 200, -90, 6*sec - 90);
    pop();
    
    // 3, 6, 9, 12 circles
  
    circle(0, -quadsInterval, quadsSize);
    circle(quadsInterval, 0, quadsSize);
    circle(0, quadsInterval, quadsSize);
    circle(-quadsInterval, 0, quadsSize);
    
    // every other circle that isn't 3, 6, 9, 12
  
    push();
      subQuads(30, 10);
      subQuads(30, 10);
      subQuads(60, 10);
      subQuads(30, 10);
      subQuads(60, 10);
      subQuads(30, 10);
      subQuads(60, 10);
      subQuads(30, 10);
    pop();
  
    // text for clarity for world clock
  
    fill(0);
    stroke(0);
    strokeWeight(1.5);
    textSize(25);
    text('WORLD TIME: ', -200, -10);
    if (hr + 12 < 12) {
      text((hr + 12) + ':' + mins + ':' + sec + ' AM', -200, 20);
    }  else if (hr + 12 === 12) {
      text(12 + ':' + mins + ':' + sec + ' PM', -200, 20);
    }  else {
      text(hr + ':' + mins + ':' + sec + ' PM', -200, 20);
    }
    
  pop();

  
    
  // bottom/procrastinator clock
  
  push();
    translate(width/2, height/2 + 150);

    push();
      fill(255, 255, 255, 100);
      circle(0, 0, 200);
    pop();

  // mechanics of the procrastinator clock (the visual aspect)

    push();
      if (bool === true) {
        fill(255, 0, 0, 100);
        arc(0, 0, 200, 200, -90, (tenMinsTracker - storedMillis)/3600 * 15 - 90 + savedTimeHrs); // procrastinate timer's hours counter
        B = (tenMinsTracker - storedMillis)/3600 * 15 - 90;
        fill(0, 255, 0, 100);
        arc(0, 0, 200, 200, -90, (tenMinsTracker - storedMillis)/60 * 6 - 90 + savedTimeMins); // procrastinate timer's minutes counter
        
        console.log(savedTimeMins);
        
        A = (tenMinsTracker - storedMillis)/60 * 6 - 90;
        fill(0, 0, 255, 100);
        arc(0, 0, 200, 200, -90, 6 * (tenMinsTracker - storedMillis) - 90); // procrastinate timer's seconds counter
        
        // text displaying the amount of time procrastinated
        
        if (procrastinateHr === 24) {
          aHr = int((tenMinsTracker - storedMillis)/3600);
          procrastinateHr = 0;
          storedPHr = 0;
          nHr = 0;
        } else {
          storedPHr += int((tenMinsTracker - storedMillis)/3600) - aHr -storedPHr;
          procrastinateHr = storedPHr + nHr;
        }
        
        if (procrastinateMin === 60) {
          aMin = int((tenMinsTracker - storedMillis)/60);
          procrastinateMin = 0;
          storedPMin = 0;
          nMin = 0;
        }  else {
          storedPMin += int((tenMinsTracker - storedMillis)/60) - aMin - storedPMin;
          procrastinateMin = storedPMin + nMin;
        }     
        
        if (procrastinateSec === 60) {
          aSec = int(tenMinsTracker - storedMillis);
          procrastinateSec = 0;
          storedPSec = 0;
          nSec = 0;
        }  else {
          storedPSec += int(tenMinsTracker - storedMillis) - aSec - storedPSec;
          // console.log(aSec);
          procrastinateSec = storedPSec + nSec;
        }
        
        // occurs when the Yes or No tab appears: this basically is used to keep track of procrastinateSec/Min/Hr 
          
        if ((tenMinsTracker - storedMillis)/60 >= tenMins) {
          savedTimeMins += 90 + A;
          savedTimeHrs += 90 + B;
          nSec += storedPSec;
          nMin += storedPMin;
          nHr += storedPHr;
          bool = false;
        }
        
      // stores the procastination clock's time visually in the event YES and then NO on the tab was picked or something similar
        
      } else if (bool != true) {
        fill(255, 0, 0, 100);
        arc(0, 0, 200, 200, -90, savedTimeHrs - 90);
        fill(0, 255, 0, 100);
        arc(0, 0, 200, 200, -90, savedTimeMins - 90);
      }
    pop();
    
    // 3, 6, 9, 12 circles
  
    circle(0, -quadsInterval, quadsSize);
    circle(quadsInterval, 0, quadsSize);
    circle(0, quadsInterval, quadsSize);
    circle(-quadsInterval, 0, quadsSize);
    
    // all circles that aren't 3, 6, 9, 12
  
    push();
      subQuads(30, 10);
      subQuads(30, 10);
      subQuads(60, 10);
      subQuads(30, 10);
      subQuads(60, 10);
      subQuads(30, 10);
      subQuads(60, 10);
      subQuads(30, 10);
    pop();
  
    // procrastination time text
  
    fill(0);
    stroke(0);
    strokeWeight(1.5);
    textSize(18);
    text('PROCRASTINATION', -200, -20);
    text('TIME:', -200, 0);
    text(procrastinateHr + ':' + procrastinateMin + ':' + procrastinateSec, -200, 20);
    
  pop();
  millisCounter = round(millis()); // round the # of millis to a whole number, .5 --> 1 still applies
  
  tenMinsTracker = millisCounter/1000
  
  // this command happens every 10 mins after a button is clicked (the diff between tenMinsTracker and storedMillis should give us 10 minutes in terms of seconds, or whatever mins we set tenMins equals to)
  
  if ((tenMinsTracker - storedMillis) / 60 >= tenMins) {
    push();
      translate(width/2, height/2);
      fill(201, 215, 255);
      stroke(0);
      rect(0, 0, 400, 400, 20, 20, 20, 20); // the UI box
      push();
        strokeWeight(3);
        fill(255);
        textSize(35);
        text('Do you want to do work?', 0, -100);
      pop();
    
      fill(255, 33, 33);
      rect(-100, 150, buttonsWidth, buttonsHeight, 0, 0, 0, 20);
       push();
        strokeWeight(3);
        fill(255);
        textSize(25);
        text('Not yet, give me', -100, 140);
        text(tenMins + ' more minutes', -100, 170);
      pop();
    
      fill(33, 255, 85);   
      rect(100, 150, buttonsWidth, buttonsHeight, 0, 0, 20, 0);
      push();
        strokeWeight(3);
        fill(255);
        textSize(25);
        text('Okay', 100, 150);
      pop();
    pop();
    
  }
}

// the mini circles that are not 3, 6, 9, 12 on the clock
  
function subQuads(angle, diameter) {
  rotate(angle);
  circle(0, -quadsInterval, diameter);
}

function mousePressed() {
  // conditions if red button is pressed
  
  if (mouseX <= 200 + buttonsWidth/2 && mouseX >= 200 - buttonsWidth/2 && mouseY <= 450 + buttonsHeight/2 && mouseY >= 450 - buttonsHeight/2) {
    storedMillis = tenMinsTracker;
    bool = true;
  }
  
  // conditions if green button is pressed
  
  if (mouseX <= 400 + buttonsWidth/2 && mouseX >= 400 - buttonsWidth/2 && mouseY <= 450 + buttonsHeight/2 && mouseY >= 450 - buttonsHeight/2) {
    storedMillis = tenMinsTracker;
  }
}
  
