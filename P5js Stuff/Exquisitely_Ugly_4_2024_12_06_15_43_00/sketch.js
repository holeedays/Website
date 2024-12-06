// variables referring to the middle of each segment

const topThirdMid = 100;
const midThirdMid = 300;
const botThirdMid = 500;

let strokeColorEyeBags = [176, 163, 144, 140];
let strokeColorHair = [166, 162, 90];
let strokeColorNips = [118, 125, 101, 150];
let strokeColorSeams = [178, 217, 209];
let strokeColorZip = [125, 108, 76];

function setup() {
  createCanvas(400, 600).parent("sketch-container4");
  
  noStroke();
  angleMode(DEGREES);
}

function draw() {  
  
  // establishing background segments for exquisite corpse
  
  fill(201, 194, 169);
  rect(0, 0, width, height);
  fill(158, 153, 131);
  rect(0, height/3, width, height);
  fill(54, 47, 43);
  rect(0, height/3 * 2, width, height);
  
  // lower body
  
  push();
  
    // feet
  
    fill(117, 58, 43);
  
    DrawRotate("rectangle", width/2 + 85, botThirdMid + 50, 150, 45, 60);
    DrawRotate("rectangle", width/2 - 85, botThirdMid + 50, 150, 45, -60);
  
      // toes
  
    fill(179, 99, 73);
  
    ellipse(width/2 + 120, botThirdMid + 100, 60, 45);
    ellipse(width/2 - 120, botThirdMid + 100, 60, 45);
  
    fill(48, 16, 11);
  
     ellipse(width/2 + 120, botThirdMid + 110, 5, 45);
     ellipse(width/2 + 130, botThirdMid + 110, 5, 45);
     ellipse(width/2 + 140, botThirdMid + 110, 5, 45);
  
     ellipse(width/2 - 120, botThirdMid + 110, 5, 45);
     ellipse(width/2 - 130, botThirdMid + 110, 5, 45);
     ellipse(width/2 - 140, botThirdMid + 110, 5, 45);
  
    // legs
  
    fill(39, 56, 79);
    
    DrawRotate("ellipse", width/2 + 80, botThirdMid - 20, 170, 120, -100);
    DrawRotate("ellipse", width/2 - 80, botThirdMid - 20, 170, 120, 100);
    
    fill(158, 82, 58);
  
    arc(width/2 + 85, botThirdMid + 10, 105, 120, 0, -180);
    arc(width/2 - 85, botThirdMid + 10, 105, 120, 0, -180);
  
    // pants
    
    fill(171, 143, 109);
  
    beginShape();
  
    vertex(width/2 + 100, botThirdMid - 100);
    vertex(width/2 + 140, botThirdMid);
    vertex(width/2 + 145, botThirdMid + 20);
    vertex(width/2 + 20, botThirdMid + 30);
    vertex(width/2 + 10, botThirdMid - 10);
  
    vertex(width/2 - 10, botThirdMid - 10); 
    vertex(width/2 - 20, botThirdMid + 30);
    vertex(width/2 - 145, botThirdMid + 20);
    vertex(width/2 - 140, botThirdMid);
    vertex(width/2 - 100, botThirdMid - 100);
  
    endShape();
  
      // zipper stuff
  
    push();
  
      NoFillJustStroke(strokeColorZip, 3);
  
      line(width/2 + 10, botThirdMid - 20, width/2 + 10, botThirdMid - 50);
      line(width/2 - 10, botThirdMid - 20, width/2 - 10, botThirdMid - 50);
      line(width/2 + 4, botThirdMid - 11, width/2 + 10, botThirdMid - 20);
      line(width/2 - 4, botThirdMid - 11, width/2 - 10, botThirdMid - 20);
  
    pop();
  
    // shirt
  
    fill(49, 65, 92);
    
    rectMode(CENTER); 
    rect(width/2, botThirdMid - 100, 100, 75);
    DrawRotate("rectangle", width/2 + 60, botThirdMid - 70, 100, 70, -40);
    DrawRotate("rectangle", width/2 - 60, botThirdMid - 70, 100, 70, 40);
  
    // the buttons
  
    fill(230, 209, 106);
  
    circle(width/2 + 10, botThirdMid - 90, 10);   
    circle(width/2 + 10, botThirdMid - 70, 10);   
  
    push();
  
      NoFillJustStroke(strokeColorSeams, 3);
      line(width/2, botThirdMid - 63, width/2, botThirdMid - 100);
  
    pop();
    
  pop();
  
//////////////////////////////////////////////////////////////////////////
  
  // body
  
    // body shape
  
  fill(141, 199, 142);
  
  quad(width/2 - 40, midThirdMid - 110, width/2 + 40, midThirdMid - 110, width/2 + 100, midThirdMid + 100, width/2 - 100, midThirdMid + 100);
  
    // nips/flabs
  
  push();
  
    NoFillJustStroke(strokeColorNips, 4);
  
    arc(width/2 + 40, midThirdMid, 40, 10, 0, -180);
    arc(width/2 - 40, midThirdMid, 40, 10, 0, -180);
  
    circle(width/2 + 40, midThirdMid, 3);
    circle(width/2 - 40, midThirdMid, 3);
  
    // belly button
    
    noStroke();
  
    fill(96, 150, 113);
  
    circle(width/2 - 5, midThirdMid + 80, 12);
  
    fill(23, 9, 4);
  
    circle(width/2, midThirdMid + 80, 8);
  
  pop();
    
    // arms
  
  DrawRotate("rectangle", width/2 + 65, midThirdMid - 60, 20, 150, -40);
  DrawRotate("rectangle", width/2 - 65, midThirdMid - 60, 20, 150, 40);
  
  push();
  
    fill(120, 179, 126);
  
    DrawRotate("rectangle", width/2 + 95, midThirdMid + 35, 20, 100, 20);
    DrawRotate("rectangle", width/2 - 95, midThirdMid + 35, 20, 100, -20);
  
      // hands
  
    triangle(width/2 + 68.5, midThirdMid + 78.25, width/2 + 100, midThirdMid + 90, width/2 + 95, midThirdMid + 130);
    
    triangle(width/2 - 68.5, midThirdMid + 78.25, width/2 - 100, midThirdMid + 90, width/2 - 95, midThirdMid + 130);
  
      // fingers 
    
    DrawRotate("ellipse", width/2 + 115, midThirdMid + 100, 60, 20, 10);
    DrawRotate("ellipse", width/2 + 100, midThirdMid + 120, 60, 20, 60);
  
    DrawRotate("ellipse", width/2 - 115, midThirdMid + 100, 60, 20, -10);
    DrawRotate("ellipse", width/2 - 100, midThirdMid + 120, 60, 20, -60);
  
  pop();
  
//////////////////////////////////////////////////////////////////////////
  
  // head
  
  push();
  
    let movePos = 20; // variable to shift everything on the head a certain amount
  
    rectMode(CENTER);
    
    // neck
    
    push();
  
      fill(171, 152, 130);  
  
      rect(width/2, topThirdMid + movePos + 70, 50, 35);
      
      // collar
  
      push();
  
      fill(233, 242, 242);
  
        DrawRotate("rectangle", width/2 + 20, topThirdMid + movePos + 79, 20, 40, 45);
        DrawRotate("rectangle", width/2 - 20, topThirdMid + movePos + 79, 20, 40, -45);
  
      pop();
  
    pop();
    
    // head base
  
    fill(237, 223, 204);
  
    rect(width/2, topThirdMid + movePos, 100, 105, 10, 10, 20, 20);
  
    // chin
  
    arc(width/2, topThirdMid + movePos + 40, 40, 40, 0, -180);
  
    // nose
  
  
    fill(219, 188, 178);
  
    circle(width/2 - 15, topThirdMid + movePos + 10, 10);
    circle(width/2 + 15, topThirdMid + movePos + 10, 10);

    rect(width/2, topThirdMid + movePos - 10, 15, 20);
  
    fill(189, 164, 155);  
  
    circle(width/2, topThirdMid + movePos + 10, 28);
  
  
    // cigarette
  
    push();
      
      fill(77, 67, 54);
  
      rect(width/2 + 40, topThirdMid + movePos + 30, 30, 5);

      // smoke of the cigarette
    
      fill(140, 118, 115);
  
      circle(width/2 + 60, topThirdMid + movePos + 20, 10);
      circle(width/2 + 60, topThirdMid + movePos + 10, 15);
      circle(width/2 + 70 ,topThirdMid + movePos + 5, 20); 
      circle(width/2 + 50, topThirdMid + movePos, 10);
      circle(width/2 + 65, topThirdMid + movePos - 5, 10);
      circle(width/2 + 55, topThirdMid + movePos - 10, 7.5);
  
    pop();
  
    // mustache
  
    fill(219, 182, 134);
  
    circle(width/2 - 15, topThirdMid + movePos + 20, 10);
    circle(width/2 - 20, topThirdMid + movePos + 25, 8);
    circle(width/2 - 25, topThirdMid + movePos + 30, 6)
  
    circle(width/2 + 15, topThirdMid + movePos + 20, 10);
    circle(width/2 + 20, topThirdMid + movePos + 25, 8);
    circle(width/2 + 25, topThirdMid + movePos + 30, 6);
  
    // eyes
      
      // eyeballs
  
    fill(240, 255, 254);
  
    arc(width/2 + 25, topThirdMid + movePos - 20, 30, 30, 0, -180);
    arc(width/2 - 25, topThirdMid + movePos - 20, 30, 30, 0, -180);
  
    push();
  
      // pupils
  
      fill(18, 4, 2);    
  
      arc(width/2 + 20, topThirdMid + movePos - 20, 15, 15, 0, -180);
      arc(width/2 - 20, topThirdMid + movePos - 20, 15, 15, 0, -180);
  
      // eye bags
      
      NoFillJustStroke(strokeColorEyeBags, 2);
      
      bezier(210, 107, 218, 124, 222, 131, 240, 119);
      bezier(210, 107, 222, 120, 217, 121, 230, 117);
  
      bezier(190, 107, 182, 124, 178, 131, 160, 119);
      bezier(190, 107, 178, 120, 183, 121, 170, 117);
  
      // eyebrows
  
      strokeWeight(4);
      
      stroke(181, 154, 114);
  
      arc(width/2 + 25, topThirdMid + movePos - 22, 30, 11.5, -180, 0);
      arc(width/2 - 25, topThirdMid + movePos - 22, 30, 11.5, -180, 0);
  
    pop();
  
   // hair
  
    push();
      
      NoFillJustStroke(strokeColorHair, 2);
  
      ArcOnRepeat(width/2 - 20, topThirdMid - 20, 5, 5, -90, 90, 6);
      ArcOnRepeat(width/2 - 30, topThirdMid - 20, 5, 5, 90, -90, 3);
      ArcOnRepeat(width/2 - 40, topThirdMid - 20, 5, 5, 90, -90, 2);
      ArcOnRepeat(width/2 - 50, topThirdMid - 20, 5, 5, 90, -90, 4);
  
      ArcOnRepeat(width/2 + 20, topThirdMid - 20, 5, 5, -90, 90, 4);
      ArcOnRepeat(width/2 + 30, topThirdMid - 20, 5, 5, 90, -90, 3);
      ArcOnRepeat(width/2 + 40, topThirdMid - 20, 5, 5, 90, -90, 4);
      ArcOnRepeat(width/2 + 50, topThirdMid - 20, 5, 5, 90, -90, 4);
  
  
    pop();
  
    // crown
  
    push();
      
      fill(192, 209, 63);
  
      DrawCrown(width/2, topThirdMid + movePos - 110, width/2 + 52.5, topThirdMid + movePos - 45, width/2 - 52.5, topThirdMid + movePos - 45);
  
      fill(228, 242, 242);
  
      // puffy decor on crown
  
      for (let i = 0; i < 105; i += 10) {
        circle(width/2 - 50 + i, topThirdMid + movePos - 45, 12.5);
    }
  
    pop();
  
    // 
  pop();
}

