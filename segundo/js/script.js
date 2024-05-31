let entities = [];
let spriteSheetZombie;
let spritePerson1;
let canvas;
let ctx;
let bgX = 0; // posição inicial do fundo
let bgSpeed = 2; // velocidade do scrolling
let gravity = 0.5;
let isJumping = false;
let score = 0; // Score variable
let numberOfZombies = 0; // Number of zombies variable

window.addEventListener("load", init, false);
window.addEventListener("keydown", handleKeyDown, false);

function init() {
    canvas = document.getElementById('jogoCanvas');
    ctx = canvas.getContext('2d');

    // tamanho de window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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

            // check collisions
            checkCollisions();

            // Display score and number of zombies
            displayScoreAndZombies();

            // para criar loop
            requestAnimationFrame(draw);
        }

        // iniciar loop
        draw();
    };

    // zombie spritesheet
    spriteSheetZombie = new Image();
    spriteSheetZombie.src = 'img/zombie.png';
    spriteSheetZombie.onload = function () {
        let zombie = new Zombie(spriteSheetZombie, 100, canvas.height - 120, 80, 100);
        entities.unshift(zombie); // Add zombie to the beginning of the array
        numberOfZombies++; // Increment number of zombies
    };

    // person images
    spritePerson1 = new Image();
    spritePerson1.src = 'img/boy.png';
    spritePerson1.onload = function () {
        spawnPeople();
        setInterval(spawnPeople, 10000); // Spawn people every 10 seconds
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

function spawnPeople() {
    let randomSpawn = Math.floor(Math.random() * 3); // 0, 1, or 2
    let personWidth = 70; // Decreased size
    let personHeight = 70; // Decreased size
    let yPosition = canvas.height - 115; // Adjusted to smaller height

    if (randomSpawn === 0) {
        let person1 = new Person(spritePerson1, canvas.width, yPosition, personWidth, personHeight);
        entities.push(person1);
    } else if (randomSpawn === 1) {
        let person1 = new Person(spritePerson1, canvas.width - 100, yPosition, personWidth, personHeight);
        entities.push(person1);
    } else if (randomSpawn === 2) {
        let person1 = new Person(spritePerson1, canvas.width, yPosition, personWidth, personHeight);
        let person2 = new Person(spritePerson1, canvas.width - 100, yPosition, personWidth, personHeight);
        entities.push(person1);
        entities.push(person2);
    }
}

function checkCollisions() {
    for (let i = entities.length - 1; i >= 0; i--) {
        let entity = entities[i];
        if (entity instanceof Person) {
            for (let j = 0; j < entities.length; j++) {
                let zombie = entities[j];
                if (zombie instanceof Zombie) {
                    if (isColliding(zombie, entity)) {
                        // Remove person and add a new zombie
                        entities.splice(i, 1);
                        let newZombie = new Zombie(spriteSheetZombie, entity.x, entity.y, 80, 100);
                        entities.push(newZombie);
                        score += 5; // Increase score by 5 points
                        numberOfZombies++; // Increment number of zombies
                        break;
                    }
                }
            }
        }
    }
}

function isColliding(zombie, person) {
    return !(
        zombie.x + zombie.width < person.x ||
        zombie.x > person.x + person.width ||
        zombie.y + zombie.height < person.y ||
        zombie.y > person.y + person.height
    );
}

function displayScoreAndZombies() {
    ctx.font = '24px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Score: ' + score, 20, 30);
    ctx.fillText('Zombies: ' + numberOfZombies, 20, 60);
}