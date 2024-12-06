let peeTimes = [10, 11, 9, 15, 13, 13, 11]; // the array data is respective to the dates Oct 4 - Oct 10

let dates = ['Oct. 4', 'Oct. 5', 'Oct. 6', 'Oct. 7', 'Oct. 8', 'Oct. 9', 'Oct. 10'];

let savedValueData; // all of these saved values are used to store a certain value, works in conjunction with the travelDistData vars
let savedValueData2;
let savedValueData3;
let savedValueData4;
let savedValueData5;
let savedValueData6;
let savedValueData7;

let travelDist = 0; // these vars are used for the animation (movement component) of certain parts of the text;
// travelDist is used for drawing the XY planes
// travelDistPts is for the notches of the planes
// travelDistText is used for the the big, bolded, text
// travelDistData is used for all the data points
let travelDistPts = 0;
let travelDistText = 0;
let travelDistData = 0;
let travelDistData2 = 0;
let travelDistData3 = 0;
let travelDistData4 = 0;
let travelDistData5 = 0;
let travelDistData6 = 0;
let travelDistData7 = 0;

let darken = 0; // for text function, used to make the small text become transparent to opaque

let wait = false; // all of thes booleans are used to prevent spamming of the data point animations as it results in glitches
let wait2 = false;
let wait3 = false;
let wait4 = false;
let wait5 = false;
let wait6 = false;
let wait7 = false;

let day1Clicked = false; // these are for the interactive elements of the data points (i.e. when you click on the dates either once or twice)
let day1ClickedTwice = false;

let day2Clicked = false;
let day2ClickedTwice = false;

let day3Clicked = false;
let day3ClickedTwice = false;

let day4Clicked = false;
let day4ClickedTwice = false;

let day5Clicked = false;
let day5ClickedTwice = false;

let day6Clicked = false;
let day6ClickedTwice = false;

let day7Clicked = false;
let day7ClickedTwice = false;

function setup() {
  createCanvas(600, 600).parent("sketch-container6");
}

function draw() {
  background(220);
  
  XYPlanes(1);
  Points(1);
  Text(.7, .125);
  DataPoints(.4);
  Hover();

}

function XYPlanes (speed) {
  
  // function to animate and draw the XY planes
  
  push();
  
    strokeWeight(5);
  
    if (travelDist < 450) {
      travelDist += deltaTime * speed;
    }
  
    // x axis line
  
    line(100, 500, 100 + travelDist, 500);
    
    // y axis line
  
    line(100, 500, 100, 500 - travelDist);
  
  pop();
}

function Points(speed) {
  
  // function to draw all points on the XY planes (the notches)
  
  push();
  
    strokeWeight(4);  
    
    travelDistPts += deltaTime * speed;
  
    for (let i = 0; i < 8; i++) {
      
      let spacing = 475/8 * i;
      
      // x axis pts
      
      line(100 + spacing, 515, 100 + spacing, 515 - travelDistPts / i);
      
    }
  
    for (let i = 0; i < 20; i ++) {
      
      // y axis pts
      
      spacing = 475/20 * i;
      
      line(85, 500 - spacing, 85 + travelDistPts / i, 500 - spacing);
    }
    
    // this rectangle is used is to cover the lines
  
    noStroke();
    fill(220);
      
    rect(115, 0, 500, 485);
  
  pop();
}

function Text(speedSmall, speedBig) {
  
  // function to animate the text (small text becomes more opaque while big text just moves in)
  
  textAlign(CENTER, CENTER);
  
  angleMode(DEGREES);
  
  // small text
  
  push();
    
    darken += deltaTime * speedSmall;
  
    fill(0, 0, 0, darken);
  
    // x axis small text
  
    for (let i = 0; i < dates.length; i++) {
    
      let spacing = 475/8 * (i + 1);
      
      text(dates[i], 100 + spacing, 530);
    }
  
    // y axis small text
  
    for (let i = 0; i < 19; i ++) {
      
      spacing = 475/20 * (i + 1);
      
      text(i + 1, 70, 500 - spacing);
    }
  
  pop();
  
  // big text
  
  push();
    
    textSize(30);
    textStyle(BOLD);
  
    if (travelDistText < 70) {
        
      travelDistText += deltaTime * speedBig;
      
    }
  
    text('Dates', 100 + 475 * .5, 640 - travelDistText);
  
    push();
  
      translate(20, 500 - 475 * .5);
  
      rotate(90);
  
      text('Times Urinated', 0, 50 - travelDistText);

    pop();
  
  pop();
}

