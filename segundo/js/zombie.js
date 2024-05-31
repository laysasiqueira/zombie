class Zombie extends Entidade {
    constructor(spriteSheet, x, y, width, height) {
        super(spriteSheet, x, y, width, height);
        this.frameIndex = 0;
        this.frameCount = 16; 
        this.ticksPerFrame = 5;
        this.tickCount = 0;
        this.onGround = true;
        this.frameWidth = spriteSheet.width / 4; 
        this.frameHeight = spriteSheet.height / 4; 
        this.vx = 1; //velocidade horizontal 
    }

    update() {
        this.tickCount++;
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            this.frameIndex = (this.frameIndex + 1) % this.frameCount;
        }

        

        // gravity
        if (!this.onGround) {
            this.vy += gravity;
            this.y += this.vy;

            //on ground
            if (this.y >= canvas.height - 125) {
                this.y = canvas.height - 125;
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
            this.vy = -17; // velocidade inicial
            this.onGround = false;
            isJumping = true;
        }
    }
}