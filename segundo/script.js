
 // buscar elemento canvas
let canvas = document.getElementById('jogoCanvas');
let ctx = canvas.getContext('2d');

// de cordo com tamanho de window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//elemento  img e fundo
let img = new Image();
img.src = 'images/bg.jpg'; 
img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

//mudar tamanho de window de acordo com dispositivo
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
);
