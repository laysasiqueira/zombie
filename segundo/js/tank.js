class Tank extends Entidade {
  constructor(spriteSheet, x, y, width, height) {
    super(spriteSheet, x, y, width, height);
    this.frameIndex = 0;
    this.frameCount = 16; // Assuming the spritesheet has 16 frames (4 columns * 4 rows)
    this.ticksPerFrame = 5;
    this.tickCount = 0;
    this.onGround = true;
    this.frameWidth = spriteSheet.width / 4; // Calculate frame width
    this.frameHeight = spriteSheet.height / 4; // Calculate frame height
  }

  update() {
    // Handle animation frame update
    this.tickCount++;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      this.frameIndex = (this.frameIndex + 1) % this.frameCount;
    }

    // Apply gravity
    if (!this.onGround) {
      this.vy += gravity;
      this.y += this.vy;

      // Check if the zombie has landed on the ground
      if (this.y >= canvas.height - 150) {
        this.y = canvas.height - 150;
        this.vy = 0;
        this.onGround = true;
        isJumping = false;
      }
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.spriteSheet,
      (this.frameIndex % 4) * this.frameWidth, Math.floor(this.frameIndex / 4) * this.frameHeight,
      this.frameWidth, this.frameHeight,
      this.x, this.y,
      this.width, this.height
    );
  }

  jump() {
    if (this.onGround) {
      this.vy = -15; // initial jump velocity
      this.onGround = false;
      isJumping = true;
    }
  }
}
