let canvas = document.getElementById('jogoCanvas');
let ctx = canvas.getContext('2d');

let zombie = new Image();
zombie.src = "img/zombie.png";
let numSprite = 0;
let posIniX = 0;
let Limage = 0;
let largSprite = 0;
let numSpries = 4;
zombie.addEventListener('load', ()=>{
    largSprite = zombie.width / numSpries;
    altSprite = zombie.height / numSpries;
    posIniX = largSprite * numSprite;
    ctx.drawImage(zombie, posIniX, 0, largSprite, altSprite, 0, 0, largSprite, altSprite)
});

let anima = setInterval(()=>{
    ctx.clearRect(0, 0, 100, 100);
    numSprite++
if(numSprite>3)
    numSprite = 0
posIniX = largSprite * numSprite;

    ctx.drawImage(zombie, posIniX, 0, largSprite, altSprite, 0, 0, largSprite, altSprite)}, 200);