
 // buscar elemento canvas
let canvas = document.getElementById('jogoCanvas');
let ctx = canvas.getContext('2d');

// de cordo com tamanho de window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//elemento  img e fundo
let img = new Image();
img.src = 'img/bg.jpg'; 
img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

//mudar tamanho de window de acordo com dispositivo
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
});
//zombie
let zombie = new Image();
zombie.src = "img/zombie.jpg";
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
