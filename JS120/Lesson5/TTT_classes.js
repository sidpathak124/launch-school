"use strict";

let readline = require("readline-sync");

class Square {
  static UNUSED_MARKER = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_MARKER) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_MARKER;
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter++) {
      this.squares[counter] = new Square();
    }
  }

  display() {
    let gridBorder = "-".repeat(5);
    console.log(``);
    console.log(`     |     |`);
    console.log(
      `  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}  `
    );
    console.log(`     |     |`);
    console.log(`${gridBorder}+${gridBorder}+${gridBorder}`);
    console.log(`     |     |`);
    console.log(
      `  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}  `
    );
    console.log(`     |     |`);
    console.log(`${gridBorder}+${gridBorder}+${gridBorder}`);
    console.log(`     |     |`);
    console.log(
      `  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}  `
    );
    console.log(`     |     |`);
    console.log(``);
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter((key) => this.isUnusedSquare(key));
  }

  isUnusedSquare(key) {
    return this.squares[key].isUnused();
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(
      (key) => this.squares[key].getMarker() === player.getMarker()
    );

    return markers.length;
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  mark() {}
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  static POSSIBLE_WINNING_ROWS = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
  ];
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  resetGame() {
    this.board = new Board();
    this.board.displayWithClear();
  }

  play() {
    this.displayWelcomeMessage();
    this.board.display();

    while (true) {
      while (true) {
        this.humanMoves();
        if (this.gameOver()) break;

        this.computerMoves();
        if (this.gameOver()) break;

        this.board.displayWithClear();
      }
      this.board.displayWithClear();
      this.displayResults();
      if (this.playAgain() === "y") {
        this.resetGame();
      } else break;
    }

    this.displayGoodbyeMessage();
  }

  playAgain() {
    while (true) {
      let playAgain = readline.question(
        `Would you like to play another game? ("y" or "n"): `
      );
      let ans = playAgain.trim();
      if (ans === "y" || ans === "n") {
        return ans;
      } else {
        console.log(`That's not a valid answer!`);
      }
    }
  }

  displayWelcomeMessage() {
    console.log(`Welcome to Tic Tac Toe!`);
  }

  displayGoodbyeMessage() {
    console.log(`Thanks for playing Tic Tac Toe! Goodbye!`);
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log(`You Won! Congratulations!`);
    } else if (this.isWinner(this.computer)) {
      console.log(`I won! I won! take that, human!`);
    } else {
      console.log(`A Tie Game! How Boring.`);
    }
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some((key) => {
      return this.board.countMarkersFor(player, key) === 3;
    });
  }

  static #joinOr(validChoices, seperator = ", ", conjunction = "or") {
    let seperatedChoices = validChoices.slice(0, validChoices.length - 1);
    let lastChoice = validChoices.slice(validChoices.length - 1);
    let numChoice = validChoices.length;
    if (numChoice === 1) {
      return `${lastChoice}`;
    } else if (numChoice == 2) {
      return `${validChoices.join(seperator)}`;
    } else {
      return `${seperatedChoices.join(seperator)} ${conjunction} ${lastChoice}`;
    }
  }

  humanMoves() {
    let choice;
    while (true) {
      let validChoices = this.board.unusedSquares();
      choice = readline.question(
        `Please choose a square ${TTTGame.#joinOr(validChoices)}: `
      );

      if (validChoices.includes(choice)) break;

      console.log(`Sorry, that's not a valid choice!`);
      console.log(``);
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let choice = this.computerAIDefense();
    if (!choice) {
      let validChoices = this.board.unusedSquares();
      let len = validChoices.length;
      if (len > 0) {
        choice = validChoices[Math.floor(Math.random() * len).toString()];
      } else return;
    }

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  computerAIDefense() {
    for (const row of TTTGame.POSSIBLE_WINNING_ROWS) {
      if (this.board.countMarkersFor(this.human, row) === 2) {
        let emptyKeyIndex = row.findIndex((key) =>
          this.board.isUnusedSquare(key)
        );
        if (emptyKeyIndex >= 0) return row[emptyKeyIndex];
      }
    }
    return null;
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }
}

let game = new TTTGame();
game.play();

// let sqs = { 1: new Square() };
// console.log(sqs["1"].toString());
// console.log(new Square());