function DataPoints(speed) {
  
  // the animations of the data points on the graph
  
  push();
  
    noStroke();

////////////////////////////////////////////////////////////////////////////////////////////////// 
  // num of times peed Oct. 4
  
    if (day1Clicked) {

      if (travelDistData < (475/20 * (peeTimes[0]))) {

          travelDistData += deltaTime * speed;

          savedValueData = 475/20 * peeTimes[0];
        
      } else if (travelDistData >= 475/20 * peeTimes[0]) {
        
          wait = false;
          
          travelDistData = savedValueData;
      }

      for (let i = 0; i < peeTimes[0]; i++) {

        circle(100 + 475/8, 500 - travelDistData * (1 - i / peeTimes[0]), 10);

      }

    } 
  
    if (day1ClickedTwice) {

      let a = 500 - savedValueData;

      travelDistData += deltaTime * speed;

      for (let i = 0; i < peeTimes[0]; i ++) {

        circle(100 + 475/8, a + 475/20 * i + (travelDistData * (1 - i / peeTimes[0])), 10);

      }

      if (travelDistData > (475/20 * (peeTimes[0]))) {
        day1ClickedTwice = false;
        wait = false;
        travelDistData = 0;
      }
    }
    
    
//////////////////////////////////////////////////////////////////////////////////////////////////
  // num of times peed Oct. 5

    
    if (day2Clicked) {

      if (travelDistData2 < (475/20 * (peeTimes[1]))) {

          travelDistData2 += deltaTime * speed;

          savedValueData2 = 475/20 * peeTimes[1];
        
      } else if (travelDistData2 >= 475/20 * peeTimes[1]) {
        
          wait2 = false;
        
          travelDistData2 = savedValueData2;
      }


      for (let i = 0; i < peeTimes[1]; i++) {

        circle(100 + 475/8 * 2, 500 - travelDistData2 * (1 - i / peeTimes[1]), 10);

      }

    } 

    if (day2ClickedTwice) {

      let a = 500 - savedValueData2;

      travelDistData2 += deltaTime * speed;

      for (let i = 0; i < peeTimes[1]; i ++) {

        circle(100 + 475/8 * 2, a + 475/20 * i + (travelDistData2 * (1 - i / peeTimes[1])), 10);

      }

      if (travelDistData2 > (475/20 * (peeTimes[1]))) {
        day2ClickedTwice = false;
        wait2 = false;
        travelDistData2 = 0;
      }
    }

  
//////////////////////////////////////////////////////////////////////////////////////////////////
  // num of times peed Oct. 6
  
      
    if (day3Clicked) {

      if (travelDistData3 < (475/20 * (peeTimes[2]))) {

          travelDistData3 += deltaTime * speed;

          savedValueData3 = 475/20 * peeTimes[2];
        
      } else if (travelDistData3 >= 475/20 * peeTimes[2]) {
        
          wait3 = false;
        
          travelDistData3 = savedValueData3;
      }

      for (let i = 0; i < peeTimes[2]; i++) {

        circle(100 + 475/8 * 3, 500 - travelDistData3 * (1 - i / peeTimes[2]), 10);

      }

    } 

    if (day3ClickedTwice) {

      let a = 500 - savedValueData3;

      travelDistData3 += deltaTime * speed;

      for (let i = 0; i < peeTimes[2]; i ++) {

        circle(100 + 475/8 * 3, a + 475/20 * i + (travelDistData3 * (1 - i / peeTimes[2])), 10);

      }

      if (travelDistData3 > (475/20 * (peeTimes[2]))) {
        day3ClickedTwice = false;
        wait3 = false;
        travelDistData3 = 0;
      }
    }

//////////////////////////////////////////////////////////////////////////////////////////////////   
  // num of times peed Oct. 7
      
    if (day4Clicked) {

        if (travelDistData4 < (475/20 * (peeTimes[3]))) {

          travelDistData4 += deltaTime * speed;

          savedValueData4 = 475/20 * peeTimes[3]
          
        }  else if (travelDistData4 >= 475/20 * peeTimes[3]) {
        
          wait4 = false;
          
          travelDistData4 = savedValueData4;
      }

      for (let i = 0; i < peeTimes[3]; i++) {

        circle(100 + 475/8 * 4, 500 - travelDistData4 * (1 - i / peeTimes[3]), 10);

      }

    } 

    if (day4ClickedTwice) {

      let a = 500 - savedValueData4;

      travelDistData4 += deltaTime * speed;

      for (let i = 0; i < peeTimes[3]; i ++) {

        circle(100 + 475/8 * 4, a + 475/20 * i + (travelDistData4 * (1 - i / peeTimes[3])), 10);

      }

      if (travelDistData4 > (475/20 * (peeTimes[3]))) {
        day4ClickedTwice = false;
        wait4 = false;
        travelDistData4 = 0;
      }
    }

//////////////////////////////////////////////////////////////////////////////////////////////////   
  // num of times peed Oct. 8
  
      
    if (day5Clicked) {

        if (travelDistData5 < (475/20 * (peeTimes[4]))) {

          travelDistData5 += deltaTime * speed;

          savedValueData5 = 475/20 * peeTimes[4];
          
        } else if (travelDistData5 >= 475/20 * peeTimes[4]) {
        
          wait5 = false;
          
          travelDistData5 = savedValueData5;
      }

      for (let i = 0; i < peeTimes[4]; i++) {

        circle(100 + 475/8 * 5, 500 - travelDistData5 * (1 - i / peeTimes[4]), 10);

      }

    } 

    if (day5ClickedTwice) {

      let a = 500 - savedValueData5;

      travelDistData5 += deltaTime * speed;

      for (let i = 0; i < peeTimes[4]; i ++) {

        circle(100 + 475/8 * 5, a + 475/20 * i + (travelDistData5 * (1 - i / peeTimes[4])), 10);

      }

      if (travelDistData5 > (475/20 * (peeTimes[4]))) {
        day5ClickedTwice = false;
        wait5 = false;
        travelDistData5 = 0;
      }
    }  
  
/////////////////////////////////////////////////////////////////////////////////////////////////   
  // num of times peed Oct. 9
     
    if (day6Clicked) {

        if (travelDistData6 < (475/20 * (peeTimes[5]))) {

          travelDistData6 += deltaTime * speed;

          savedValueData6 = 475/20 * peeTimes[5];
          
        } else if (travelDistData6 >= 475/20 * peeTimes[5]) {
        
          wait6 = false;
          
          travelDistData6 = savedValueData6;
      }

      for (let i = 0; i < peeTimes[5]; i++) {

        circle(100 + 475/8 * 6, 500 - travelDistData6 * (1 - i / peeTimes[5]), 10);

      }

    } 

    if (day6ClickedTwice) {

      let a = 500 - savedValueData6;

      travelDistData6 += deltaTime * speed;

      for (let i = 0; i < peeTimes[5]; i ++) {

        circle(100 + 475/8 * 6, a + 475/20 * i + (travelDistData6 * (1 - i / peeTimes[5])), 10);

      }

      if (travelDistData6 > (475/20 * (peeTimes[5]))) {
        day6ClickedTwice = false;
        wait6 = false;
        travelDistData6 = 0;
      }
    }  
  
  /////////////////////////////////////////////////////////////////////////////////////////////////
  // num of times peed Oct. 10
  
    if (day7Clicked) {

        if (travelDistData7 < (475/20 * (peeTimes[6]))) {

          travelDistData7 += deltaTime * speed;

          savedValueData7 = 475/20 * peeTimes[6];
          
        } else if (travelDistData7 >= 475/20 * peeTimes[6]) {
        
          wait7 = false;
          
          travelDistData7 = savedValueData7;
      }

      for (let i = 0; i < peeTimes[6]; i++) {

        circle(100 + 475/8 * 7, 500 - travelDistData7 * (1 - i / peeTimes[6]), 10);

      }

    } 

    if (day7ClickedTwice) {

      let a = 500 - savedValueData7;

      travelDistData7 += deltaTime * speed;

      for (let i = 0; i < peeTimes[6]; i ++) {

        circle(100 + 475/8 * 7, a + 475/20 * i + (travelDistData7 * (1 - i / peeTimes[6])), 10);

      }

      if (travelDistData7 > (475/20 * (peeTimes[6]))) {
        day7ClickedTwice = false;
        wait7 = false;
        travelDistData7 = 0;
      }
    }  

  pop();
}