// makes a shape and rotates it

function DrawRotate (shape, xPos, yPos, Width, Height, rotationAngle) {
  push();
  rectMode(CENTER);
  angleMode(DEGREES);
  
  translate(xPos, yPos);
  rotate(rotationAngle);
  
  // the circle function is kind of useless but I just put it here for clarity
  
  if (shape === "circle") {
    circle(0, 0, Width);
  }
  if (shape === "ellipse") {
    ellipse(0, 0, Width, Height);
  }
  if (shape === "square") {
    square(0, 0, Width);
  }
  if (shape === "rectangle") {
    rect(0, 0, Width, Height);
  }

  pop();
}

// removes fill and adds stroke

function NoFillJustStroke(strokeColorValue, strokeThickness) {
  noFill();
  stroke(strokeColorValue);
  strokeWeight(strokeThickness);
}

// too lazy to draw crown the normal way so this makes its much easier to do it

function DrawCrown (x1, y1, x2, y2, x3, y3) {
  push();
  
    fill(150, 145, 66);
    
    rect(x1, y1, 20, 40); // that thing on top, was technically supposed to be a cross but ran out of room
  
    arc(x1, y1 + 35, 100, 70, -180, 0); // the round thingy
  
  pop();
  
  triangle(x1, y1, x2, y2, x3, y3); // middle triangle
  triangle(x2, y1, x2, y2, x1, y2); // right triangle
  triangle(x3, y1, x3, y3, x1, y3); // left triangle
  
  circle(x1, y1, 10); // middle crown adornment
  circle(x2, y1, 10); // right crown adornment
  circle(x3, y1, 10); // left crown adornment
  
  push();
  
    fill(207, 35, 27);
  
    quad(x1, y1 + 25, x1 + 10, y1 + 37.5, x1, y1 + 50, x1 - 10, y1 + 37.5); //middle diamond
  
    triangle(x2, y1 + 25, x2, y1 + 50, x2 - 12.5, y1 + 37.5); // right diamond
    triangle(x3, y1 + 25, x3, y1 + 50, x3 + 12.5, y1 + 37.5); // left diamond
  
  pop();
}

// draws the hair curly strands; iterations denotes how many arcs you want

function ArcOnRepeat (xPos, yPos, widthA, heightA, start, end, iterations) {
  
  let displacement = heightA;
  
  for (let i = 0; i < iterations; i ++) {
    if (i % 2 === 0) {
      arc(xPos, yPos + i * displacement, widthA, heightA, start, end);
    } else if (i % 2 === 1) {
      arc(xPos, yPos + i * displacement, widthA, heightA, -start, -end);
      
  // arc(xPos, yPos, widthA, heightA, start, end);
  // arc(xPos, yPos + displacement, widthA, heightA, -start, -end);
  // arc(xPos, yPos + 2 * displacement, widthA, heightA, start, end);
  // arc(xPos, yPos + 3 * displacement, widthA, heightA, -start, -end);

    } 
  }
}
    
  

  