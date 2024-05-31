class Tank {
    constructor(sprite, x, y) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.width = 80; // Adjust width based on your tank sprite
        this.height = 50; // Adjust height based on your tank sprite
        this.speed = 5; // Adjust tank speed
    }

    update() {
        this.x -= this.speed;
        // Remove tank when it goes off-screen
        if (this.x + this.width < 0) {
            entities.splice(entities.indexOf(this), 1);
            tank = null; // Reset the tank variable
        }
    }

    draw(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}