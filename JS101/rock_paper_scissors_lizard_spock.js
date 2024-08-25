"use strict";

const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const BEST_OF = 5;
const WINNING_COMBOS = {
  rock: ["lizard", "scissors"],
  paper: ["rock", "spock"],
  scissors: ["lizard", "paper"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};
let playerScore = 0;
let computerScore = 0;

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    playerScore++;
    prompt(`You Win!`);
  } else if (choice === computerChoice) {
    prompt(`It's a Tie...`);
  } else {
    computerScore++;
    prompt(`Computer Wins!`);
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function thereIsA_FinalWinner() {
  const winsNeeded = parseInt(BEST_OF / 2, 10) + 1;

  if (playerScore >= winsNeeded) {
    prompt(`Player has won this game !!!`);
    return true;
  } else if (computerScore >= winsNeeded) {
    prompt(`Computer has won this game !!!`);
    return true;
  }
  return false;
}

function shortChoices() {
  return VALID_CHOICES.map((option) => {
    if (option === "spock") {
      return `k for ${option}`;
    }
    return `${option[0]} for ${option}`;
  }).join(", ");
}

function shortToLong(choice) {
  switch (choice) {
    case "r":
      return "rock";
    case "p":
      return "paper";
    case "s":
      return "scissors";
    case "l":
      return "lizard";
    case "k":
      return "spock";
    default:
      return choice;
  }
}

let continueGame = true;

while (continueGame) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}: `);
  prompt(`You can also write short-forms: ${shortChoices()}.`);
  let choice = readline.question();
  choice = shortToLong(choice);

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That is not a valid choice: ");
    prompt(`Choose one: ${VALID_CHOICES.join(", ")}: `);
    prompt(`You can also write short-forms: ${shortChoices()}.`);
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  const computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose: ${choice}, Computer chose: ${computerChoice}`);

  displayWinner(choice, computerChoice);

  if (thereIsA_FinalWinner()) break;

  prompt(`Would you like to play another game? (y/n):`);
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "y" && answer[0] !== "n") {
    prompt(`Please enter "y" or "n"`);
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === "n") {
    continueGame = false;
  }
}

prompt(
  `Final Score: Player Score: ${playerScore}, Computer Score: ${computerScore}`
);
