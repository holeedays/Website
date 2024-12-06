class Player { 
  
  constructor (x, y, w, h, speed, shootSpeed) {
    this.x = x;
    this.y = y;
    this .w = w;
    this.h = h;
    this.speed = speed;
    this.shootSpeed = shootSpeed;
    
    this.health = 100;
    this.savedHealth = this.health;
    
    this.score = 0;
    
    this.enemyHit = -1;
    
    this.hurtTimer = 0;
    this.hurt = false;
  }
  
  display() { // show player
    
    // rect(this.x, this.y, this.w, this.h);
    
    if (this.hurt) {
      this.startHurtTimer();
      if (this.hurtTimer >= .2) {
        this.hurtTimer = 0;
        this.hurt = false;
      }
      image(playerHurtImage, this.x + this.w/2, this.y + this.h);
    } else image(playerImage, this.x + this.w/2, this.y + this.h);
    
    
  }

  update() {
    
    this.readMoveInput();
    // console.log(this.health);
    
  }
  
  horMoveInput() { // horizontal input return
    
    let moveInputHor = 0;
    

    if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) moveInputHor--;
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) moveInputHor++;
    
    if (keyIsDown(16)) moveInputHor *= 2;
    
    return moveInputHor;
  }
  
  horMove(moveInputHor) { // actual horizontal movement of the player
  
    this.x += moveInputHor * this.speed * deltaTime/1000;
    
    if (this.horCollision()) {
      if (this.x <= 0) {
        this.x = 0;
      }
      if (this.x + this.w >= width) {
        this.x = width - this.w;
      }
    }
  }
  
  vertMoveInput() { // vertical input return
    
    let moveInputVert = 0;
    
    
    if (keyIsDown(87) || keyIsDown(UP_ARROW)) moveInputVert--;
    if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) moveInputVert++;
    
    if (keyIsDown(16)) moveInputVert *= 2;
    
    return moveInputVert;
  }
  
  vertMove(moveInputVert) { // actual vertical movement of the player
    
    this.y += moveInputVert * this.speed * deltaTime/1000;
    
    if (this.vertCollision()) {
      if (this.y <= 3*height/5) {
        this.y = 3*height/5;
      }
      if (this.y + this.h >= height) {
        this.y = height - this.h;
      }
    }
  }
  
  readMoveInput() { // does all the calculations for the movement
    
    const curMoveInputHor = this.horMoveInput();
    const curMoveInputVert = this.vertMoveInput();
    
    if (abs(curMoveInputHor) > 0) {
      this.horMove(curMoveInputHor);
    }
    
     if (abs(curMoveInputVert) > 0) {
      this.vertMove(curMoveInputVert);
    }
  }
  
  horCollision() { // detects whether player has collided with certain limits of the map (boh horizontal and vertical collision seen below)

    if (this.x <= 0 || this.x + this.w >= width) return true;
    else return false;
    
  }
  
  vertCollision() { 
    
    if (this.y <= 3*height/5 || this.y + this.h >= height) return true;
    else return false;
  }
  
  instantiateProjectile() { // creates a new projectile
    
    projectiles.push(new Projectile(this.x + this.w/2, this.y, 30, 400));
  }
  
  startHurtTimer() { // used to determine how long should the sprite turn into the hurt sprite
    
    if (frameCount % 2 === 0) 
      this.hurtTimer += 1/30;
  }
}