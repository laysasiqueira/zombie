class Zombie extends Entidade {
    constructor(spriteSheet, x, y, canvasWidth, canvasHeight) {
        super();
        this.spriteSheet = spriteSheet;
        this.x = x;
        this.y = y;
        this.currentFrame = 0;
        this.vx = 2;
        this.vy = 2;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.setup();
    }

    update(){
        this.currentFrame=(++this.currentFrame)% this.frames.length;
        this.width = this.frames[this.currentFrame].width;
        this.height = this.frames[this.currentFrame].height;
    }

    getSprite() {
        return this.frames[this.currentFrame];
    }

    setup() {
      this.frames = this.spriteSheet.getStats('ZOMBIE');
      this.width = this.frames[0].width;
      this.height = this.frames[0].height;
    }

}


