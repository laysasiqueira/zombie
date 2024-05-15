function drawBackground(ctx, img, canvas) {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

function resizeCanvas(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawSprite(ctx, img, posIniX, altSprite, largSprite, numSprite) {
    ctx.clearRect(0, 0, 100, 100);
    posIniX = largSprite * numSprite;
    ctx.drawImage(img, posIniX, 0, largSprite, altSprite, 0, 0, largSprite, altSprite);
}

window.onload = function () {
    let canvas = document.getElementById('jogoCanvas');
    let ctx = canvas.getContext('2d');
    let bgImg = new Image();
    let zombie = new Image();
    let numSprite = 0;
    let posIniX = 0;
    let altSprite = 0;
    let largSprite = 0;
    let numSpries = 4;

    // Load fundo
    bgImg.src = 'img/bg.jpg';
    bgImg.onload = function() {
        drawBackground(ctx, bgImg, canvas);
    };

    // Load imagem do zombie
    zombie.src = "img/zombie.png";
    zombie.addEventListener('load', () => {
        largSprite = zombie.width / numSpries;
        altSprite = zombie.height / numSpries;
        posIniX = largSprite * numSprite;
        drawSprite(ctx, zombie, posIniX, altSprite, largSprite, numSprite);
    });

    // tamanho de canva
    window.addEventListener('resize', function () {
        resizeCanvas(canvas);
        drawBackground(ctx, bgImg, canvas);
    });

    // intervalo de animação
    let anima = setInterval(() => {
        drawSprite(ctx, zombie, posIniX, altSprite, largSprite, numSprite);
        numSprite++;
        if (numSprite > 3) numSprite = 0;
        posIniX = largSprite * numSprite;
    }, 200);
};
