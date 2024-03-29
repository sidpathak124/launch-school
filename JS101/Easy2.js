"use strict";

// Problem- 1
//-----------------------------------------------------------------------------------------------------------------------------------

// function greetings(arr, obj) {
//   return `Hello, ${arr.join(" ")}! Nice to have a ${obj.title} ${
//     obj.occupation
//   } around.`;
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.

// Problem- 2
//-----------------------------------------------------------------------------------------------------------------------------------

// const rlSync = require("readline-sync");

// console.log(`What is your name?`);
// let name = rlSync.question();

// // if (name.slice(-1) === "!") {
// //   console.log(
// //     `HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`
// //   );
// // } else {
// //   console.log(`Hello ${name}.`);
// // }

// // prettier-ignore
// name.endsWith("!")
//   ? console.log(`HELLO ${name.replace("!", "").toUpperCase()}. WHY ARE WE SCREAMING?`)
//   : console.log(`Hello ${name}.`);

// Problem- 3
//-----------------------------------------------------------------------------------------------------------------------------------

// const multiply = (a, b) => a * b;

// const multiply = function (num1, num2) {
//   if (isNaN(Number(num1)) || isNaN(Number(num2))) {
//     return `Please enter a valid number`;
//   } else {
//     return num1 * num2;
//   }
// };

// const multiply = function (...numbers) {
//   return numbers.reduce((acc, curr) => acc * curr, 1);
// };

// console.log(multiply(5, 3) === 15); // logs true
// console.log(multiply(5));
// console.log(multiply(5, 2));
// console.log(multiply(5, 4, 7, 2));

// Problem- 4
//-----------------------------------------------------------------------------------------------------------------------------------

// const multiply = (a, b) => a * b;

// const square = (num1) => multiply(num1, num1);

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// const nthPower = (num, n) => {
//   if (n === 0) return 1;
//   if (n === 1) return num;
//   if (n === 2) return multiply(num, num);
//   if (n > 2) return num * nthPower(num, n - 1);
// };

// const nthPower = (num, n) =>
//   n === 1 ? multiply(num, 1) : num * nthPower(num, n - 1);

// const nthPower = (num, n) =>
//   Array(n)
//     .fill(num)
//     .reduce((acc, n) => acc * n, 1);

// // console.log(nthPower(4, 0));
// console.log(nthPower(4, 1));
// console.log(nthPower(4, 2));
// console.log(nthPower(4, 3));
// console.log(nthPower(4, 4));
// console.log(nthPower(4, 5));

// Problem- 5
//-----------------------------------------------------------------------------------------------------------------------------------

// const rlSync = require("readline-sync");
// console.log(`Enter the first number: `);
// const num1 = rlSync.questionInt();
// console.log(`Enter the second number: `);
// const num2 = rlSync.questionInt();

// // console.log(`${num1} + ${num2} = ${num1 + num2}`);
// // console.log(`${num1} - ${num2} = ${num1 - num2}`);
// // console.log(`${num1} * ${num2} = ${num1 * num2}`);
// // if (num2 !== 0) console.log(`${num1} / ${num2} = ${num1 / num2}`);
// // console.log(`${num1} % ${num2} = ${num1 % num2}`);
// // console.log(`${num1} ** ${num2} = ${num1 ** num2}`);

// const OPERATIONS = {
//   "+": (num1, num2) => num1 + num2,
//   "-": (num1, num2) => num1 - num2,
//   "*": (num1, num2) => num1 * num2,
//   "/": (num1, num2) => num1 / num2,
//   "%": (num1, num2) => num1 % num2,
//   "**": (num1, num2) => num1 ** num2,
// };

// if (num2 === 0) {
//   delete OPERATIONS["/"];
//   delete OPERATIONS["%"];
//   console.log(
//     'Since Anything divide by 0 is undefined, removing "/" and "%" operators'
//   );
// }

// Object.keys(OPERATIONS).forEach((operator) =>
//   console.log(
//     `${num1} ${operator} ${num2} = ${OPERATIONS[operator](num1, num2)}`
//   )
// );

// Problem- 6
//-----------------------------------------------------------------------------------------------------------------------------------

