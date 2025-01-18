let selected;
let score = 0
document.querySelector('#score').innerText = score;
const dropZones = document.querySelectorAll('.drop');
const restartGame = document.querySelector('button');

restartGame.style.display = 'none';

function endGame() {
    restartGame.style.display = 'inline';
    document.querySelector('.drag-section').style.border = 'none';
}

function startGame() {
    window.location.reload();
    document.querySelector('.drag-section').style.border = 'inline';
}

restartGame.addEventListener('click', startGame);

function handleDrop(e) {
    if(document.querySelector('.drag-section').childElementCount === 1) {
        endGame();
    };
    if(e.target.classList.contains(selected.className)) {
        e.target.classList.remove('drop');        
        selected.remove();
        score++
        document.querySelector('#score').innerText = score;
        return;
    }
    score--
    document.querySelector('#score').innerText = score;
}

dropZones.forEach(function(zone) {
    zone.addEventListener('drop', handleDrop);
});

function handleDragStart(e) {
    e.target.style.opacity = 0.5;
    selected = e.target;
}

document.addEventListener('dragstart', handleDragStart);

function handleDragEnd(e) {
    e.target.style.opacity = 1
}

document.addEventListener('dragend', handleDragEnd);

function allowDrop(e) {
    e.preventDefault();
}

dropZones.forEach(function(value) {
    value.addEventListener('dragover', allowDrop);
});