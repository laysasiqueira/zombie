// Entity.js
class Entidade {
    constructor(spriteSheet, x, y, width, height) {
        this.spriteSheet = spriteSheet;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.vy = 0; // vertical velocity
    }

    update() {
        // Override this method in subclasses for specific behavior
    }

    draw(ctx) {
        // Override this method in subclasses to draw the entity
    }
}

