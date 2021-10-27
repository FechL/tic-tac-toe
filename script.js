// DOM
const box = document.querySelectorAll('.box');
const gameOver = document.querySelector('.game-over');
const xScore = document.querySelector('.x-score');
const oScore = document.querySelector('.o-score');
const clear = document.querySelector('.clear');
const reset = document.querySelector('.reset');

// Action
let toggle = 'x';
let tgl = 0;
xScore.style.color = "rgb(23, 218, 49)";
oScore.style.color = "rgb(23, 156, 36)";

box.forEach(m => m.addEventListener('click', function () {
    if (this.classList.contains("x") || this.classList.contains("o")) {
    } else if (toggle == "x") {
        this.classList.add("x");
        this.innerHTML = 'x';
        oScore.style.color = "rgb(23, 218, 49)";
        xScore.style.color = "rgb(23, 156, 36)";
        toggle = "o";
    } else if (toggle == "o") {
        this.classList.add("o");
        this.innerHTML = 'o';
        oScore.style.color = "rgb(23, 156, 36)";
        xScore.style.color = "rgb(23, 218, 49)";
        toggle = "x";
    }
    win();
}));

clear.addEventListener('click', function () {
    tgl++;
    restart();
})

reset.addEventListener('click', function () {
    xPt = 0;
    oPt = 0;
    xScore.innerHTML = `X : ` + xPt;
    oScore.innerHTML = `O : ` + oPt;
    toggle = "x";
    tgl = 0;
    restart();
})

let xPt = 0;
let oPt = 0;

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
}

function scoreO() {
    gameOver.classList.remove("none");
    oPt += 1;
    oScore.innerHTML = `O : ` + oPt;
    toggle = 'x';
}

function highlightScore() {
    xScore.style.color = "rgb(23, 218, 49)";
    oScore.style.color = "rgb(23, 218, 49)";
}

function restart() {
    box.forEach(m => {
        m.classList.remove("x");
        m.classList.remove("o");
        m.classList.remove("box-win");
        m.innerHTML = '';
        if (toggle == "x") {
            xScore.style.color = "rgb(23, 218, 49)";
            oScore.style.color = "rgb(23, 156, 36)"; 
        } else if (toggle == "o") {
            oScore.style.color = "rgb(23, 218, 49)";
            xScore.style.color = "rgb(23, 156, 36)"; 
        }
        if (tgl % 2 == 0) {
            toggle = 'x';
        } else if (tgl % 2 == 1) {
            toggle = 'o';
        }
    })
    gameOver.classList.add("none");
}