function Hover() {

  // this function is for if cursor is hovering over the dates on the x axis
  
  strokeWeight(2);
  
  // for Oct. 4
  
  if (mouseX > 145 && mouseX < 175 && mouseY > 515 && mouseY < 535) {
      line (145, 535, 175, 535);
  }
  
  // for Oct. 5
  
  if (mouseX > 145 + 475/8 && mouseX < 175 + 475/8 && mouseY > 515 && mouseY < 535) {
      line (145 + 475/8, 535, 175 + 475/8, 535);
  }
  
  // for Oct. 6
  
  if (mouseX > 145 + 475/8 * 2 && mouseX < 175 + 475/8 * 2 && mouseY > 515 && mouseY < 535) {
      line (145 + 475/8 * 2, 535, 175 + 475/8 * 2, 535);
  }
  
  // for Oct. 7
  
  if (mouseX > 145 + 475/8 * 3 && mouseX < 175 + 475/8 * 3 && mouseY > 515 && mouseY < 535) {
      line (145 + 475/8 * 3, 535, 175 + 475/8 * 3, 535);
  }
  
  
  // for Oct. 8
  
  if (mouseX > 145 + 475/8 * 4 && mouseX < 175 + 475/8 * 4 && mouseY > 515 && mouseY < 535) {
      line (145 + 475/8 * 4, 535, 175 + 475/8 * 4, 535);
  }
  
  // for Oct. 9
  
  if (mouseX > 145 + 475/8 * 5 && mouseX < 175 + 475/8 * 5 && mouseY > 515 && mouseY < 535) {
      line (145 + 475/8 * 5, 535, 175 + 475/8 * 5, 535);
  }
  
  // for Oct. 10
  
  if (mouseX > 145 + 475/8 * 6 && mouseX < 175 + 475/8 * 6 && mouseY > 515 && mouseY < 535) {
      line (145 + 475/8 * 6, 535, 175 + 475/8 * 6, 535);
  }
}

