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
let pScore = document.getElementById("playerScore");
let cScore = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;
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
//Function Computer Move
function computerMove() {
  computerY += speedballY * 0.75;
}
//Function Ball Move
function ballMove() {
  //Collision top/bottom
  if (ballY + ball.height > canvas.height || ballY < 0) {
    speedballY *= -1;
  }
  //Collision with Computer
  if (ballX >= canvas.width - 15) {
    collision(computerY);
  }
  //Collision with Player
  else if (ballX <= 10) {
    collision(playerY);
  }
  //BallMoove with the time
  ballX += speedballX;
  ballY += speedballY;
}
//Function Collision
function collision(Y) {
  // The player does not hit the ball
  if (ballY < Y || ballY > Y + 100) {
    if (ballX <= 10) {
      computerScore++;
      cScore.textContent = computerScore;
    }
    if (ballX >= canvas.width - 15) {
      playerScore++;
      pScore.textContent = playerScore;
    }
    // Set ball and players to the center
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    playerY = canvas.height / 2 - 50;
    computerY = canvas.height / 2 - 50;

    // Reset speed
    speedballX = 2;
  } else {
    // Increase speed and change direction if collision succes
    speedballX *= -1.15;
  }
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
