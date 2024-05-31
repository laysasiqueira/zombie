class Person extends Entidade {
    constructor(spriteSheet, x, y, width, height) {
        super(spriteSheet, x, y, width, height);
        this.frameIndex = 0;
        this.frameCount = 1; // Assuming a single frame for simplicity
        this.ticksPerFrame = 5;
        this.tickCount = 0;
        this.frameWidth = spriteSheet.width; 
        this.frameHeight = spriteSheet.height;
    }

    update() {
        // Move the person to the left
        this.x -= 2; // Adjust speed as needed
        if (this.x + this.width < 0) {
            // Remove person when it goes off screen
            let index = entities.indexOf(this);
            if (index > -1) {
                entities.splice(index, 1);
            }
        }
    }

    draw(ctx) {
        ctx.drawImage(
            this.spriteSheet,
            0, 0,
            this.frameWidth, this.frameHeight,
            this.x, this.y,
            this.width, this.height
        );
    }
}
