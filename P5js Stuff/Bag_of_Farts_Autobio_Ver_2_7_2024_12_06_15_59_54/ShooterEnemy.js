class ShooterEnemy {

  // like buff enemies, most of the code is exactly the same except the stats are slightly different, it doesn't track player movement, and it shoots projectiles!
  
  constructor(x, y, w, h, speed) {
    
    this.x = x;
    this.y = y;
    this.w = w * .75;
    this.h = h * .75;
    
    this.speed = speed;
    this.health = 20;
    
    this.score = 100;
    
    this.damage = 15;
    
    this.hurtTimer = 0;
    this.hurt = false;
  }

  display() {
    
    // if (this.x != undefined)
    //   rect(this.x, this.y, this.w, this.h);
    
    
    if (this.hurt && this.x != undefined) {
      this.startHurtTimer();
      if (this.hurtTimer >= .2) {
        this.hurtTimer = 0;
        this.hurt = false;
      }
      image(shooterEnemyHurtImage, this.x + this.w/2, this.y + this.h/2);
    } else image(shooterEnemyImage, this.x + this.w/2, this.y + this.h/2);
  }
  
  update() {
    
    this.move();
    
    if (this.timeIncrementMet(2)) {
      this.instantiateProjectiles();
    }
  }
  
   playerHit() { // determines if the enemy has collided with the player
    
    if (
      this.x + this.w > player.x &&
      this.x < player.x + player.w &&
      this.y + this.h > player.y &&
      this.y < player.y + player.h 
    ) return true;
    else return false;
  }
  
  move() { // the movement of the enemy <-- only vertical for this specific enemy
    
    this.y += this.speed * deltaTime/1000;
  }
  
  outOfBounds() { // determines whether the enemy is out of bounds
    
    if (this.y >= height) return true;
    else return false;
  }
  
  defeated() { // player has successfully killed the enemy
    
    if (this.health <= 0) return true;
    else return false;
  }
  
// these two functions are used in tandem with one another, these are the only difference with the shooter enemy class versus all the other enemy classes  
  
  timeIncrementMet(seconds) { // timer for the shooter enemy to spawn projectiles
    
    if (frameCount % (seconds*60) === 0) return true;
    else return false;
  }
  
  instantiateProjectiles() { // shoots 3 projectiles at once
    
    for (let i = -1; i < 2; i++) {
    shooterEnemyProjectiles.push(new ShooterEnemyProjectile(this.x, this.y, 20, 20, this.speed + 120, i));
    }
  }
  
  
  destroy(index) { // destroys the target enemy
    
      shooterEnemies.splice(index, 1);
  }

  startHurtTimer() {
    
    if (frameCount % 2 === 0) 
      this.hurtTimer += 1/30;
  }
}