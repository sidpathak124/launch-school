"use strict";

// // 1-------------------------------------------------------------------------------

// let advice =
//   "Few things in life are as important as house training your pet dinosaur importantly.";

// console.log(advice.replaceAll("important", "urgent"));

// // 2-------------------------------------------------------------------------------

// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers);

// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers);

// numbers = [1, 2, 3, 4, 5];
// const reversedNumbers = [];
// numbers.forEach((num) => {
//   reversedNumbers.unshift(num);
// });
// console.log(reversedNumbers);

// // 3-------------------------------------------------------------------------------

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8; // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// // 4-------------------------------------------------------------------------------

// let famousWords = "seven years ago...";

// const firstHalf = `Four score and `;

// console.log(firstHalf.concat(famousWords));

// console.log(firstHalf + famousWords);

// // 5-------------------------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5];

// numbers.splice(2, 1);
// console.log(numbers);

// // 6-------------------------------------------------------------------------------

// let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// console.log(flintstones.slice(0, 2).concat(flintstones[2], flintstones[3]));

// console.log([].concat(...flintstones));

// const merged = flintstones.reduce((acc, element) => {
//   return acc.concat(element);
// }, []);
// console.log(merged);

// console.log(flintstones.flat());

// // 7-------------------------------------------------------------------------------

// let flintstones = {
//   Fred: 0,
//   Wilma: 1,
//   Barney: 2,
//   Betty: 3,
//   Bambam: 4,
//   Pebbles: 5,
// };

// console.log(
//   Object.entries(flintstones)
//     .filter((arr) => arr[0] === "Barney")
//     .shift()
// );

// // 8-------------------------------------------------------------------------------

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// // 9-------------------------------------------------------------------------------

// let title = "Flintstone Family Members";
// const totalLength = 40;

// function displayCenteredStr(str) {
//   const padding = Math.floor((totalLength - title.length) / 2);
//   const finalStr = str.padStart(padding + title.length, " ");
//   console.log(finalStr);
//   console.log(finalStr.length);
// }

// displayCenteredStr(title);
// console.log(title.length);

// // 10-------------------------------------------------------------------------------

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split("").filter((char) => char === "t").length);
console.log(statement2.split("").filter((char) => char === "t").length);
