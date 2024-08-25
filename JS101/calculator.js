"use strict";

const LANGUAGE = "en";
const rlSync = require("readline-sync");
const msg = require("./calculator_messages.json");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === `` || Number.isNaN(Number(num));
}

function messages(message, lang = LANGUAGE) {
  return msg[lang][message];
}

console.log(messages("welcome"));

function askNum1() {
  prompt(messages("first"));
  let num1 = rlSync.question();

  while (invalidNumber(num1)) {
    prompt(messages("invalid"));
    prompt(messages("first"));
    num1 = rlSync.question();
  }
  return Number(num1);
}

function askNum2() {
  prompt(messages("second"));
  let num2 = rlSync.question();

  while (invalidNumber(num2)) {
    prompt(messages("invalid"));
    prompt(messages("second"));
    num2 = rlSync.question();
  }
  return Number(num2);
}

function performOperation(num1, num2) {
  let correctOperation = false;
  let output;
  let operation;

  while (!correctOperation) {
    correctOperation = true;
    prompt(messages("enter_operations"));
    operation = rlSync.question();

    switch (operation) {
      case "+":
        output = num1 + num2;
        break;
      case "-":
        output = num1 - num2;
        break;
      case "*":
        output = num1 * num2;
        break;
      case "/":
        output = num1 / num2;
        break;
      case "**":
        output = num1 ** num2;
        break;
      default:
        correctOperation = false;
        console.log(`Please enter one of the operands shown`);
    }
  }

  console.log(`${num1} ${operation} ${num2} = ${output}`);
}

let cont = true;
while (cont) {
  const num1 = askNum1();
  const num2 = askNum2();
  performOperation(num1, num2);

  prompt(messages("another_calculation"));

  cont = rlSync.question() === "y";
}
