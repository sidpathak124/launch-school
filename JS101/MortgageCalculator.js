"use strict;";

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(num) {
  return num.trim === "" || Number.isNaN(Number(num)) || Number(num) < 0;
}

while (true) {
  const rlSync = require("readline-sync");

  console.log(`    Welcome to Mortgage Calculator!`);
  console.log(`-----------------------------------------`);

  prompt("How much loan do you need? Enter an amount in Canadian $: ");
  let loanAmount = rlSync.question();
  while (isInvalidNumber(loanAmount)) {
    prompt(`------Please Enter a valid number------`);
    prompt("How much loan do you need? Enter an amount in Canadian $: ");
    loanAmount = rlSync.question();
  }

  prompt(`What is the Annual Percentage Rate (APR)?`);
  prompt(`Ex: write 5 for 5% (2.5 for 2.5% etc.)`);
  let annualPercentageRate = rlSync.question();
  while (isInvalidNumber(loanAmount)) {
    prompt(`------Please Enter a valid number------`);
    prompt(`What is the Annual Percentage Rate (APR)?`);
    prompt(`Ex: write 5 for 5% (2.5 for 2.5% etc.)`);
    annualPercentageRate = rlSync.question();
  }

  prompt(
    `How much time do you need to repay the loan? \nPlease enter a number in years: `
  );
  let durationYears = rlSync.question();
  while (isInvalidNumber(loanAmount)) {
    prompt(`------Please Enter a valid number------`);
    prompt(
      `How much time do you need to repay the loan? \nPlease enter a number in years: `
    );
    durationYears = rlSync.question();
  }
  const durationMonths = parseInt(durationYears, 10) * 12;

  let monthlyInterestRate = parseFloat(annualPercentageRate / 12);
  monthlyInterestRate /= 100;

  // prettier-ignore
  const monthlyPayment = (parseInt(loanAmount, 10) * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-durationMonths)))));

  console.log(`Your monthly installment will be ${monthlyPayment.toFixed(2)}$`);

  prompt(`Would you like to do another mortgage calculation?`);
  prompt(`Press "y" for yes, press any other key to discontinue...`);

  let answer = rlSync.question().toLowerCase();
  if (answer !== "y") break;
}
