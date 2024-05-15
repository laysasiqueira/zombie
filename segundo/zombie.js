class Zombie extends Entidade {
    constructor() {
        super();
        this.sprite.imgURL = "images/zombie.jpg";
        this.sprite.sourceX = 0;
        this.sprite.sourceY = 0;
        this.sprite.sourceWidth = 64;
        this.sprite.sourceHeight = 64;
        this.width = 64;
        this.height = 64;
    }
}