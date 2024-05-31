class Stone extends Entidade {
    constructor(image, x, y, width, height) {
        super(image, x, y, width, height);
    }

    update() {
        // update stone logic, if any
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.drawImage(this.spriteSheet, -this.width / 2, -this.height / 2, this.width, this.height);
        ctx.restore();
    }
}