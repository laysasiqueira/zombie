let entities=[];
let spriteSheetZombie;
let assetsLoaded = 0;
let canvas;
let ctx;


window.addEventListener("load", init, false);

function init() {
    canvas = document.getElementById('jogoCanvas');
    ctx = canvas.getContext('2d');

    // de cordo com tamanho de window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //elemento  backG e fundo
    let backG = new Image();
    backG.src = 'img/bg.jpg';
    backG.onload = function () {
        ctx.drawImage(backG, 0, 0, canvas.width, canvas.height);
    };
    spriteSheetZombie = new SpriteSheet('img/zombie.png','json/zombie.json',spriteLoaded);
}
// buscar elemento canvas
function spriteLoaded(){
    assetsLoaded++;

    if(assetsLoaded==1){
        zombie=new Zombie(spriteSheetZombie, 0, canvas.height-zombie.height, canvas.width, canvas.height);
        entities.push(zombie);
        update();
    }
}

function update(){
    for (let i = 0; i < entities.length; i++)
		entities[i].update();

    requestAnimationFrame(update);
	render();
}

function render() {   
	ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  	for (let i = 0; i < entities.length; i++)
	{ 
    	let entity = entities[i];
		let sprite = entity.getSprite();  
	 
    	if (!entity.killed)
		{
			ctx.drawImage(
				entity.spriteSheet.img, 
				sprite.x, sprite.y, 
				sprite.width, sprite.height,
				entity.x, entity.y,  
				entity.width, entity.height
			);
  		}
  	}

}

//mudar tamanho de window de acordo com dispositivo
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.drawImage(backG, 0, 0, canvas.width, canvas.height);
});
//zombie
/**window.addEventListener('keydown', (event)=>{
    //seta para a esquerda
    if(event.keyCode==37){
        posX-=velocidade
    }
    //seta para a direita
    else(event.keyCode==39){
        posX+=velocidade
    }
    //seta para cima
    if(event.keyCode==38){
        posY-=velocidade
    }
    //seta para baixo
    else(event.keyCode==40){
        posY+=velocidade
    }
})**/
