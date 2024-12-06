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
  
  playerImage = loadImage('Assets/Player.png');
  playerHurtImage = loadImage('Assets/Player Hurt.png');
  
  enemyImage = loadImage('Assets/Enemy.png');
  enemyHurtImage = loadImage('Assets/Enemy Hurt.png');
  
  buffEnemyImage = loadImage('Assets/Buff Enemy.png');
  buffEnemyHurtImage = loadImage('Assets/Buff Enemy Hurt.png');
  
  shooterEnemyImage = loadImage('Assets/Shooter Enemy.png');
  shooterEnemyHurtImage = loadImage('Assets/Shooter Enemy Hurt.png');
  
  projectileImage = loadImage('Assets/Player Projectile.png');
  shooterEnemyProjectileImage = loadImage('Assets/Shooter Enemy Projectile.png');
  
  enemyDamageSound = loadSound('Audio/retro-coin-4-236671.mp3');
  playerDamageSound = loadSound('Audio/8-bit-explosion-95847.mp3');
  musicSound = loadSound('Audio/pixel-245147.mp3');
  
  pixelFont = loadFont('Fonts/PixelifySans-Regular.ttf');
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



