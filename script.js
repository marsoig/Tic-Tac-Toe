var currentPlayer = 'x';
let buttons = document.querySelectorAll(".container > button");
function drawXorO() {
  if (currentPlayer == 'x') {
    this.textContent = 'X';
  }
  else {
    this.textContent = 'O';
  }
  currentPlayer = (currentPlayer == 'x') ? 'o' : 'x';
  if (checkVictory()) { gameOver()};
}
for (let btn of buttons) {
  btn.disabled = true;
}
let startButton = document.querySelector(".start-button > button");

startButton.onclick = function () {
  for (let btn of buttons) {
    btn.onclick = drawXorO;
    btn.textContent = '';
    btn.disabled = false;
  }
  startButton.disabled = true;
}
function gameOver() {
  for (let btn of buttons) {
    btn.disabled = true;
  }
  startButton.disabled = false;
}

function checkVictory() {
  cellVals = new Array;
  for (let btn of buttons) {
    cellVals.push(btn.textContent);
  }
  for (let i = 0; i < 7; i=i+3) {
    if ( (cellVals[i] == cellVals[i+1]) && (cellVals[i+1] == cellVals[i+2]) && ((cellVals[i]=='O')|(cellVals[i]=='X'))) {
      return true;
    }
  }
  for (let i = 0; i < 3; i++) {
    if ( (cellVals[i] == cellVals[i+3]) && (cellVals[i+3] == cellVals[i+6]) && ( (cellVals[i] == 'O') | (cellVals[i] == 'X') ) ) {
      return true;
    }
  }
  if ( (cellVals[0] == cellVals[4]) &&(cellVals[4] == cellVals[8]) && ( (cellVals[0] == 'O') | (cellVals[0] == 'X' ) )) {
    return true;
  }
  if ( (cellVals[2] == cellVals[4]) && (cellVals[4] == cellVals[6]) && ( (cellVals[2] == 'O') | (cellVals[2] == 'X') )) {
    return true;
  }
  return false;
}
