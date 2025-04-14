// var i = 0;

// var newDog;

// let dogImg;

// function setup() {
//   createCanvas(600, 600);

//   dogImg = loadImage("360_F_1026390758_kGoCsJMHuSGAKrOK7D0HDugHNvBwbebi.jpg");
// }

// function draw() {
//   i++;
//   if (i > 100)
//     noLoop();

//   background(220);

//   newDog = new Dog (10, 3);
//   newDog.instantiate();

//   console.log(1);
// }

// class Dog{
//   constructor(health, age) {
//     this.health = health;
//     this.age = age;
//   }

//   instantiate() {
//     image(dogImg, 200, 200); 

//     imageMode(CENTER);
//   }

// }


//.........................................................................

// class demo


let params;

let coolveticaFont;
let my_text_points;

function preload() {
  coolveticaFont = loadFont("Coolvetica.otf");
}

function setup() {
  createCanvas(500, 500);

  params = {
    xpos: width/2,
    ypos: height/2,
    length: 100,
    width: 50
  }


  /////////////////////
  textFont(coolveticaFont);
  textSize(50);

  // console.log(my_text_points);
}

function draw() {
  background(200, 200, 200);

  // rect(params.xpos, params.ypos, params.length, params.width);

  my_text_points = coolveticaFont.textToPoints("your mom", mouseX, mouseY, 50, {samplefactor: 0.2}); // sameplafactor is the number of elements in the array created by textToPoints

  for (let i = 0; i < my_text_points.length; i++) {
    line(0, 0, my_text_points[i].x, my_text_points[i].y);    
  }

  text("your mom", mouseX, mouseY);
  fill(255);
}