// const penultimate = function (str) {
//   const arr = str.split(" ");
//   if (arr.length >= 2) {
//     return arr[arr.length - 2]; // return the 2nd last word in the array
//   } else {
//     return `String is too short for this.`;
//   }
// };
// // console.log(penultimate("last word") === "last"); // logs true
// // console.log(penultimate("Launch School is great!") === "is"); // logs true

// const medular = function (str) {
//   const arr = str.split(" ");

//   if (str === "" || arr.length === 2) {
//     // If the string is empty or has only 2 words
//     return `The string has no middle`;
//   }
//   // If str length is even, then return the element to the left of middle
//   const middle = Math.ceil(arr.length / 2 - 1);
//   return arr[middle];
// };

// console.log(medular("last")); // last
// console.log(medular("")); // The string has no middle
// console.log(medular("last word")); // The string has no middle
// console.log(medular("The last to last word")); // to
// console.log(medular("Absolutely the last to last word")); // last

// Problem- 7
//-----------------------------------------------------------------------------------------------------------------------------------

// const xor = function (a, b) {
//   return (a || b) && !(a && b);
// };

// console.log(xor(5, 0) === true); // true
// console.log(xor(false, true) === true); // true
// console.log(xor(1, 0) === true); // true
// console.log(xor(true, true) === false); // true

// Problem- 8
//-----------------------------------------------------------------------------------------------------------------------------------

// // Solution 1: Using simple for loop
// function oddities(arr) {
//   const new_arr = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     new_arr.push(arr[i]);
//   }
//   return new_arr;
// }

// // Solution 2: Using method indexOf
// function oddities(arr) {
//   return arr.filter((ele) => arr.indexOf(ele) % 2 === 0);
// }

// // Solution 3: Using the index argument in filter function
// function oddities(arr) {
//   return arr.filter((_, i) => i % 2 === 0);
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// Problem- 9
//-----------------------------------------------------------------------------------------------------------------------------------

// function randomBetween(min, max) {
//   if (min > max) {
//     const temp = min;
//     min = max;
//     max = temp;
//   }
//   const age = Math.round(Math.random() * (max - min)) + min;
//   console.log(`Teddy is ${age} years old!`);
// }

// for (let i = 0; i < 100; i++) {
//   randomBetween(27, 20);
// }

// Problem- 10
//-----------------------------------------------------------------------------------------------------------------------------------

// const rlSync = require("readline-sync");
// let age = parseInt(rlSync.question(`What is your age?`));
// while (Number.isNaN(age) || age < 15) {
//   age = parseInt(
//     rlSync.question(
//       `Please enter a Positive number higher than 14 \nWhat is your age?`
//     )
//   );
// }

// let retirementAge = parseInt(
//   rlSync.question(`At what age would you like to retire?`)
// );

// while (Number.isNaN(retirementAge) || retirementAge < 15) {
//   retirementAge = parseInt(
//     rlSync.question(`Please enter a Positive number less than 80
//   At what age would you like to retire?`)
//   );
// }

// const now = new Date();
// const currYear = now.getFullYear();

// const workingYears = retirementAge - age;
// const retirementYear = currYear + workingYears;
// console.log(`It's ${currYear}. You will retire in ${retirementYear}`);
// console.log(`You have ${workingYears} years of work to go!`);

// Problem- 11
//-----------------------------------------------------------------------------------------------------------------------------------

// function centerOf(str) {
//   const centre = Math.floor(str.length / 2);
//   if (str.length % 2 === 0) {
//     const twoMiddleChars = str.slice(centre - 1, centre + 1);
//     console.log(twoMiddleChars);
//   } else {
//     console.log(str[centre]);
//   }
// }

// centerOf("I Love JavaScript"); // "a"
// centerOf("Launch School"); // " "
// centerOf("Launch"); // "un"
// centerOf("Launchschool"); // "hs"
// centerOf("x"); // "x"

// Problem- 12
//-----------------------------------------------------------------------------------------------------------------------------------

// function negative(num) {
//   num < 0 ? num : -num;
// }

// negative(5); // -5
// negative(-3); // -3
// negative(0); // -0
