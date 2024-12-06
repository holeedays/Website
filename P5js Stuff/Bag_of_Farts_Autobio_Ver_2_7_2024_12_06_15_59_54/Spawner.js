class Spawner {
  
  constructor(enemyW, enemyH, enemyMaxSpeed) {
    
    this.enemyW = enemyW;
    this.enemyH = enemyH;
    this.enemyMaxSpeed = enemyMaxSpeed;
    
    this.rng = 0; // used simiply to determine what enemies are spawned 
  }
  
  update() {
    
    if (this.timeIncrementMet(1)) {
      
      // determines which enemies could be spawned, since it's floor we'll never round up
      
      if (gameManager.levelOne)
        this.rng = 0;
      
      if (gameManager.levelTwo)
        this.rng = floor(random(0,2));
      
      if (gameManager.levelThree)
        this.rng = floor(random(0,3));
      
      
      switch (this.rng) {
        case 0:
          this.spawnEnemy();
          break;
        case 1:
          this.spawnBuffEnemy();
          break;
        case 2:
          this.spawnShooterEnemy();
          break;
      }
    }
  }
  
  timeIncrementMet(seconds) {
    
    if (frameCount % 60*seconds === 0) return true;
    else return false;
  }
  
  spawnEnemy() {
    
    let randomX = random((0 + this.enemyW), (width - this.enemyW));
    
    let randomSpeed = random(100, this.enemyMaxSpeed);
    
    enemies.push(new Enemy(randomX, 0 - this.enemyH, this.enemyW, this.enemyH, randomSpeed));
  }
  
  spawnBuffEnemy() {
    
    let randomX = random((0 + this.enemyW), (width - this.enemyW));
    
    let speed = this.enemyMaxSpeed - 120;
    
    buffEnemies.push(new BuffEnemy(randomX, 0 - this.enemyH * 3, this.enemyW, this.enemyH, speed))
  }
  
  spawnShooterEnemy() {
    
    let randomX = random((0 + this.enemyW), (width - this.enemyW));
    
    let speed = this.enemyMaxSpeed - 80;
    
    shooterEnemies.push(new ShooterEnemy(randomX, 0 - (this.enemyH * 0.75), this.enemyW, this.enemyH, speed))
  }
}
