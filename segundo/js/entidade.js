class Entidade {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.sprite = {
            img: undefined
        };
        this.scale = 1;
    }

    loadImage(imgURL, loadHandler) {
        this.sprite.img = new Image();
        this.sprite.img.addEventListener("load", loadHandler);
        this.sprite.img.src = imgURL;
    }

    update() {
        // Default behavior, empty for now
    }
}

class Zombie extends Entidade {
    constructor() {
        super();
        this.sprite.imgURL = "img/zombie.png";
        this.sprite.sourceX = 0;
        this.sprite.sourceY = 0;
        this.sprite.sourceWidth = 64;
        this.sprite.sourceHeight = 64;
        this.width = 64;
        this.height = 64;
    }
}

class Pessoa extends Entidade {
    constructor() {
        super();
        this.sprite.imgURL = "img/tilesheet."; // This seems incomplete in your original code
        this.sprite.sourceX = 64;
        this.sprite.sourceY = 0;
        this.sprite.sourceWidth = 64;
        this.sprite.sourceHeight = 64;
        this.width = 64;
        this.height = 64;
    }
}

