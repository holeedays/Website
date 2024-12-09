let player;

let enemies = [];
let buffEnemies = [];
let shooterEnemies = [];

let projectiles = [];
let shooterEnemyProjectiles = [];

// both game manager and spawner are not visible objects, they simply handle data
let gameManager; 
let spawner;

// image variables
let playerImage;
let playerHurtImage;
let enemyImage;
let enemyHurtImage;
let buffEnemyImage;
let buffEnemyHurtImage;
let shooterEnemyImage;
let shooterEnemyHurtImage;

let projectileImage;
let shooterEnemyProjectileImage;

let enemyDamageSound;
let playerDamageSound;
let musicSound;

var pixelFont;

function preload() {
  
  playerImage = loadImage('P5js Stuff/Bag_of_Farts_Autobio_Ver_2_7_2024_12_06_15_59_54/Assets/Player.png');
  playerHurtImage = loadImage('P5js Stuff/Bag_of_Farts_Autobio_Ver_2_7_2024_12_06_15_59_54/Assets/Player Hurt.png');
  
  enemyImage = loadImage('P5js Stuff/Bag_of_Farts_Autobio_Ver_2_7_2024_12_06_15_59_54/Assets/Enemy.png');
  enemyHurtImage = loadImage('P5js Stuff/Bag_of_Farts_Autobio_Ver_2_7_2024_12_06_15_59_54/Assets/Enemy Hurt.png');
  
  buffEnemyImage = loadImage('P5js Stuff/Bag_of_Farts_Autobio_Ver_2_7_2024_12_06_15_59_54/Assets/Buff Enemy.png');
  buffEnemyHurtImage = loadImage('P5js Stuff/Bag_of_Farts_Autobio_Ver_2_7_2024_12_06_15_59_54/Assets/Buff Enemy Hurt.png');
  
  shooterEnemyImage = loadImage('P5js Stuff/Bag_of_Farts_Autobio_Ver_2_7_2024_12_06_15_59_54/Assets/Shooter Enemy.png');
  shooterEnemyHurtImage = loadImage('P5js Stuff/Bag_of_Farts_Autobio_Ver_2_7_2024_12_06_15_59_54/Assets/Shooter Enemy Hurt.png');
  
  projectileImage = loadImage('P5js Stuff/Bag_of_Farts_Autobio_Ver_2_7_2024_12_06_15_59_54/Assets/Player Projectile.png');
  shooterEnemyProjectileImage = loadImage('P5js Stuff/Bag_of_Farts_Autobio_Ver_2_7_2024_12_06_15_59_54/Assets/Shooter Enemy Projectile.png');
  
  enemyDamageSound = loadSound('P5js Stuff/Bag_of_Farts_Autobio_Ver_2_7_2024_12_06_15_59_54/Audio/retro-coin-4-236671.mp3');
  playerDamageSound = loadSound('P5js Stuff/Bag_of_Farts_Autobio_Ver_2_7_2024_12_06_15_59_54/Audio/8-bit-explosion-95847.mp3');
  musicSound = loadSound('P5js Stuff/Bag_of_Farts_Autobio_Ver_2_7_2024_12_06_15_59_54/Audio/pixel-245147.mp3');
  
  pixelFont = loadFont('P5js Stuff/Bag_of_Farts_Autobio_Ver_2_7_2024_12_06_15_59_54/Fonts/PixelifySans-Regular.ttf');
}

function setup() {
  
  createCanvas(600, 1000).parent("sketch-container7");
  
  playerImage.resize(200, 200);
  playerHurtImage.resize(200, 200);
  
  enemyImage.resize(120,120);
  enemyHurtImage.resize(120,120);
  
  buffEnemyImage.resize(155,155);
  buffEnemyHurtImage.resize(155,155);
  
  shooterEnemyImage.resize(110,110);
  shooterEnemyHurtImage.resize(110,110);
  
  projectileImage.resize(215, 215);
  shooterEnemyProjectileImage.resize(225, 225);
  
  textFont(pixelFont);
  
  imageMode(CENTER);
  
  gameManager = new Game_Manager(); // spawns the game manager
}

function draw() {
  
  gameManager.setup();
  
  gameManager.update();
  gameManager.display();
}

function mousePressed() {
  
  if (gameManager.projectilesCanBeInstantiated)
    player.instantiateProjectile();
  
  gameManager.mousePressed();
}



