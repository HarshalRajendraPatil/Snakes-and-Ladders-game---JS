//Global vaiables.
let rollDice = document.getElementById("roll");
let p1Dice = document.querySelector(".p1-dice");
let p2Dice = document.querySelector(".p2-dice");
let body = document.querySelector(".inner-cont");
let endTitle = document.querySelector(".over-title");
let plBtn = document.querySelector(".play-again");
let result = document.querySelector(".over-title");
let p1Score = 1;
let p2Score = 1;
let dice = document.querySelector("#roll");
let goto = function (from, to, currentPlayer) {
  setTimeout(() => {
    document.querySelector(
      `#on-board-${from} .${currentPlayer === 1 ? "red" : "yellow"}Player`
    ).style.opacity = "0";
    document.querySelector(
      `#on-board-${to} .${currentPlayer === 1 ? "red" : "yellow"}Player`
    ).style.opacity = "100";
    currentPlayer === 1 ? (p1Score = to) : (p2Score = to);
  }, 500);
};
let activePlayer = 1;

// Full board movement for player.
rollDice.addEventListener("click", () => {
  dice.textContent = `p-2 chance`;
  if (activePlayer === 1) {
    var randNum = Math.floor(Math.random() * 6) + 1;
    p1Dice.setAttribute("src", `images/dice${randNum}.png`);
    document.querySelector(`#on-board-${p1Score} .redPlayer`).style.opacity =
      "0";
    if (p1Score + randNum < 100) {
      p1Score += randNum;
    } else if (p1Score + randNum === 100) {
      p1Score += randNum;
      document.querySelector(`#on-board-${p1Score} .redPlayer`).style.opacity =
        "100";
      rollDice.disabled = true;
      result.textContent = `Player ${activePlayer} Won 😎😎`;
      body.classList.add("opa");
      plBtn.classList.add("hide");
      endTitle.classList.add("hide");
    }
    document.querySelector(`#on-board-${p1Score} .redPlayer`).style.opacity =
      "100";

    //snake bite and ladder climb functinality
    if (p1Score == 6) {
      goto(p1Score, 3, 1);
    } else if (p1Score == 42) {
      goto(p1Score, 19, 1);
    } else if (p1Score == 45) {
      goto(p1Score, 36, 1);
    } else if (p1Score == 66) {
      goto(p1Score, 43, 1);
    } else if (p1Score == 67) {
      goto(p1Score, 54, 1);
    } else if (p1Score == 83) {
      goto(p1Score, 62, 1);
    } else if (p1Score == 87) {
      goto(p1Score, 69, 1);
    } else if (p1Score == 5) {
      goto(p1Score, 9, 1);
    } else if (p1Score == 15) {
      goto(p1Score, 25, 1);
    } else if (p1Score == 18) {
      goto(p1Score, 80, 1);
    } else if (p1Score == 44) {
      goto(p1Score, 86, 1);
    } else if (p1Score == 47) {
      goto(p1Score, 68, 1);
    } else if (p1Score == 63) {
      goto(p1Score, 78, 1);
    } else if (p1Score == 71) {
      goto(p1Score, 94, 1);
    } else if (p1Score == 81) {
      goto(p1Score, 98, 1);
    }

    activePlayer = 2;
  } else {
    dice.textContent = `p-1 chance`;
    var randNum = Math.floor(Math.random() * 6) + 1;
    p2Dice.setAttribute("src", `images/dice${randNum}.png`);
    document.querySelector(`#on-board-${p2Score} .yellowPlayer`).style.opacity =
      "0";
    if (p2Score + randNum < 100) {
      p2Score += randNum;
    } else if (p2Score + randNum === 100) {
      p2Score += randNum;
      document.querySelector(
        `#on-board-${p2Score} .yellowPlayer`
      ).style.opacity = "100";
      result.textContent = `Player ${activePlayer} Won 😎😎`;
      rollDice.disabled = true;
      body.classList.add("opa");
      plBtn.classList.add("hide");
      endTitle.classList.add("hide");
    }
    document.querySelector(`#on-board-${p2Score} .yellowPlayer`).style.opacity =
      "100";

    if (p2Score == 6) {
      goto(p2Score, 3, 2);
    } else if (p2Score == 42) {
      goto(p2Score, 19, 2);
    } else if (p2Score == 45) {
      goto(p2Score, 36, 2);
    } else if (p2Score == 66) {
      goto(p2Score, 43, 2);
    } else if (p2Score == 67) {
      goto(p2Score, 54, 2);
    } else if (p2Score == 83) {
      goto(p2Score, 62, 2);
    } else if (p2Score == 87) {
      goto(p2Score, 69, 2);
    } else if (p2Score == 5) {
      goto(p2Score, 9, 2);
    } else if (p2Score == 15) {
      goto(p2Score, 25, 2);
    } else if (p2Score == 18) {
      goto(p2Score, 80, 2);
    } else if (p2Score == 44) {
      goto(p2Score, 86, 2);
    } else if (p2Score == 47) {
      goto(p2Score, 68, 2);
    } else if (p2Score == 63) {
      goto(p2Score, 78, 2);
    } else if (p2Score == 71) {
      goto(p2Score, 94, 2);
    } else if (p2Score == 81) {
      goto(p2Score, 98, 2);
    }

    activePlayer = 1;
  }
});

// new game button.
document.getElementById("p-a").addEventListener("click", function () {
  document.querySelector(`#on-board-${p1Score} .redPlayer`).style.opacity = "0";
  document.querySelector(`#on-board-${p2Score} .yellowPlayer`).style.opacity =
    "0";
  activePlayer = 1;
  p1Score = 1;
  p2Score = 1;
  p1Dice.setAttribute("src", `images/dice${p1Score}.png`);
  p2Dice.setAttribute("src", `images/dice${p2Score}.png`);
  body.classList.remove("opa");
  plBtn.classList.remove("hide");
  endTitle.classList.remove("hide");
  document.querySelector(`#on-board-${p1Score} .redPlayer`).style.opacity =
    "100";
  document.querySelector(`#on-board-${p2Score} .yellowPlayer`).style.opacity =
    "100";
  rollDice.disabled = false;
});
