let soundOn = true;
const soundIcon = document.getElementById('sound-icon');
const backgroundMusic = document.getElementById('background-music');

function selectLevel() {
    const levelSelect = document.getElementById('level-select');
    const level = levelSelect.value;
    document.getElementById('message').textContent = `Selected Level: ${level}`;
}

function showRules() {
    const rules = `
        1. Rule one: ...
        2. Rule two: ...
        3. Rule three: ...
    `;
    alert(rules);
}

function toggleSound() {
    soundOn = !soundOn;
    if (soundOn) {
        soundIcon.src = 'img/soundON.png';
        backgroundMusic.play();
        document.getElementById('message').textContent = "Som está ligado.";
    } else {
        soundIcon.src = 'img/soundOFF.png';
        backgroundMusic.pause();
        document.getElementById('message').textContent = "Som está desligado";
    }
}


backgroundMusic.play();
