class Enemy  {
  
  constructor(x, y, w, h, speed) {
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.speed = speed;
    this.health = 15;
    
    this.score = 75;
    
    this.damage = 20;
    
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
      image(enemyHurtImage, this.x + this.w/2, this.y + this.h/2);
    } else image(enemyImage, this.x + this.w/2, this.y + this.h/2);
  }
  
  update() {
    
    this.move(this.detectPlayerPos());
  }
  
  detectPlayerPos() { // detect the player position and determine whether to move horizontally towards them or not
    
    let movePosHor = 0;
    
    if (this.x + this.w/2 != player.x + player.w/2) {
      if (this.x + this.w/2 < player.x + player.w/2) movePosHor++;
      if (this.x + this.w/2 > player.x + player.w/2) movePosHor--;
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
