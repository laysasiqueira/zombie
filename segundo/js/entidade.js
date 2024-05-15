class Entidade {
    constructor() {
        this.x = 0;//atributos
        this.y = 0; 
        this.width = 0;
        this.height = 0;
        this.sprite = {
            img: undefined
        };
        this.scale = 1;
    }

    loadImage(loadHandler) {
        this.sprite.img = new Image();
        this.sprite.img.addEventListener("load", loadHandler);
        this.sprite.img.src = this.sprite.imgURL;//callback
    }

    update() { 
        // por padrão vazio
    }
}

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

class Pessoa extends Entidade {
    constructor() {
        super();
        this.sprite.imgURL = "images/tilesheet.";
        this.sprite.sourceX = 64;
        this.sprite.sourceY = 0;
        this.sprite.sourceWidth = 64;
        this.sprite.sourceHeight = 64;
        this.width = 64;
        this.height = 64;
    }
}