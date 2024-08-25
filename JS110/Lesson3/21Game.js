"use strict";
/*
1. Initiate an empty deck (52 cards: 13 sets of hearts, diamonds, spades and clubs each)
  Also associate each card with its appropriate value (2 to 10 has face value, 
  jack, queen and king are all 10, Ace = 1 or 11 depending on situation)
2. randomly select 4 cards
  2 cards given to player (both can be seen)
  2 cards given to dealer (only 1 can be seen)
3. Player turn (always 1st): can decide to hit or stay
  hit = player dealt another card (randomly). If > 21 then bust (Dealer Wins!)
  stay = player turn ends
4. Dealer turn
  hit unit the total is at least 17, if > 21 then bust (Player Wins!)
  Stay = dealer turn ends
5. Compare the values of player and dealer and declare the winner
*/
let rlsync = require("readline-sync");
let MAX_TOTAL = 21;
let DEALER_MIN_SUM = 17;

function prompt(str) {
  console.log(`=> ${str}`);
}

function initializeDeck() {
  let suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  let ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];
  let deck = [];
  suits.forEach((suit) => {
    ranks.forEach((rank) => {
      deck.push([suit, rank]);
    });
  });

  return shuffle(deck);
}

function shuffle(array) {
  // Using Fister-Yates shuffle
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));

    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }

  return array;
}

function total(cards) {
  let values = cards.map((card) => card[1]);

  let total = 0;
  values.forEach((value) => {
    if (value === "Ace") {
      total += 11;
    } else if (["Jack", "Queen", "King"].includes(value)) {
      total += 10;
    } else {
      total += Number(value);
    }
  });

  // Correction for Aces
  values
    .filter((value) => value === "Ace")
    .forEach((Ace) => {
      if (total > MAX_TOTAL) total -= 10;
    });

  return total;
}

function busted(cards) {
  return total(cards) > MAX_TOTAL;
}

function playerTurn(playerCards, deck) {
  while (true) {
    let playerAns;
    while (true) {
      prompt(`Would you like to (h)it or (s)tay ?`);
      playerAns = rlsync.question().toLowerCase().trim()[0];
      if (["h", "s"].includes(playerAns)) break;
      prompt(`Sorry, must enter 'h' or 's'`);
    }

    if (playerAns === "h") {
      console.clear();
      playerCards.push(deck.pop());
      prompt(`You chose to hit !`);
      displayPlayerCards(playerCards);
    }
    if (playerAns === "s" || busted(playerCards)) break;
  }
}

function cardDisplay(cards) {
  return cards.map((card) => `${card[1]} of ${card[0]}`).join(", ");
}

function dealerTurn(dealerCards, deck) {
  if (total(dealerCards) >= DEALER_MIN_SUM) {
    displayDealerCards(dealerCards);
  }
  while (total(dealerCards) < DEALER_MIN_SUM) {
    prompt(`Dealer hits`);
    dealerCards.push(deck.pop());
    displayDealerCards(dealerCards);
  }
}

function display1DealerCard(dealerCards) {
  prompt(`Dealer cards: ${cardDisplay(dealerCards.slice(0, 1))}, ?. Total = ?`);
}

function displayPlayerCards(playerCards) {
  prompt(
    `Player cards: ${cardDisplay(playerCards)}. Total = ${total(playerCards)}.`
  );
}

function displayDealerCards(dealerCards) {
  prompt(
    `Dealer cards: ${cardDisplay(dealerCards)}. Total = ${total(dealerCards)}.`
  );
}

function compareCards(playerCards, dealerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);
  if (busted(playerCards)) {
    return "PLAYER_BUSTED";
  } else if (busted(dealerCards)) {
    return "DEALER_BUSTED";
  }
  if (playerTotal > dealerTotal) {
    return "PLAYER";
  } else if (playerTotal < dealerTotal) {
    return "DEALER";
  } else {
    return "DRAW";
  }
}

function displayResult(playerCards, dealerCards) {
  switch (compareCards(playerCards, dealerCards)) {
    case "PLAYER_BUSTED":
      prompt("Player got busted.");
      prompt("Dealer Won !!");
      break;
    case "DEALER_BUSTED":
      prompt("Dealer got busted.");
      prompt("Player Won !!");
      break;
    case "PLAYER":
      prompt("Player won the game!");
      break;
    case "DEALER":
      prompt("Dealer won the game!");
      break;
    default:
      prompt(`It's a Draw!`);
  }
}

function pick2Cards(deck) {
  return [deck.pop(), deck.pop()];
}

function playAgain() {
  let ans;
  while (true) {
    prompt(`Play another game? Press (y)es or (n)o`);
    ans = rlsync.question().trim().toLowerCase()[0];
    if (["y", "n"].includes(ans)) break;
    prompt(`Invalid entry! Please press (y)es or (n)o`);
  }
  return ans;
}

while (true) {
  console.clear();
  let deck = initializeDeck();

  let playerCards = pick2Cards(deck);
  let dealerCards = pick2Cards(deck);

  display1DealerCard(dealerCards);
  displayPlayerCards(playerCards);

  playerTurn(playerCards, deck);

  if (!busted(playerCards)) {
    prompt(`You decided to stay`);
    prompt("Dealer turn...");
    dealerTurn(dealerCards, deck);
  }
  displayResult(playerCards, dealerCards);

  if (playAgain() === "n") break;
}
