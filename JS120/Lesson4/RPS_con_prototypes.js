"use strict";

let readline = require("readline-sync");

function RPSgame() {
  this.human = new Human();
  this.computer = new Computer();
}

RPSgame.prototype.displayWelcomeMessage = function () {
  console.log("Welcome to Rock, Paper, Scissors!");
};

RPSgame.prototype.displayGoodbyeMessage = function () {
  console.log("Thanks for playing Rock, Paper, Scissors. Goodbye!");
};

RPSgame.prototype.displayWinner = function () {
  console.log(`You chose: ${this.human.move}`);
  console.log(`The computer chose: ${this.computer.move}`);

  let humanMove = this.human.move;
  let computerMove = this.computer.move;

  if (
    (humanMove === "rock" && computerMove === "scissors") ||
    (humanMove === "paper" && computerMove === "rock") ||
    (humanMove === "scissors" && computerMove === "paper")
  ) {
    console.log("You win!");
  } else if (
    (humanMove === "rock" && computerMove === "paper") ||
    (humanMove === "paper" && computerMove === "scissors") ||
    (humanMove === "scissors" && computerMove === "rock")
  ) {
    console.log("Computer wins!");
  } else {
    console.log("It's a tie");
  }
};

RPSgame.prototype.playAgain = function () {
  console.log("Would you like to play again? (y/n)");
  let answer = readline.question();
  return answer.toLowerCase()[0] === "y";
};

RPSgame.prototype.play = function () {
  this.displayWelcomeMessage();
  while (true) {
    this.human.choose();
    this.computer.choose();
    this.displayWinner();
    if (!this.playAgain()) break;
  }

  this.displayGoodbyeMessage();
};

function Player() {
  this.move = null;
}

function Human() {
  Player.call(this);
}

Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

Human.prototype.choose = function () {
  let choice;

  while (true) {
    console.log("Please choose rock, paper, or scissors:");
    choice = readline.question();
    if (["rock", "paper", "scissors"].includes(choice)) break;
    console.log("Sorry, invalid choice.");
  }

  this.move = choice;
};

function Computer() {
  Player.call(this);
}

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.choose = function () {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  this.move = choices[randomIndex];
};

let game = new RPSgame();
game.play();
