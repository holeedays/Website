class ShooterEnemyProjectile {
  
  constructor(x, y, w, h, speed, horizontalMoveFactor) { // these projectiles are going to be squares versus the player projectiles for visual clairty, when the images are going to be added it won't really matter that much
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.speed = speed;
    
    this.damage = 5;
    
    this.horizontalMoveFactor = horizontalMoveFactor;
    
    this.aboveThePlayer = false;
    this.belowThePlayer = false;
  }
  
  display() {
    
    // rect(this.x, this.y, this.w, this.h);
    
    image(shooterEnemyProjectileImage, this.x + this.w/2, this.y - 50);
  }
  
  update() {
    
    this.move();
  }
  
  move() { // the movement of the projectile
    
    // determines if projectiles shoot up or down
    
    if (this.y + this.h/2 < player.y + player.h/2 && !this.aboveThePlayer) {
      this.aboveThePlayer = true;
    }
    
    if (this.y + this.h/2 > player.y + player.h/2 && !this.belowThePlayer && !this.aboveThePlayer) {
      this.belowThePlayer = true;
      this.speed = -this.speed;
    }
    
    this.y += this.speed * deltaTime/1000;
    
    this.x += this.horizontalMoveFactor * this.speed * deltaTime/1000;
  }
  
  playerHit() { // determines whether has hit the player or not
    
    if (
        this.x + this.w > player.x &&
        this.x <  player.x + player.w &&
        this.y + this.h >  player.y &&
        this.y < player.y + player.h 
      ) return true;
    else return false;
  }
  
  outOfBounds() { // determines if out of bounds
    
    if (
       this.y >= height ||
       this.x + this.w <= 0 ||
       this.x >= width
       ) return true;
    else return false;
  }
}