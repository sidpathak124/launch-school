"use strict";

// // 1-------------------------------------------------------------------------------

// const artStr = "The Flintstones Rock!";

// for (let i = 0; i < 10; i++) {
//   // console.log(artStr.padStart(i + artStr.length), " ");
//   console.log(" ".repeat(i) + artStr);
// }

// // 2-------------------------------------------------------------------------------

// let munstersDescription = "The Munsters are creepy and spooky.";

// function swapCase(str) {
//   let swappedStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65) {
//       swappedStr += str[i].toLowerCase();
//     } else if (str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97) {
//       swappedStr += str[i].toUpperCase();
//     } else {
//       swappedStr += str[i];
//     }
//   }
//   console.log(swappedStr);
// }

// function swapCase(str) {
//   let swappedStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       swappedStr += str[i].toLowerCase();
//     } else {
//       swappedStr += str[i].toUpperCase();
//     }
//   }
//   console.log(swappedStr);
// }
// swapCase(munstersDescription);

// // 3-------------------------------------------------------------------------------

// function factors(number) {
//   let divisor = number;
//   const factors = [];

//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor--;
//   } while (divisor !== 0);
//   return factors;
// }

// function factors(number) {
//   let divisor = number;
//   const factors = [];

//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor--;
//   }
//   return factors;
// }
// console.log(factors(20));
// console.log(factors(0));
// console.log(factors(2400));

// // ------------------------------------- HARD -------------------------------------
// // 5-------------------------------------------------------------------------------

// function isAnIpNumber(str) {
//   if (/^\d+$/.test(str)) {
//     let number = Number(str);
//     return number >= 0 && number <= 255;
//   }
//   return false;
// }

// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   if (dotSeparatedWords.length !== 4) return false;
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();

//     if (!isAnIpNumber(word)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isDotSeparatedIpAddress("192.9.2.1"));
// console.log(isDotSeparatedIpAddress("192.921.2.1"));
// console.log(isDotSeparatedIpAddress("3.5.21"));
// console.log(isDotSeparatedIpAddress("1.2.3.4.5"));
