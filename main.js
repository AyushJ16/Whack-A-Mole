const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        console.log('Ah nah thats the same one bud');
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(600, 1000);
    const hole = randomHole(holes);
    document.querySelector('button').classList.add('hide');
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp){ peep();
        }
    }, time);
  }
  
  function startGame() {
    scoreBoard.innerHTML = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() =>{ timeUp = true;
      document.querySelector('button').classList.remove('hide');
     ;}, 15000)
     if(timeUp)
     {
     }
    }

function bonk(e) {
    if (!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach((mole) => mole.addEventListener('click', bonk));