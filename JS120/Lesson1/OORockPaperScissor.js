"use strict";

let rlSync = require("readline-sync");

function createPlayer() {
  return {
    score: 0,
    move: null,
    moveHistory: [],
    wins: [],
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    move: null,

    choose() {
      const choices = ["rock", "paper", "scissors", "lizard", "spock"];
      let randomIdx = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIdx];
      this.moveHistory.push(this.move);
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    move: null,

    choose() {
      let playerChoice;
      while (true) {
        playerChoice = rlSync.question(
          "Choose one option: (r)ock, (p)aper, (s)cissors, (z)lizard, (x)spock: \n"
        );
        playerChoice = playerChoice.toLowerCase().trim();
        if (["r", "p", "s", "z", "x"].includes(playerChoice)) break;
        console.log(`${playerChoice} is not a valid choice.`);
      }
      this.move = this.letterToWord(playerChoice);
      this.moveHistory.push(this.move);
    },

    letterToWord(playerChoice) {
      switch (playerChoice) {
        case "r":
          return "rock";
        case "p":
          return "paper";
        case "s":
          return "scissors";
        case "z":
          return "lizard";
        case "x":
          return "spock";
      }
    },
  };
  return Object.assign(playerObject, humanObject);
}

// Engine object to orchestrate the procedural flow of the program:

const RPSGame = {
  human: createHuman(),
  player: createComputer(),

  compare(humanMove, computerMove) {
    let WINNING_COMBOS = {
      rock: ["scissors", "lizard"],
      paper: ["rock", "spock"],
      scissors: ["paper", "lizard"],
      lizard: ["spock", "paper"],
      spock: ["rock", "scissors"],
    };
    let msg;
    if (humanMove === computerMove) {
      msg = `It's a tie.`;
      this.human.wins.push(msg);
      console.log(msg);
    } else if (WINNING_COMBOS[humanMove].includes(computerMove)) {
      this.human.score++;
      msg = `You Won!!`;
      this.human.wins.push(msg);
      console.log(msg);
    } else {
      this.player.score++;
      msg = `Computer Won.`;
      this.human.wins.push(msg);
      console.log(`msg`);
    }
  },

  displayScore() {
    console.log(
      `\nTotal Score: You: ${this.human.score}, Computer: ${this.player.score}\n`
    );
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.player.move;

    console.log(`You chose: ${humanMove}`);
    console.log(`The computer chose: ${computerMove}`);
    this.compare(humanMove, computerMove);
    this.displayScore();
  },

  displayWelcomeMessage() {
    console.log(`Welcome to Rock, Paper, Scissors`);
    this.displayScore();
  },

  askQuestion(question) {
    let ans = rlSync.question(`${question} \n`);
    ans = ans.trim().toLowerCase()[0];
    return ans === "y";
  },

  playAgain() {
    return this.askQuestion(`Would you like to play another game? y/n`);
  },

  fastestFive() {
    return this.askQuestion(`Would you like to play fastest five? y/n`);
  },

  scoreReachedFive() {
    return this.human.score >= 5 || this.player.score >= 5;
  },

  play() {
    console.clear();
    this.displayWelcomeMessage();
    let playSeries = this.fastestFive();

    while (true) {
      this.human.choose();
      this.player.choose();
      if (playSeries || this.scoreReachedFive()) {
        console.log(``);
      }
      this.displayWinner();
      if (!this.playAgain()) break;
      console.clear();
    }
    this.displayGoodbyeMessage();
    this.displayMoveHistory();
  },

  displayMoveHistory() {
    this.human.moveHistory.forEach((hMove, i) => {
      let cMove = this.player.moveHistory[i];
      let res = this.human.wins[i];
      console.log(
        `Round: ${i + 1} Your Move: ${hMove.padStart(
          8,
          " "
        )}, Computer Move: ${cMove.padStart(8, " ")}, result: ${res}`
      );
    });
  },

  displayGoodbyeMessage() {
    console.log(`Thank You for playing Rock, Paper, Scissors. Goodbye!`);
  },
};

RPSGame.play();
