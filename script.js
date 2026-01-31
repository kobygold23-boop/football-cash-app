let balance = 100;

function playGame() {
  const stake = 10;

  if (balance < stake) {
    document.getElementById("result").innerText =
      "❌ Insufficient balance";
    return;
  }

  const win = Math.random() > 0.5;

  if (win) {
    balance += stake;
    document.getElementById("result").innerText =
      "🎉 You WON $" + stake;
  } else {
    balance -= stake;
    document.getElementById("result").innerText =
      "😢 You LOST $" + stake;
  }

  document.getElementById("balance").innerText =
    "Balance: $" + balance;
}
