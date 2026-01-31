const player = document.getElementById("player");

let x = 135;
let y = 430;
const step = 10;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") y -= step;
  if (e.key === "ArrowDown") y += step;
  if (e.key === "ArrowLeft") x -= step;
  if (e.key === "ArrowRight") x += step;

  player.style.left = x + "px";
  player.style.top = y + "px";
});
