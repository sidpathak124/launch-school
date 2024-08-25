"use strict";

const INITIAL_MARKER = ` `;
const PLAYER_MARKER = `X`;
const COMPUTER_MARKER = `O`;
let rlsync = require("readline-sync");
let [playerWins, computerWins, totalMatches] = [0, 0, 0];
let winningLines = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function findAtRiskSquare(line, board, marker = PLAYER_MARKER) {
  let markersInLine = line.map((square) => board[square]);

  if (markersInLine.filter((square) => square === marker).length === 2) {
    let unusedSquare = line.find((square) => board[square] === INITIAL_MARKER);

    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
}

let board = initializeBoard();
console.log(findAtRiskSquare([1, 2, 3], board));

function prompt(str) {
  console.log(`=> ` + str);
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${PLAYER_MARKER}. Computer is ${COMPUTER_MARKER}`);
  prompt(
    `Player Wins = ${playerWins}. Computer Wins = ${computerWins}. \nTotal Matches played = ${totalMatches}`
  );

  console.log(``);
  console.log(`     |     |`);
  console.log(`  ${board[1]}  |  ${board[2]}  |  ${board[3]}`);
  console.log(`     |     |`);
  console.log(`-----+-----+-----`);
  console.log(`     |     |`);
  console.log(`  ${board[4]}  |  ${board[5]}  |  ${board[6]}`);
  console.log(`     |     |`);
  console.log(`-----+-----+-----`);
  console.log(`     |     |`);
  console.log(`  ${board[7]}  |  ${board[8]}  |  ${board[9]}`);
  console.log(`     |     |`);
  console.log(``);
}

function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a Square(${joinOr(emptySquares(board))})}): `);
    square = rlsync.question().trim();
    if (emptySquares(board).includes(square)) break;
    prompt(`Sorry, but that's not a valid choice.`);
  }
  board[square] = PLAYER_MARKER;

  return board;
}

function computerChoosesSquare(board) {
  let square;
  for (let index = 0; index < winningLines.length; index++) {
    let line = winningLines[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER); // finding an opportunity
    if (square) break;

    square = findAtRiskSquare(line, board); // finding a threat
    if (square) break;
  }

  if (!square) {
    let keyPosition = 5;
    if (board[keyPosition] === INITIAL_MARKER) {
      square = keyPosition;
    } else {
      let randomSquare = Math.floor(Math.random() * emptySquares(board).length);
      square = emptySquares(board)[randomSquare];
    }
  }
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let playerWins = winningLines.some((arr) => {
    return arr.every((num) => board[num] === PLAYER_MARKER);
  });
  let computerWins = winningLines.some((arr) => {
    return arr.every((num) => board[num] === COMPUTER_MARKER);
  });

  if (playerWins) return `Player`;
  if (computerWins) return `Computer`;
}

function playAnotherGame() {
  while (true) {
    prompt(
      `Would you like to play another game? \n Press 'y' for Yes, press 'n' for No`
    );
    let anotherGame = rlsync.question().trim().toLowerCase();

    if (anotherGame === "y" || anotherGame === "n") return anotherGame;
    prompt(`Please press the appropriate key`);
  }
}

function joinOr(arr, separater = ", ", conjunction = "or") {
  if (arr.length === 0) return "";
  if (arr.length === 1) return String(arr[0]);
  if (arr.length === 2) return arr[0] + ` ${conjunction} ` + arr[1];
  let strWithConjunction =
    arr.slice(0, -1).join(separater) + ` ${conjunction} ` + arr.slice(-1);
  return strWithConjunction;
}

function updateScoreBoard(winner) {
  if (winner === "Player") {
    playerWins++;
  } else {
    computerWins++;
  }
}

// function chooseSquare(board) {
//   if (totalMatches % 2 === 0) {
//     computerChoosesSquare(board);
//     displayBoard(board);
//   }
// }

while (true) {
  let board = initializeBoard();
  while (true) {
    displayBoard(board);
    if (totalMatches % 2 === 0) {
      computerChoosesSquare(board);
      if (boardFull(board) || someoneWon(board)) break;
      displayBoard(board);
      playerChoosesSquare(board);
      if (boardFull(board) || someoneWon(board)) break;
    } else {
      playerChoosesSquare(board);
      if (boardFull(board) || someoneWon(board)) break;
      computerChoosesSquare(board);
      if (boardFull(board) || someoneWon(board)) break;
    }
  }
  totalMatches++;
  displayBoard(board);

  if (someoneWon(board)) {
    let winner = detectWinner(board);
    updateScoreBoard(winner);
    displayBoard(board);
    prompt(`${winner} Won!`);
  } else {
    prompt(`It's a Tie!`);
  }
  if (playAnotherGame() !== "y") break;
}
prompt(`Thanks for playing Tic-Tac-Toe!`);
