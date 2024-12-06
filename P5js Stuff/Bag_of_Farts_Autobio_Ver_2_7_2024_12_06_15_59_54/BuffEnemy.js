class BuffEnemy {
  
  // all the functions have the same logic as the regular enemy but the health is buffed up, the speed is somewhat slower, the damage it deals to the player is higher, and the size is slightly larger

  constructor(x, y, w, h, speed) {
    
    this.x = x;
    this.y = y;
    this.w = w * 1.5;
    this.h = h * 1.5;
    
    this.speed = speed;
    this.health = 50;
    
    this.score = 150;
    
    this.damage = 30;
    
    this.hurtTimer = 0;
    this.hurt = false;
  }

  display() {
    // console.log(this.y);
    
    // if (this.x != undefined)
    //   rect(this.x, this.y, this.w, this.h);
    
     if (this.hurt && this.x != undefined) {
      this.startHurtTimer();
      if (this.hurtTimer >= .2) {
        this.hurtTimer = 0;
        this.hurt = false;
      }
      image(buffEnemyHurtImage, this.x + this.w/2, this.y + this.h/2);
    } else image(buffEnemyImage, this.x + this.w/2, this.y + this.h/2);
  }
  
  update() {
    
    this.move(this.detectPlayerPos());
  }
  
  detectPlayerPos() { // detect the player position and determine whether to move horizontally towards them or not
    
    let movePosHor = 0;
    
    if (this.x + this.w/2 != player.x + player.w/2) {
      if (this.x + this.w/2 < player.x + player.w/2) movePosHor += 0.5;
      if (this.x + this.w/2 > player.x + player.w/2) movePosHor -= 0.5;
    }
    
    return movePosHor;
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
  
  move(movePosHor) { // the movement of the enemy
    
    this.y += this.speed * deltaTime/1000;
    
    if (this.y + this.h <= player.y)
      this.x += movePosHor * this.speed/3 * deltaTime/1000;
  }
  
  outOfBounds() { // determines whether the enemy is out of bounds
    
    if (this.y >= height) return true;
    else return false;
  }

  defeated() { // player has successfully killed the enemy
    
    if (this.health <= 0) return true;
    else return false;
  }
  
  startHurtTimer() {
    
    if (frameCount % 2 === 0) 
      this.hurtTimer += 1/30;
  }
}