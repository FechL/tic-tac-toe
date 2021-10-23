const kotak = document.querySelectorAll('.kotak');
const gameOver = document.querySelector('.game-over');
const xScore = document.querySelector('.x-score');
const oScore = document.querySelector('.o-score');
const resetGame = document.querySelector('.reset-game');
const resetScore = document.querySelector('.reset-score');
// const ktkWin = document.querySelector('.ktkWin');
// const ktk1 = document.querySelector('.ktk1');
// const ktk1 = document.querySelector('.ktk2');
// const ktk1 = document.querySelector('.ktk3');
// const ktk1 = document.querySelector('.ktk4');
// const ktk1 = document.querySelector('.ktk5');
// const ktk1 = document.querySelector('.ktk6');
// const ktk1 = document.querySelector('.ktk7');
// const ktk1 = document.querySelector('.ktk8');
// const ktk1 = document.querySelector('.ktk9');
let toggle = 'x';
kotak.forEach(m => m.addEventListener('click', function () {

    // toggle
    if (this.classList.contains("x") || this.classList.contains("o")) {
        
    } else if (toggle == "x") {
        this.classList.add("x");
        this.innerHTML = 'x';
        toggle = "o";
    } else if (toggle == "o") {
        this.classList.add("o");
        this.innerHTML = 'o';
        toggle = "x";
    }
    win();
}));

resetGame.addEventListener('click', function () {
    reset();
})
resetScore.addEventListener('click', function () {
    xPt = 0;
    oPt = 0;
    xScore.innerHTML = `X : ` + xPt;
    oScore.innerHTML = `O : ` + oPt;
    reset();
})

// skor
    let xPt = 0;
    let oPt = 0;

// function
function win() {
    // ketika x menang
    if (kotak[0].classList.contains("x") && kotak[1].classList.contains("x") && kotak[2].classList.contains("x")) {
        kotak[0].classList.add("ktkWin");
        kotak[1].classList.add("ktkWin");
        kotak[2].classList.add("ktkWin");
        scoreX();
    }
    if (kotak[3].classList.contains("x") && kotak[4].classList.contains("x") && kotak[5].classList.contains("x")) {
        kotak[3].classList.add("ktkWin");
        kotak[4].classList.add("ktkWin");
        kotak[5].classList.add("ktkWin");
        scoreX();
    }
    if (kotak[6].classList.contains("x") && kotak[7].classList.contains("x") && kotak[8].classList.contains("x")) {
        kotak[6].classList.add("ktkWin");
        kotak[7].classList.add("ktkWin");
        kotak[8].classList.add("ktkWin");
        scoreX();
    }
    if (kotak[0].classList.contains("x") && kotak[3].classList.contains("x") && kotak[6].classList.contains("x")) {
        kotak[0].classList.add("ktkWin");
        kotak[3].classList.add("ktkWin");
        kotak[6].classList.add("ktkWin");
        scoreX();
    }
    if (kotak[1].classList.contains("x") && kotak[4].classList.contains("x") && kotak[7].classList.contains("x")) {
        kotak[1].classList.add("ktkWin");
        kotak[4].classList.add("ktkWin");
        kotak[7].classList.add("ktkWin");
        scoreX();
    }
    if (kotak[2].classList.contains("x") && kotak[5].classList.contains("x") && kotak[8].classList.contains("x")) {
        kotak[2].classList.add("ktkWin");
        kotak[5].classList.add("ktkWin");
        kotak[8].classList.add("ktkWin");
        scoreX();
    }
    if (kotak[0].classList.contains("x") && kotak[4].classList.contains("x") && kotak[8].classList.contains("x")) {
        kotak[0].classList.add("ktkWin");
        kotak[4].classList.add("ktkWin");
        kotak[8].classList.add("ktkWin");
        scoreX();
    }
    if (kotak[2].classList.contains("x") && kotak[4].classList.contains("x") && kotak[6].classList.contains("x")) {
        kotak[2].classList.add("ktkWin");
        kotak[4].classList.add("ktkWin");
        kotak[6].classList.add("ktkWin");
        scoreX();
    }
    // ketika o menang
    if (kotak[0].classList.contains("o") && kotak[1].classList.contains("o") && kotak[2].classList.contains("o")) {
        kotak[0].classList.add("ktkWin");
        kotak[1].classList.add("ktkWin");
        kotak[2].classList.add("ktkWin");
        scoreO();
    }
    if (kotak[3].classList.contains("o") && kotak[4].classList.contains("o") && kotak[5].classList.contains("o")) {
        kotak[3].classList.add("ktkWin");
        kotak[4].classList.add("ktkWin");
        kotak[5].classList.add("ktkWin");
        scoreO();
    }
    if (kotak[6].classList.contains("o") && kotak[7].classList.contains("o") && kotak[8].classList.contains("o")) {
        kotak[6].classList.add("ktkWin");
        kotak[7].classList.add("ktkWin");
        kotak[8].classList.add("ktkWin");
        scoreO();
    }
    if (kotak[0].classList.contains("o") && kotak[3].classList.contains("o") && kotak[6].classList.contains("o")) {
        kotak[0].classList.add("ktkWin");
        kotak[3].classList.add("ktkWin");
        kotak[6].classList.add("ktkWin");
        scoreO();
    }
    if (kotak[1].classList.contains("o") && kotak[4].classList.contains("o") && kotak[7].classList.contains("o")) {
        kotak[1].classList.add("ktkWin");
        kotak[4].classList.add("ktkWin");
        kotak[7].classList.add("ktkWin");
        scoreO();
    }
    if (kotak[2].classList.contains("o") && kotak[5].classList.contains("o") && kotak[8].classList.contains("o")) {
        kotak[2].classList.add("ktkWin");
        kotak[5].classList.add("ktkWin");
        kotak[8].classList.add("ktkWin");
        scoreO();
    }
    if (kotak[0].classList.contains("o") && kotak[4].classList.contains("o") && kotak[8].classList.contains("o")) {
        kotak[0].classList.add("ktkWin");
        kotak[4].classList.add("ktkWin");
        kotak[8].classList.add("ktkWin");
        scoreO();
    }
    if (kotak[2].classList.contains("o") && kotak[4].classList.contains("o") && kotak[6].classList.contains("o")) {
        kotak[2].classList.add("ktkWin");
        kotak[4].classList.add("ktkWin");
        kotak[6].classList.add("ktkWin");
        scoreO();
    }
}

function scoreX() {
    gameOver.classList.remove("none");
    xPt += 1;
    xScore.innerHTML = `X : ` + xPt;
}

function scoreO() {
    gameOver.classList.remove("none");
    oPt += 1;
    oScore.innerHTML = `O : ` + oPt;
}

function reset() {
    kotak.forEach(m => {
        m.classList.remove("x");
        m.classList.remove("o");
        m.classList.remove("ktkWin");
        m.innerHTML = '';
        toggle = 'x';
    })
    gameOver.classList.add("none");
}
