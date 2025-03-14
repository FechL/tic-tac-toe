// DOM
const box = document.querySelectorAll('.box');
const gameOver = document.querySelector('.game-over');
const xScore = document.querySelector('.x-score');
const oScore = document.querySelector('.o-score');
const clear = document.querySelector('.clear');
const reset = document.querySelector('.reset');

// Sound effects
const beepSound = new Audio('./sound/beep.wav');
const clickSound = new Audio('./sound/click.wav');
const gameOverSound = new Audio('./sound/gameover.wav');

// Action
let toggle = 'x';
let tgl = 0;
updateTurnIndicator();

box.forEach(m => m.addEventListener('click', function () {
    if (this.classList.contains("x") || this.classList.contains("o") || !gameOver.classList.contains("none")) {
        return; // Don't do anything if box is already filled or game is over
    } else if (toggle == "x") {
        beepSound.play();
        this.classList.add("x");
        this.innerHTML = 'x';
        toggle = "o";
    } else if (toggle == "o") {
        beepSound.play();
        this.classList.add("o");
        this.innerHTML = 'o';
        toggle = "x";
    }
    updateTurnIndicator();
    win();
}));

clear.addEventListener('click', function () {
    tgl++;
    clickSound.play();
    restart();
})

reset.addEventListener('click', function () {
    xPt = 0;
    oPt = 0;
    xScore.innerHTML = `X : ` + xPt;
    oScore.innerHTML = `O : ` + oPt;
    toggle = "x";
    tgl = 0;
    clickSound.play();
    restart();
})

let xPt = 0;
let oPt = 0;

// Function to update turn indicator colors
function updateTurnIndicator() {
    if (toggle == "x") {
        // X's turn - X is active (green background, black text)
        xScore.style.backgroundColor = "rgb(23, 218, 49)";
        xScore.style.color = "rgb(0, 0, 0)";
        // O is inactive (dark background, green text)
        oScore.style.backgroundColor = "rgb(28, 28, 28)";
        oScore.style.color = "rgb(23, 156, 36)";
    } else if (toggle == "o") {
        // O's turn - O is active (green background, black text)
        oScore.style.backgroundColor = "rgb(23, 218, 49)";
        oScore.style.color = "rgb(0, 0, 0)";
        // X is inactive (dark background, green text)
        xScore.style.backgroundColor = "rgb(28, 28, 28)";
        xScore.style.color = "rgb(23, 156, 36)";
    }
}

