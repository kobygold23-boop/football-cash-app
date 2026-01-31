const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Player
let player = { x: 140, y: 400, size: 20 };

// Ball
let ball = { x: 150, y: 250, size: 10 };

// Goal
let goal = { x: 100, y: 20, width: 100, height: 10 };

// Draw everything
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Goal
  ctx.fillStyle = "white";
  ctx.fillRect(goal.x, goal.y, goal.width, goal.height);

  // Ball
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fill();

  // Player
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.size, player.size);

  // Check goal
  if (
    ball.y - ball.size <= goal.y + goal.height &&
    ball.x > goal.x &&
    ball.x < goal.x + goal.width
  ) {
    alert("GOAL!!! ⚽🔥");
    ball.y = 250;
  }
}

// Movement
function moveUp() {
  player.y -= 10;
  kick();
}
function moveDown() {
  player.y += 10;
}
function moveLeft() {
  player.x -= 10;
}
function moveRight() {
  player.x += 10;
}

// Kick ball
function kick() {
  if (
    Math.abs(player.x - ball.x) < 20 &&
    Math.abs(player.y - ball.y) < 20
  ) {
    ball.y -= 30;
  }
}

// Game loop
setInterval(draw, 30);
