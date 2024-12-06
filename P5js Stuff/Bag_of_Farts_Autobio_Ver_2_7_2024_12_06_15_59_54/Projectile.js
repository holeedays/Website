class Projectile {
  constructor(x, y, w, travelSpeed) {
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.travelSpeed = travelSpeed;
    
    this.damage = 5;
    
    this.savedEnemyHit = -1; // these saved enemy values are supposed to store the indexes of the current enemy hit
    this.savedBuffEnemyHit = -1;
    this.savedShooterEnemyHit = -1;
  
  }
  
  display() {
    
    // circle(this.x, this.y, this.w);
    
    image(projectileImage, this.x, this.y - 40);
  }
  
  update() {
    
    this.move();
    
    const outOfBounds = this.outOfBounds();
    if (outOfBounds != null) this.destroy(outOfBounds);
    
    // these 3 following if statements are used to determuine whether the projectile has collided with an enemy and then deals damage to them
    
    if (this.applyEnemyHitLogic(this.detectEnemyCollision())) {
      this.damageEnemy(); 
    } // first statement
    
    if (this.applyBuffEnemyHitLogic(this.detectBuffEnemyCollision())) {
      this.damageBuffEnemy(); 
    } // second statement
    
    if (this.applyShooterEnemyHitLogic(this.detectShooterEnemyCollision())) {
      this.damageShooterEnemy();
    } // third statement
    
    const destroyLogic = this.destroyLogic();
    if (destroyLogic != null) {
      this.destroy(destroyLogic) 
      enemyDamageSound.play(); // plays audio when the projectile hits an enemy
    };
  
  
  }
  
  move() { // the speed of the projectile
    
    this.y -= this.travelSpeed * deltaTime/1000;
  }
  
  detectEnemyCollision() { // returns which enemy of the array was hit
    
    let currentEnemyHit = null;
    
    for (let i = 0; i < enemies.length; i++) {
      if (
        this.x + this.w/2 > enemies[i].x &&
        this.x - this.w/2 < enemies[i].x + enemies[i].w &&
        this.y + this.w/2 > enemies[i].y &&
        this.y - this.w/2 < enemies[i].y + enemies[i].h 
         ) {
        currentEnemyHit = i;
        }
    }
    
    return currentEnemyHit;
  }
  
  detectBuffEnemyCollision() {
    
    let currentBuffEnemyHit = null;
    
    for (let i = 0; i < buffEnemies.length; i++) {
      if (
        this.x + this.w/2 > buffEnemies[i].x &&
        this.x - this.w/2 < buffEnemies[i].x + buffEnemies[i].w &&
        this.y + this.w/2 > buffEnemies[i].y &&
        this.y - this.w/2 < buffEnemies[i].y + buffEnemies[i].h 
         ) {
        currentBuffEnemyHit = i;
        }
    }
    
    return currentBuffEnemyHit;
  }
  
  detectShooterEnemyCollision() {
    
    let currentShooterEnemyHit = null;
    
    for (let i = 0; i < shooterEnemies.length; i++) {
      if (
        this.x + this.w/2 > shooterEnemies[i].x &&
        this.x - this.w/2 < shooterEnemies[i].x + shooterEnemies[i].w &&
        this.y + this.w/2 > shooterEnemies[i].y &&
        this.y - this.w/2 < shooterEnemies[i].y + shooterEnemies[i].h 
         ) {
        currentShooterEnemyHit = i;
        }
    }
    
    return currentShooterEnemyHit;
  }
  
  destroyLogic() { // determines which projectile has hit an enemy (projectile will be destroyed)
    
    let currentProjectileHit = null;
    
    // this is for regular enemies
    
    for (let i = 0; i < enemies.length; i++) {
      for (let j = 0; j < projectiles.length; j++) {
        if (
        enemies[i].x + enemies[i].w > projectiles[j].x - projectiles[j].w/2 &&
        enemies[i].x < projectiles[j].x + projectiles[j].w/2 &&
        enemies[i].y + enemies[i].h > projectiles[j].y - projectiles[j].w/2 &&
        enemies[i].y < projectiles[j].y + projectiles[j].w/2 
        ) {
        currentProjectileHit = j;
        }
      }
    }
    
    // this is for buff enemies
    
    for (let i = 0; i < buffEnemies.length; i++) {
      for (let j = 0; j < projectiles.length; j++) {
        if (
        buffEnemies[i].x + buffEnemies[i].w > projectiles[j].x - projectiles[j].w/2 &&
        buffEnemies[i].x < projectiles[j].x + projectiles[j].w/2 &&
        buffEnemies[i].y + buffEnemies[i].h > projectiles[j].y - projectiles[j].w/2 &&
        buffEnemies[i].y < projectiles[j].y + projectiles[j].w/2 
        ) {
        currentProjectileHit = j;
        }
      }
    }
    
    // this is for shooter enemies
    
    for (let i = 0; i < shooterEnemies.length; i++) {
      for (let j = 0; j < projectiles.length; j++) {
        if (
        shooterEnemies[i].x + shooterEnemies[i].w > projectiles[j].x - projectiles[j].w/2 &&
        shooterEnemies[i].x < projectiles[j].x + projectiles[j].w/2 &&
        shooterEnemies[i].y + shooterEnemies[i].h > projectiles[j].y - projectiles[j].w/2 &&
        shooterEnemies[i].y < projectiles[j].y + projectiles[j].w/2 
        ) {
        currentProjectileHit = j;
        }
      }
    }
    
    return currentProjectileHit;
    
  }
  
  
  applyEnemyHitLogic(currentEnemyHit) { // makes sure that collision of projectile only happens once every time it passes an enemy
    
    if (currentEnemyHit!= null) {
      if (currentEnemyHit != this.savedEnemyHit) {
        this.savedEnemyHit = currentEnemyHit;
        return true;
      } else return false;
    }
    
  }
  
  applyBuffEnemyHitLogic(currentBuffEnemyHit) {
    
     if (currentBuffEnemyHit != null) {
      if (currentBuffEnemyHit != this.savedBuffEnemyHit) {
        this.savedBuffEnemyHit = currentBuffEnemyHit;
        return true;
      } else return false;
    }
  }
    
   applyShooterEnemyHitLogic(currentShooterEnemyHit) {
    
     if (currentShooterEnemyHit != null) {
      if (currentShooterEnemyHit != this.savedShooterEnemyHit) {
        this.savedShooterEnemyHit = currentShooterEnemyHit;
        return true;
      } else return false;
    }
  }
  
  damageEnemy() { // on contact reduces health of enemy (once)
    
    enemies[this.savedEnemyHit].health -= this.damage;
    enemies[this.savedEnemyHit].hurt = true;
  }
  
  damageBuffEnemy() {
    
    buffEnemies[this.savedBuffEnemyHit].health -= this.damage;
    buffEnemies[this.savedBuffEnemyHit].hurt = true;
  }
  
  damageShooterEnemy() {
    
    shooterEnemies[this.savedShooterEnemyHit].health -= this.damage;
    shooterEnemies[this.savedShooterEnemyHit].hurt = true;
  }
  
  outOfBounds() { // determines whether a projectile is out of bounds
    
    for (let i = 0; i < projectiles.length; i++) {
      if (projectiles[i].y + projectiles[i].w/2 <= -100) {
        return i;
      } else return null;
    }
  }
  
  destroy(index) { // destroys the projectile 
  
     projectiles.splice(index, 1);
  }
}