function mousePressed() {
  
  // bools for day 1
  
  if (!wait && mouseX > 145 && mouseX < 175 && mouseY > 515 && mouseY < 535) {
    
    travelDistData = 0;
    
    wait = true;
    
    day1Clicked = !day1Clicked
  
    if (!day1Clicked) {
      day1ClickedTwice = true;
    }
  }

  // bools for day 2

  if (!wait2 && mouseX > 145 + 475/8 && mouseX < 175 + 475/8 && mouseY > 515 && mouseY < 535) {
    
    travelDistData2 = 0;
    
    wait2 = true;
    
    day2Clicked = !day2Clicked;
  
    if (!day2Clicked) {
      day2ClickedTwice = true;
    }
  }
  
  // bools for day 3
  
  if (!wait3 && mouseX > 145 + 475/8 * 2 && mouseX < 175 + 475/8 * 2 && mouseY > 515 && mouseY < 535) {
    
    travelDistData3 = 0;
    
    wait3 = true;
    
    day3Clicked = !day3Clicked;
  
    if (!day3Clicked) {
      day3ClickedTwice = true;
    }
  }
  
  // bools for day 4
  
  if (!wait4 && mouseX > 145 + 475/8 * 3 && mouseX < 175 + 475/8 * 3 && mouseY > 515 && mouseY < 535) {
    
    travelDistData4 = 0;
    
    wait4 = true;
    
    day4Clicked = !day4Clicked;
  
    if (!day4Clicked) {
      day4ClickedTwice = true;
    }
  }
  
  // bools for day 5
  
  if (!wait5 && mouseX > 145 + 475/8 * 4 && mouseX < 175 + 475/8 * 4 && mouseY > 515 && mouseY < 535) {
    
    travelDistData5 = 0;
    
    wait5 = true;
    
    day5Clicked = !day5Clicked;
  
    if (!day5Clicked) {
      day5ClickedTwice = true;
    }
  }
  
  // bools for day 6
  
  if (!wait6 && mouseX > 145 + 475/8 * 5 && mouseX < 175 + 475/8 * 5 && mouseY > 515 && mouseY < 535) {
    
    travelDistData6 = 0;
    
    wait6 = true;
    
    day6Clicked = !day6Clicked;
  
    if (!day6Clicked) {
      day6ClickedTwice = true;
    }
  }
  
  // bools for day 7
  
  if (!wait7 && mouseX > 145 + 475/8 * 6 && mouseX < 175 + 475/8 * 6 && mouseY > 515 && mouseY < 535) {
    
    travelDistData7 = 0;
    
    wait7 = true;
    
    day7Clicked = !day7Clicked;
  
    if (!day7Clicked) {
      day7ClickedTwice = true;
    }
  }
}