// Function
function win() {
    if (box[0].classList.contains("x") && box[1].classList.contains("x") && box[2].classList.contains("x")) {
        box[0].classList.add("box-win");
        box[1].classList.add("box-win");
        box[2].classList.add("box-win");
        highlightScore();
        scoreX();
    }
    if (box[3].classList.contains("x") && box[4].classList.contains("x") && box[5].classList.contains("x")) {
        box[3].classList.add("box-win");
        box[4].classList.add("box-win");
        box[5].classList.add("box-win");
        highlightScore();
        scoreX();
    }
    if (box[6].classList.contains("x") && box[7].classList.contains("x") && box[8].classList.contains("x")) {
        box[6].classList.add("box-win");
        box[7].classList.add("box-win");
        box[8].classList.add("box-win");
        highlightScore();
        scoreX();
    }
    if (box[0].classList.contains("x") && box[3].classList.contains("x") && box[6].classList.contains("x")) {
        box[0].classList.add("box-win");
        box[3].classList.add("box-win");
        box[6].classList.add("box-win");
        highlightScore();
        scoreX();
    }
    if (box[1].classList.contains("x") && box[4].classList.contains("x") && box[7].classList.contains("x")) {
        box[1].classList.add("box-win");
        box[4].classList.add("box-win");
        box[7].classList.add("box-win");
        highlightScore();
        scoreX();
    }
    if (box[2].classList.contains("x") && box[5].classList.contains("x") && box[8].classList.contains("x")) {
        box[2].classList.add("box-win");
        box[5].classList.add("box-win");
        box[8].classList.add("box-win");
        highlightScore();
        scoreX();
    }
    if (box[0].classList.contains("x") && box[4].classList.contains("x") && box[8].classList.contains("x")) {
        box[0].classList.add("box-win");
        box[4].classList.add("box-win");
        box[8].classList.add("box-win");
        highlightScore();
        scoreX();
    }
    if (box[2].classList.contains("x") && box[4].classList.contains("x") && box[6].classList.contains("x")) {
        box[2].classList.add("box-win");
        box[4].classList.add("box-win");
        box[6].classList.add("box-win");
        highlightScore();
        scoreX();
    }
    if (box[0].classList.contains("o") && box[1].classList.contains("o") && box[2].classList.contains("o")) {
        box[0].classList.add("box-win");
        box[1].classList.add("box-win");
        box[2].classList.add("box-win");
        highlightScore();
        scoreO();
    }
    if (box[3].classList.contains("o") && box[4].classList.contains("o") && box[5].classList.contains("o")) {
        box[3].classList.add("box-win");
        box[4].classList.add("box-win");
        box[5].classList.add("box-win");
        highlightScore();
        scoreO();
    }
    if (box[6].classList.contains("o") && box[7].classList.contains("o") && box[8].classList.contains("o")) {
        box[6].classList.add("box-win");
        box[7].classList.add("box-win");
        box[8].classList.add("box-win");
        highlightScore();
        scoreO();
    }
    if (box[0].classList.contains("o") && box[3].classList.contains("o") && box[6].classList.contains("o")) {
        box[0].classList.add("box-win");
        box[3].classList.add("box-win");
        box[6].classList.add("box-win");
        highlightScore();
        scoreO();
    }
    if (box[1].classList.contains("o") && box[4].classList.contains("o") && box[7].classList.contains("o")) {
        box[1].classList.add("box-win");
        box[4].classList.add("box-win");
        box[7].classList.add("box-win");
        highlightScore();
        scoreO();
    }
    if (box[2].classList.contains("o") && box[5].classList.contains("o") && box[8].classList.contains("o")) {
        box[2].classList.add("box-win");
        box[5].classList.add("box-win");
        box[8].classList.add("box-win");
        highlightScore();
        scoreO();
    }
    if (box[0].classList.contains("o") && box[4].classList.contains("o") && box[8].classList.contains("o")) {
        box[0].classList.add("box-win");
        box[4].classList.add("box-win");
        box[8].classList.add("box-win");
        highlightScore();
        scoreO();
    }
    if (box[2].classList.contains("o") && box[4].classList.contains("o") && box[6].classList.contains("o")) {
        box[2].classList.add("box-win");
        box[4].classList.add("box-win");
        box[6].classList.add("box-win");
        highlightScore();
        scoreO();
    }
}

function scoreX() {
    gameOver.classList.remove("none");
    xPt += 1;
    xScore.innerHTML = `X : ` + xPt;
    toggle = 'o';
    gameOverSound.play();
}

function scoreO() {
    gameOver.classList.remove("none");
    oPt += 1;
    oScore.innerHTML = `O : ` + oPt;
    toggle = 'x';
    gameOverSound.play();
}

function highlightScore() {
    // Both indicators are highlighted when game is won
    xScore.style.backgroundColor = "rgb(28, 28, 28)";
    oScore.style.backgroundColor = "rgb(28, 28, 28)";
    xScore.style.color = "rgb(23, 218, 49)";
    oScore.style.color = "rgb(23, 218, 49)";
}

function restart() {
    box.forEach(m => {
        m.classList.remove("x");
        m.classList.remove("o");
        m.classList.remove("box-win");
        m.innerHTML = '';
    });

    if (tgl % 2 == 0) {
        toggle = 'x';
    } else if (tgl % 2 == 1) {
        toggle = 'o';
    }

    updateTurnIndicator();
    gameOver.classList.add("none");
}

// Function to handle responsive scaling
function handleResponsiveScaling() {
    const container = document.querySelector('.container');
    const containerWidth = 440; // Original width of the container

    // Calculate scale factor based on viewport width
    const viewportWidth = Math.min(document.documentElement.clientWidth, window.innerWidth);
    const padding = 40; // Increased padding to prevent scaling issues
    const availableWidth = viewportWidth - padding;

    // Determine scale factor (don't scale up, only down if needed)
    let scaleFactor = 1;
    if (availableWidth < containerWidth) {
        scaleFactor = availableWidth / containerWidth;
    }

    // Apply scale factor as CSS variable (rounded to 2 decimal places for stability)
    scaleFactor = Math.floor(scaleFactor * 100) / 100;
    document.documentElement.style.setProperty('--scale-factor', scaleFactor);
}

// Run on page load
window.addEventListener('DOMContentLoaded', handleResponsiveScaling);

// Run whenever window is resized
window.addEventListener('resize', handleResponsiveScaling);