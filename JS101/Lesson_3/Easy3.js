"use strict";

// // 1-------------------------------------------------------------------------------

// let numbers = [1, 2, 3, 4];

// numbers.length = 0;
// console.log(numbers);

// numbers.splice(0, 2);
// console.log(numbers.length);

// while (numbers.length) {
//   numbers.pop();
// }
// console.log(numbers);

// console.log(numbers.filter((num) => num === 0));

// // 5-------------------------------------------------------------------------------

// function isColorValid(color) {
//   return color === "blue" || color === "green";
// }

function isColorValid(color) {
  const validColors = ["blue", "green"];
  return validColors.includes(color);
}

console.log(isColorValid("yellow"));
console.log(isColorValid("blue"));
