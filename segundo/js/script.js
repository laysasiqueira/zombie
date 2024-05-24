let entities = [];
let spriteSheetZombie;
let spriteSheetTank;
let assetsLoaded = 0;
let canvas;
let zombie;
let tank;
let backG;
let ctx;
let bgX = 0; // posição inicial do fundo
let bgSpeed = 2; // velocidade do scrolling
let gravity = 0.5; // gravity force
let isJumping = false;

window.addEventListener("load", init, false);
window.addEventListener("keydown", handleKeyDown, false);

function init() {
    canvas = document.getElementById('jogoCanvas');
    ctx = canvas.getContext('2d');

    //  tamanho de window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Load zombie spritesheet
    spriteSheetZombie = new Image();
    spriteSheetZombie.src = 'img/zombie.png';
    spriteSheetZombie.onload = function () {
        let zombie = new Zombie(spriteSheetZombie, 100, canvas.height - 150, 80, 100);
        entities.push(zombie);
    };

    spriteSheetTank = new Image();
    spriteSheetTank.src = 'img/tank.png';
    spriteSheetTank.onload = function() {
        let tank = new Tank (spriteSheetTank, 500, canvas.height-120, 150, 150);
        entities.push(tank);
    }


    // elemento do fundo
    let backG = new Image();
    backG.src = 'img/bg.jpg';
    backG.onload = function () {
        function draw() {
            // atualizar posição do fundo
            bgX -= bgSpeed;
            if (bgX <= -canvas.width) {
                bgX = 0;
            }

            // fundo duas vezes para criar loop continua
            ctx.drawImage(backG, bgX, 0, canvas.width, canvas.height);
            ctx.drawImage(backG, bgX + canvas.width, 0, canvas.width, canvas.height);

            // atualizar e desenhar entidades
            entities.forEach(entity => {
                entity.update();
                entity.draw(ctx);
            });

            // para criar loop
            requestAnimationFrame(draw);
        }

        // iniciar loop
        draw();
    };

    

}

function handleKeyDown(event) {
    if (event.code === 'Space') {
        entities.forEach(entity => {
            if (entity instanceof Zombie) {
                entity.jump();
            }
        });
    }
}
