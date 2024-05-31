class Tank extends Entidade {
    constructor(spriteSheet, x, y, width, height) {
        super(spriteSheet, x, y, width, height);
        this.vx = -2; // horizontal velocity
    }

    update() {
        this.x += this.vx;

        // Check if tank collides with zombie
        for (let i = entities.length - 1; i >= 0; i--) {
            let entity = entities[i];
            if (entity instanceof Zombie) {
                if (isColliding(this, entity)) {
                    // Game over
                    gameOver();
                }
            }
        }
    }

    draw(ctx) {
        ctx.drawImage(this.spriteSheet, this.x, this.y, this.width, this.height);
    }
}