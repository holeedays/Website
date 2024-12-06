class Game_Manager {
  
  constructor() {
    
    this.levelOne = false;
    this.levelTwo = false;
    this.levelThree = false;
    
    this.onMenuScreen = true;
    this.onLoseScreen = false;
    this.onVictoryScreen = false;
    
    this.objectsInstantiated = false;
    this.projectilesCanBeInstantiated = true;
    
    this.playMusicSound = false;
    
    this.timer = 5;
  }
  
  instantiateObjects() {
    
    player = new Player(width/2, 5*height/6, 50, 50, 300, 10); // spawn a player
  
    spawner = new Spawner(40, 50, 210); // spawns the spawner (it spawns the enemies)
    }
  
  setup() {
    
    if (!this.objectsInstantiated) {
      
      this.instantiateObjects();
      this.objectsInstantiated = true;
    }
    
    if (this.playMusicSound && !musicSound.isPlaying())  // plays the music audio soundtrack when in a level
      musicSound.play();
    else if (!this.playMusicSound) musicSound.stop();
    
  }
  
  display() { // handles the visual representation of the objects
    
    if (this.onMenuScreen) {
      this.displayMenuScene();
    }
    
    if (this.levelOne) { // lvl 1 
      this.displayFirstLevel();
    }
    
    if (this.levelOneWon()) this.displayLevelWonScene();
    
    
    if (this.levelTwo) { // lvl 2
      this.displaySecondLevel();
    }
    
    if (this.levelTwoWon()) this.displayLevelWonScene();
    
    if (this.levelThree) {
      this.displayThirdLevel();
    }
    
    if (this.levelThreeWon()) this.displayVictoryScene();
    
    if (this.lost()) {
      this.displayLostScene();
    }
    
  }
  
  update() { // handles the calculations
    
    if (this.levelOne) {
      this.updateFirstLevel(); // lvl 1
      this.playMusicSound = true;
    }
    
    // this whole section sets a bunch of variables if the player has won the first level
    
    if (this.levelOneWon()) {
      this.clearScene();
      this.playMusicSound = false;
      this.projectilesCanBeInstantiated = false; // since the player still exists on a lose or win screen, I just made a bool that prevents instantiation of new projectiles when mousePressed
      this.setCountdownTimer();
      
      if (this.timer === 0) {
        this.timer = 5;
        this.levelTwo = true;
        this.objectsInstantiated = false;
        this.levelOne = false;
        this.projectilesCanBeInstantiated = true;
        
        player.score = 0;
      }
    }
    
    if (this.levelTwo) {
      this.updateSecondLevel(); // lvl 2
      this.playMusicSound = true;
    }
    
    if (this.levelTwoWon()) {
      this.clearScene();
      this.playMusicSound = false;
      this.projectilesCanBeInstantiated = false;
      this.setCountdownTimer();
      
      if (this.timer === 0) {
        this.timer = 5;
        this.levelThree = true;
        this.objectsInstantiated = false;
        this.levelTwo = false;
        this.projectilesCanBeInstantiated = true;
        
        player.score = 0;
      }
    }
    
    if (this.levelThree) {
      this.updateThirdLevel();
      this.playMusicSound = true;
    }
    
    if (this.levelThreeWon()) {
      this.clearScene();
      this.playMusicSound = false;
      this.projectilesCanBeInstantiated = false;
      this.onVictoryScreen = true;
    }
    
    if (this.lost()) {
      this.clearScene();
      this.playMusicSound = false;
      this.projectilesCanBeInstantiated = false;
      this.onLoseScreen = true;
    }
    
  }
  
////////////////////////////////////////////////////////////////////////////
  // enemy logic & enemy projectile logic (it's basically the same copy and pasted code for all enemies and projectiles)
  
  // logic for regular enemies
  
  enemyOutOfBounds(index) {
    
    if (enemies[index].outOfBounds()) {
      player.health -= enemies[index].damage;
      playerDamageSound.play(); // player takes dmg audio
      enemies.splice(index, 1);
    }
  }
  
  enemyDefeated(index) {
    
    if (enemies[index].defeated()) {
      player.score += enemies[index].score;
      enemies.splice(index, 1);
    }
  }
  
  enemyPlayerHit(index) {
    
    if (enemies[index].playerHit()) {
      player.health -= enemies[index].damage;
      playerDamageSound.play(); // player dmg audio is played here too
      player.hurt = true; // used for displaying player hurt sprite
      enemies.splice(index, 1);
    }
  }
  
  enemyUpdate() { // the redundancy in using multiple for-loops is because we can't actually do all these things in a singular for-loop as the number of elements in an array can change if we splice during the loop, which breaks the game
    
    for (let i = 0; i < enemies.length; i++)
      enemies[i].update();
    
    for (let i = 0; i < enemies.length; i++)
      this.enemyOutOfBounds(i);
    
    for (let i = 0; i < enemies.length; i++)
      this.enemyDefeated(i);
    
    for (let i = 0; i < enemies.length; i++)
      this.enemyPlayerHit(i);
  }
  
  // logic for buff enemies
  
   buffEnemyOutOfBounds(index) {
    
    if (buffEnemies[index].outOfBounds()) {
      player.health -= buffEnemies[index].damage;
      playerDamageSound.play();
      buffEnemies.splice(index, 1);
    }
  }
  
  buffEnemyDefeated(index) {
    
    if (buffEnemies[index].defeated()) {
      player.score += buffEnemies[index].score;
      buffEnemies.splice(index, 1);
    }
  }
  
  buffEnemyPlayerHit(index) {
    
    if (buffEnemies[index].playerHit()) {
      player.health -= buffEnemies[index].damage;
      playerDamageSound.play();
      player.hurt = true;
      buffEnemies.splice(index, 1);
    }
  }
  
  buffEnemyUpdate() {
    
    for (let i = 0; i < buffEnemies.length; i++)
      buffEnemies[i].update();
    
    for (let i = 0; i < buffEnemies.length; i++)
      this.buffEnemyOutOfBounds(i);
    
    for (let i = 0; i < buffEnemies.length; i++)
      this.buffEnemyDefeated(i);
    
    for (let i = 0; i < buffEnemies.length; i++)
      this.buffEnemyPlayerHit(i);
  }
  
  // logic for shooter enemies
  
  shooterEnemyOutOfBounds(index) {
    
    if (shooterEnemies[index].outOfBounds()) {
      player.health -= shooterEnemies[index].damage;
      playerDamageSound.play();
      shooterEnemies.splice(index, 1);
    }
  }
  
  shooterEnemyDefeated(index) {
    
    if (shooterEnemies[index].defeated()) {
      player.score += shooterEnemies[index].score;
      shooterEnemies.splice(index, 1);
    }
  }
  
  shooterEnemyPlayerHit(index) {
    
    if (shooterEnemies[index].playerHit()) {
      player.health -= shooterEnemies[index].damage;
      playerDamageSound.play();
      player.hurt = true;
      shooterEnemies.splice(index, 1);
    }
  }
  
  shooterEnemyUpdate() {
    
    for (let i = 0; i < shooterEnemies.length; i++)
      shooterEnemies[i].update();
    
    for (let i = 0; i < shooterEnemies.length; i++)
      this.shooterEnemyOutOfBounds(i);
    
    for (let i = 0; i < shooterEnemies.length; i++)
      this.shooterEnemyDefeated(i);
    
    for (let i = 0; i < shooterEnemies.length; i++)
      this.shooterEnemyPlayerHit(i);
  }
  
  // logic for shooter enemy projectiles
  
  shooterEnemyProjectilesOutOfBounds(index) {

    if (shooterEnemyProjectiles[index].outOfBounds()) {
      shooterEnemyProjectiles.splice(index, 1);
    }
  }
  
  shooterEnemyProjectilesPlayerHit(index) {
    
    if (shooterEnemyProjectiles[index].playerHit()) {
      player.health -= shooterEnemyProjectiles[index].damage;
      playerDamageSound.play();
      player.hurt = true;
      shooterEnemyProjectiles.splice(index, 1);
    }
  }
  
  shooterEnemyProjectileUpdate() {
    
    for (let i = 0; i < shooterEnemyProjectiles.length; i++)
      shooterEnemyProjectiles[i].update();
    
    for (let i = 0; i < shooterEnemyProjectiles.length; i++)
      this.shooterEnemyProjectilesOutOfBounds(i);
    
    for (let i = 0; i < shooterEnemyProjectiles.length; i++)
      this.shooterEnemyProjectilesPlayerHit(i);
  }
  
///////////////////////////////////////////////////////////////////////////  
  
  updateFirstLevel() { // scene 1

    player.update();

    spawner.update();
    
    this.enemyUpdate();

    for (let i = 0; i < projectiles.length; i++) {
      projectiles[i].update();
    }
    
    this.updateUIElements();
  }
  
  displayFirstLevel() {
    
    background(12, 17, 31);
    
    player.display();
      
    for (let i = 0; i < enemies.length; i++) {
      enemies[i].display();
    }
      
    for (let i = 0; i < projectiles.length; i++) {
      projectiles[i].display();
    }
    
    this.displayUIElements();
  }
  
  updateSecondLevel() { // scene 2

    player.update();

    spawner.update();
    
    // second level has both buff enemies and regular enemies

    this.enemyUpdate();
    
    this.buffEnemyUpdate();

    for (let i = 0; i < projectiles.length; i++) {
      projectiles[i].update();
    }
    
    this.updateUIElements();
  }
  
  displaySecondLevel() {
    
    background(8, 7, 36);

    player.display();

    for (let i = 0; i < enemies.length; i++) {
      enemies[i].display();
    }
    
    for (let i = 0; i < buffEnemies.length; i++) {
      buffEnemies[i].display();
    }

    for (let i = 0; i < projectiles.length; i++) {
      projectiles[i].display();
    }
    
    this.displayUIElements();
  }
  
  updateThirdLevel() {
    
    player.update();

    spawner.update();
    
    // third level has all 3 enemies: shooter, buff, and regular enemies
    
    this.enemyUpdate();
    
    this.buffEnemyUpdate();
    
    this.shooterEnemyUpdate();
    
    this.shooterEnemyProjectileUpdate();

    for (let i = 0; i < projectiles.length; i++) {
      projectiles[i].update();
    }
    
    this.updateUIElements();
  }
  
  displayThirdLevel() {
    
    background(15, 2, 28);

    player.display();

    for (let i = 0; i < enemies.length; i++) {
      enemies[i].display();
    }
    
    for (let i = 0; i < buffEnemies.length; i++) {
      buffEnemies[i].display();
    }
    
    for (let i = 0; i < shooterEnemies.length; i++) {
      shooterEnemies[i].display();
    }
    
    for (let i = 0; i < shooterEnemyProjectiles.length; i++) {
      shooterEnemyProjectiles[i].display();
    }

    for (let i = 0; i < projectiles.length; i++) {
      projectiles[i].display();
    }
    
    this.displayUIElements();
  }
  
  levelOneWon() { // tells whether player has won or lost level 1
    
    if (player.score >= 1250 && this.levelOne) return true;
    else return false;
  }
  
  levelTwoWon() { 
    
    if (player.score >= 2250 && this.levelTwo) return true;
    else return false;
  }
  
  levelThreeWon() {
    
    if (player.score >= 3250 && this.levelThree) return true;
    else return false;
  }
  
  lost() { // player has lost the game
    
    if (player.health <= 0) return true;
    else return false;
  }
  
  
  displayLevelWonScene() { // this will only be used for level 1 and level 2
    
    push();
    
      fill(255);
      rect(0, 0, width, height);

      fill(0);
      textAlign(CENTER);
      textSize(25);
      text("Congratulations, you won!", width/2, height/2);
      text("Moving onto the next level in " + this.timer, width/2, height/2 + 100);
    
    pop();
  }
  
  displayLostScene() {
    
    push();
    
      fill(255);
      rect(0, 0, width, height);

      fill(0);
      textAlign(CENTER);
      textSize(72);
      text("You Lost :< ", width/2, height/2 - 50);
    
      // the interactive text
    
      if (
        mouseX > 230 &&
        mouseX < 370 &&
        mouseY > 520 &&
        mouseY < 550
      ) fill(255, 0, 0);
      
      textSize(35);
      text("Restart?", width/2, height/2 + 50); 
    
      if (
        mouseX > 230 &&
        mouseX < 370 &&
        mouseY > 570 &&
        mouseY < 600
      ) fill(255, 0, 0);
      else fill(0);
    
      text("Menu?", width/2, height/2 + 100);
    
    pop();
  }
  
  displayVictoryScene() {
    
    push();
    
      fill(255);
      rect(0, 0, width, height);
  
      fill(0);
      textAlign(CENTER);
      textSize(60);
      text("Congratulations!!!", width/2, height/2 - 70);
      textSize(25);
      text("You have won the game!", width/2, height/2 - 20);
    
      // interactive text, it's basically the same as the lose screen interactive text
      if (
        mouseX > 230 &&
        mouseX < 370 &&
        mouseY > 550 &&
        mouseY < 580
      ) fill(0, 0, 255);
    
      textSize(35);
      text("Restart?", width/2, height/2 + 80);
    
      if (
        mouseX > 230 &&
        mouseX < 370 &&
        mouseY > 600 &&
        mouseY < 630
      ) fill(0, 0, 255);
      else fill(0);  
    
      text("Menu?", width/2, height/2 + 130);

    pop();
  }
  
  displayMenuScene() {
    
    push();
    
      fill(255);
      rect(0, 0, width, height);

      fill(0);
      textAlign(CENTER);
      textSize(50);
      text("Welcome to Shooter!", width/2, height/2 - 40);
      textSize(18);
      text("The goal is to survive each level by reaching a certain score. \n Dodge enemies and prevent them from reaching the other side!", width/2, height/2);
    
      if (
        mouseX > 230 &&
        mouseX < 370 &&
        mouseY > 590 &&
        mouseY < 620
      ) fill (0, 255, 0);
      textSize(35);
      text("Start", width/2, height/2 + 120);
    
    pop();
  }
  
  updateUIElements() { // it's really only for the healthbar value, allows for a slightly smoother transition for the health bar
    
    let intermediateValue = lerp(player.health, player.savedHealth, 0.3);
    
    player.savedHealth = intermediateValue;
    
  }
  
  displayUIElements() {
    
    push();
    
      // the rectangles represent the health bar
    
      noStroke();
      fill(255, 255, 255, 150);
      rect(10, 25, 280, 50);
    
      fill(255, 0, 0, 220);
      rect(17.5, 32.5, 265 * (player.savedHealth/100), 35);
    
      strokeWeight(1);
      fill(255);
      textAlign(CENTER);
      textSize(30);
      text("Score: " + player.score, 500, 60);
      text("Health:   " + player.health, 150, 60);
    
    pop();
  }
  
  clearScene() { // used for after player has lost or won, removes all objects from the game
    
    enemies.splice(0);
    
    buffEnemies.splice(0);
    
    shooterEnemies.splice(0);
    
    shooterEnemyProjectiles.splice(0);

    projectiles.splice(0);

    // player doesn't have to be reset in this case cause there's no enemies to damage it, also the setup() function basically resets all its stats upon the next level
  }
  
  startGame() {
    
    this.levelOne = true;
    
    this.objectsInstantiated = false;
    this.projectilesCanBeInstantiated = true;
  }
  
  restartGame() {
    
    this.clearScene();
    
    this.levelOne = true;
    this.levelTwo = false;
    this.levelThree = false;
    this.onLoseScreen = false;
    this.onVictoryScreen = false;
    
    this.objectsInstantiated = false;
    this.projectilesCanBeInstantiated = true;
  }
  
  goBackToMenu() {
    
    this.clearScene();
    
    this.onMenuScreen = true;
    this.levelOne = false;
    this.levelTwo = false;
    this.levelThree = false;
    this.onLoseScreen = false;
    this.onVictoryScreen = false;
    
    this.objectsInstantiated = false;
  }
  
  // miscellaneous
  setCountdownTimer() { // used for transitioning between scenes
    
    if (frameCount % 60 === 0) {
      this.timer -= 1;
    }
  }
  
  mousePressed() {
    
    if (this.onMenuScreen) {
      if (
        mouseX > 230 &&
        mouseX < 370 &&
        mouseY > 590 &&
        mouseY < 620
      ) this.startGame(); 
    }
    
    if (this.onLoseScreen) {
      if ( // this is for the restart button on lose screen
        mouseX > 230 &&
        mouseX < 370 &&
        mouseY > 520 &&
        mouseY < 550
      ) this.restartGame();

      if ( // this is for the menu button on lose screen
        mouseX > 230 &&
        mouseX < 370 &&
        mouseY > 570 &&
        mouseY < 600
      ) this.goBackToMenu();
    }
    
    if (this.onVictoryScreen) {
      if (
        mouseX > 230 &&
        mouseX < 370 &&
        mouseY > 550 &&
        mouseY < 580
      ) this.restartGame();
      
      if (
        mouseX > 230 &&
        mouseX < 370 &&
        mouseY > 600 &&
        mouseY < 630
      ) this.goBackToMenu();
    }
    
  }
}