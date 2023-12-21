const buttons = document.getElementsByTagName('button');
const winsItem = document.getElementById('wins-item');
const lostsItem = document.getElementById('losts-item');
const tieItem = document.getElementById('tie-item');
const result = document.getElementById('result');
const cardLeft = document.getElementById('card-left');
const cardRight = document.getElementById('card-right');

let player = 0;
let pc = 0;
let wins = 0;
let losts = 0;
let tie = 0;
let outcome = '';

for (const button of buttons) {
  button.addEventListener('click', play);
}

function chooseUserOption (element) {
  let { name } = element;
  switch (name) {
    case 'rock':
      player = 1;
      break;
    case 'paper':
      player = 2;
      break;
    case 'scissors':
      player = 3;
      break;
    default:
      player = 0;
  }
}
function assignUserPicture () {
  let image;
  let bgColor;
  switch (player) {
    case 1:
      image = './assets/svg/rockWithoutBg.svg';
      bgColor = '#C70039';
      break;
    case 2:
      image = './assets/svg/paperWithoutBg.svg';
      bgColor = '#FF5733';
      break;
    case 3:
      image = './assets/svg/scissorWithoutBg.svg';
      bgColor = '#FFC30F';
      break;
    default:
      console.log('existe un error');
  }
  cardLeft.src = image;
  cardLeft.style.backgroundColor = bgColor;
}
function choosePcOption () {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  pc = random(1, 3);
}
function assignPcPicture () {
  let image;
  switch (pc) {
    case 1:
      image = './assets/svg/rockWithoutBg.svg';
      break;
    case 2:
      image = './assets/svg/paperWithoutBg.svg';
      break;
    case 3:
      image = './assets/svg/scissorWithoutBg.svg';
      break;
    default:
      console.log('existe un error');
  }
  cardRight.src = image;
}
function assignResult () {
  if(player === pc){
    outcome = 'Empate';
  } else if(player > pc){
    outcome = 'Ganaste';
  } else if(player < pc){
    outcome = 'Perdiste';
  } else {
    outcome = 'Existe un error';
  }
}
function assignScore () {
  switch (outcome.trim()) {
    case 'Ganaste':
      wins += 1;
      break;
    case 'Perdiste':
      losts += 1;
      break;
    case 'Empate':
      tie += 1;
      break;
    default:
      console.log("Es un error, no debe ingresar aqui")
  }
}
function showResult () {
  if (outcome !== 'Empate') {
    result.innerText = `¡${outcome} esta partida!`
  } else {
    result.innerText = `¡Empataste esta vez!`
  }
}

function play (e) {
  chooseUserOption(e.target);
  assignUserPicture();
  choosePcOption();
  assignPcPicture();
  assignResult();
  assignScore();
  showResult();

  winsItem.innerText = wins;
  lostsItem.innerText = losts;
  tieItem.innerText = tie;
}
