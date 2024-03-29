"use strict";

//Problem-4
//-------------------------------------------------------------------------------------------------------------------------------------

// const length = Number(prompt(`Enter the length of the room in meters`));
// const breadth = Number(prompt(`Enter the breadth of the room in meters`));

// console.log(
//   `The area of room is ${length * breadth} square meters (${(
//     length *
//     breadth *
//     10.7639
//   ).toFixed(2)} square feet)`
// );

// const rlSync = require("readline-sync");
// // Input Conversions
// const SQMETERS_TO_SQFEET = 10.7639;
// const SQFEET_TO_SQMETERS = 1 / SQMETERS_TO_SQFEET;

// // Prompt user for unit choice
// const units = ["meters", "feet"];
// console.log(`Enter 0 for meters as unit \nEnter 1 for feet as unit `);
// let idx = rlSync.prompt();
// idx = parseInt(idx);

// // Prompt user for length
// console.log(`Enter the length of the room in ${units[idx]}`);
// let length = rlSync.prompt();
// length = parseInt(length, 10);

// // Prompt user for breadth
// console.log(`Enter the breadth of the room in ${units[idx]}`);
// let breadth = rlSync.prompt();
// breadth = parseInt(breadth, 10);

// // Area calculation in the unit chosen (without conversion)
// const area = length * breadth;

// if (idx === 0) {
//   // If meters was chosen as unit
//   console.log(
//     `The area of the room is ${area} square meters (${(
//       area * SQMETERS_TO_SQFEET
//     ).toFixed(2)} square feet)`
//   );
// } else {
//   console.log(
//     // If feet was chosen as unit
//     `The area of the room is ${area} square feet (${(
//       area * SQFEET_TO_SQMETERS
//     ).toFixed(2)} square meters)`
//   );
// }

//Problem-5
//-------------------------------------------------------------------------------------------------------------------------------------

// const rlSync = require("readline-sync");

// console.log(`What is the bill?`);
// const bill = rlSync.questionFloat();

// console.log(`What is the tip percentage?`);
// const tipPerc = rlSync.questionFloat();

// const totalTip = Number(((bill * tipPerc) / 100).toFixed(2));
// console.log(`The tip is ${totalTip}`);

// const totalBill = bill + totalTip;
// console.log(`The total is ${totalBill}`);

//Problem-6
//-------------------------------------------------------------------------------------------------------------------------------------

// function sumAll(num) {
//   let total = 0;
//   for (let i = 1; i <= num; i++) {
//     total += i;
//   }
//   return total;
// }

// function productAll(num) {
//   let product = 1;
//   for (let i = 1; i <= num; i++) {
//     product *= i;
//   }
//   return product;
// }

// const rlSync = require("readline-sync");
// console.log(`Please enter an integer greater than 0: `);
// const num = rlSync.questionInt();

// console.log(`Enter "s" to compute the sum or "p" to compute the product`);
// const operator = rlSync.question();

// if (operator === "s") {
//   console.log(`The sum of the integers between 1 and ${num} is ${sumAll(num)}`);
// } else if (operator === "p") {
//   console.log(
//     `The product of the integers between 1 and ${num} is ${productAll(num)}`
//   );
// } else {
//   console.log(`Oops! Unknown operation`);
// }

//Problem-6
//-------------------------------------------------------------------------------------------------------------------------------------

// Soln 1
// function shortLongShort(str1, str2) {
//   if (str1.length <= str2.length) {
//     return str1 + str2 + str1;
//   } else {
//     return str2 + str1 + str2;
//   }
// }

// Soln 2
// function shortLongShort(str1, str2) {
//   [str1, str2] = [str1, str2].sort((a, b) => a.length - b.length);
//   return str1 + str2 + str1;
// }

// console.log(shortLongShort("abc", "defgh"));
// console.log(shortLongShort("abcde", "fgh"));
// console.log(shortLongShort("", "xyz"));

//Problem-7
//-------------------------------------------------------------------------------------------------------------------------------------

// function isLeapYear(year) {
//   console.log(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
// }

// function isLeapYear(year) {
//   if (year % 100 === 0) {
//     console.log(false);
//   } else if (year % 400 === 0) {
//     console.log(true);
//   } else {
//     console.log(year % 4 === 0);
//   }
// }

// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         console.log(true);
//       }
//       console.log(false);
//     }
//     console.log(true);
//   }
//   console.log(false);
// }

// isLeapYear(2016); // true
// isLeapYear(2015); // false
// isLeapYear(2100); // false
// isLeapYear(2400); // true
// isLeapYear(240000); // true
// isLeapYear(240001); // false
// isLeapYear(2000); // true
// isLeapYear(1900); // false
// isLeapYear(1752); // true
// isLeapYear(1700); // false
// isLeapYear(1); // false
// isLeapYear(100); // false
// isLeapYear(400); // true

//Problem-8
//-------------------------------------------------------------------------------------------------------------------------------------

// function isLeapYear(year) {
//   if (year < 1752 && year % 4 === 0) {
//     console.log(true);
//   } else if (year % 400 === 0) {
//     console.log(true);
//   } else if (year % 100 === 0) {
//     console.log(false);
//   } else {
//     console.log(year % 4 === 0);
//   }
// }

// isLeapYear(2016); // true
// isLeapYear(2015); // false
// isLeapYear(2100); // false
// isLeapYear(2400); // true
// isLeapYear(240000); // true
// isLeapYear(240001); // false
// isLeapYear(2000); // true
// isLeapYear(1900); // false
// isLeapYear(1752); // true
// isLeapYear(1700); // true
// isLeapYear(1); // false
// isLeapYear(100); // true
// isLeapYear(400); // true

//Problem-10
//-------------------------------------------------------------------------------------------------------------------------------------

// function isMultiple(number, divisor) {
//   return number % divisor === 0;
// }

// function multiSum(num) {
//   let total = 0;

//   for (let i = 0; i <= num; i++) {
//     if (isMultiple(i, 3) || isMultiple(i, 5)) {
//       total += i;
//     }
//   }
//   return total;
// }

// function multiSum(num) {
//   return Array.from({ length: num }, (_, i) => i + 1)
//     .filter((num) => num % 3 === 0 || num % 5 === 0)
//     .reduce((acc, num) => acc + num);
// }

// console.log(multiSum(3));
// console.log(multiSum(5));
// console.log(multiSum(10));
// console.log(multiSum(1000));

//Problem-11
//-------------------------------------------------------------------------------------------------------------------------------------

// function utf16Value(str) {
//   let total = 0;
//   for (let i = 0; i < str.length; i++) {
//     total += str.charCodeAt(i);
//   }
//   return total;
// }

function utf16Value(str) {
  return [...str].reduce((acc, curr) => acc + curr.charCodeAt(0), 0);
}

console.log(utf16Value("Four score"));
console.log(utf16Value("Launch School"));
console.log(utf16Value("a"));
console.log(utf16Value(""));

const OMEGA = "\u03A9";
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));

// ```JavaScript
// # highlight

// # endhighlight
// ```
