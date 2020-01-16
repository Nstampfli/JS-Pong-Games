//Canvas
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//Load Image
const board = new Image();
const player = new Image();
const computer = new Image();
const ball = new Image();

board.src = "../assets/board.png";
player.src = "../assets/player.png";
computer.src = "../assets/computer.png";
ball.src = "../assets/ball.png";

//Variable
let playerX = 0;
let playerY = canvas.height / 2 - 50;
let computerX = canvas.width - 10;
let computerY = canvas.height / 2 - 50;
let ballX = canvas.width / 2 - 5;
let ballY = canvas.height / 2;
let speedballX = 2;
let speedballY = 2;

//Function Player Move
function playerMove() {
  switch (event.keyCode) {
    case 38:
      if (playerY > 0) {
        playerMoveTop();
      }
      break;
    case 40:
      if (playerY < canvas.height - player.height) {
        playerMoveBottom();
      }
      break;
    default:
      break;
  }
}
// Function Player Moove Top
function playerMoveTop() {
  playerY -= 10;
}
// Function Player Moove Left
function playerMoveBottom() {
  playerY += 10;
}

//Function Draw to image placement and drawing
function draw() {
  context.drawImage(board, 0, 0);
  context.drawImage(player, playerX, playerY);
  context.drawImage(computer, computerX, computerY);
  context.drawImage(ball, ballX, ballY);
}

//Function Play
function play() {
  window.addEventListener("keydown", playerMove);
  computerMove();
  ballMove();
  draw();
  requestAnimationFrame(play);
}
//Call Function
play();
