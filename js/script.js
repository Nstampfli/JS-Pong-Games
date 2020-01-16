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

function draw() {
  context.drawImage(board, 0, 0);
  context.drawImage(player, 0, 200);
  context.drawImage(computer, canvas.width - computer.width, 200);
  context.drawImage(ball, canvas.width / 2 - ball.width / 2, canvas.height / 2);
  requestAnimationFrame(draw);
}

draw();
