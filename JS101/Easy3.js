"use strict";

//Problem-1
//-------------------------------------------------------------------------------------------------------------------------------------

// // function crunch(str) {
// //   let newStr = "";

// //   for (let i = 0; i < str.length; i++) {
// //     if (str[i] !== str[i + 1]) {
// //       newStr += str[i];
// //     }
// //   }
// //   console.log(newStr);
// // }

// // prettier-ignore
// function crunch(str) {
//   console.log(
//     str.split("")
//       .filter((char, idx) => {
//         return str[idx + 1] !== char;
//       }).join("")
//   );
// }

// crunch("ddaaiillyy ddoouubbllee"); // "daily double"
// crunch("4444abcabccba"); // "4abcabcba"
// crunch("ggggggggggggggg"); // "g"
// crunch("a"); // "a"
// crunch(""); // ""
// crunch("ddaa");

//Problem-2
//-------------------------------------------------------------------------------------------------------------------------------------

// function logInBox(str) {
//   const boundary = "+-" + `-`.repeat(str.length) + "-+";
//   const mid = `|` + ` `.repeat(str.length + 2) + `|`;
//   const center = `| ` + str + ` |`;

//   const box = [boundary, mid, center, mid, boundary];

//   box.forEach((boxPart) => console.log(boxPart));
// }

// logInBox("kuchh bhii");
// logInBox("");
// logInBox("k");

// function logInBox(str, maxLen = str.length) {
//   const len = str.length;
//   const boundary = "+-" + `-`.repeat(maxLen) + "-+";
//   const mid = `|` + ` `.repeat(maxLen + 2) + `|`;

//   console.log(boundary);
//   console.log(mid);
//   if (len > maxLen) {
//     for (let i = 0; i < len; i += maxLen) {
//       const words = str.slice(i, i + maxLen);
//       const padding = " ".repeat(maxLen - words.length);
//       console.log(`| ` + words + padding + ` |`);
//     }
//   } else {
//     console.log(`| ` + str + ` |`);
//   }
//   console.log(mid);
//   console.log(boundary);
// }

// logInBox("kuchh bhii", 3);
// logInBox("kuchh bhii", 7);
// logInBox("kuchh bhii");
// logInBox("kuu..uuchh bhii karega fooor candyman", 10);

//Problem-3
//-------------------------------------------------------------------------------------------------------------------------------------

// // Using for-loop
// function stringy(num) {
//   let binStr = '';
//   for (let i = 0; i < num; i++) {
//     binStr = (i % 2 === 0) ? binStr.concat('1') : binStr.concat('0');
//   }
//   return binStr;
// }

// // Sleek soln
// function stringy(num) {
//   return Array.from({ length: num }, (_, i) => (i % 2 === 1 ? "0" : "1")).join("");
// }

// // Sleeker soln
// const stringy = num => ''.padStart(num, '10');

// console.log(stringy(6));
// console.log(stringy(9));
// console.log(stringy(4));
// console.log(stringy(7));
// console.log(stringy(1));
// console.log(stringy(0));

//Problem-4
//-------------------------------------------------------------------------------------------------------------------------------------

// function findFibonacciIndexByLength (numLength) {
//   let idx = 1n;
//   let prev = 0n;
//   let curr = 1n;

//   while (String(curr).length < numLength) {
//     [prev, curr] = [curr, prev + curr];
//     idx += 1n;
//   }
//   console.log(idx, curr);
// }

// findFibonacciIndexByLength(1n);
// findFibonacciIndexByLength(2n);
// findFibonacciIndexByLength(3n);
// findFibonacciIndexByLength(10n);
// findFibonacciIndexByLength(16n);
// findFibonacciIndexByLength(20n);
// findFibonacciIndexByLength(30n);
// findFibonacciIndexByLength(50n);
// // findFibonacciIndexByLength(100n);
// // findFibonacciIndexByLength(500n);
// // findFibonacciIndexByLength(10000n);

//Problem-5
//-------------------------------------------------------------------------------------------------------------------------------------

// function triangle (height) {
//   for (let i = 1; i <= height; i++) {
//     console.log(' '.repeat(height-i) + '*'.repeat(i));
//   }
// }

// function triangle (height) {
//   for (let i = 1; i <= height; i++) {
//     console.log('*'.repeat(i).padStart(height));
//   }
// }

// triangle(9);

//Problem-6
//-------------------------------------------------------------------------------------------------------------------------------------

// const rlSync = require("readline-sync");
// const noun = rlSync.question("Ener a noun: ")
// const verb = rlSync.question("Ener a verb: ")
// const adjective = rlSync.question("Ener an adjective: ")
// const adverb = rlSync.question("Ener an adverb: ")

// console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
// The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.
// The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);

//Problem-7
//-------------------------------------------------------------------------------------------------------------------------------------

// function twice(num) {
//   if (isDoubleNumber(num)) {
//     console.log(num);
//   } else {

//     console.log(num * 2);
//   }
// }

// function isDoubleNumber(num) {
//   const numStr = String(num);
//   const center = Math.floor(numStr.length / 2);
//   const firstHalf = numStr.slice(0, center);
//   const secondHalf = numStr.slice(center);

//   return firstHalf === secondHalf;
// }

// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676

//Problem-8
//-------------------------------------------------------------------------------------------------------------------------------------

// function getGrade(...scores) {
//   const scoreToGrades = {
//     10: 'A', 9: 'B', 8: 'C', 7: 'D'
//   }
//   const score = scores.reduce((acc, curr) => acc + curr) / scores.length;
//   const point = Math.ceil(score / 10);
//   const grade = (point < 7) ? 'F' : scoreToGrades[point];

//   return grade;
// }

// getGrade(95, 90, 93);    // "A"
// getGrade(50, 50, 95);    // "D"
// getGrade(54, 67, 87, 91);

//Problem-9
//-------------------------------------------------------------------------------------------------------------------------------------

// function cleanUp(str) {
//   const alphabeticChars = `abcdefghijklmnopqrstuvwxyz
//   ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
//   let cleanStr = ``;
//   let numNonChars = 0;

//   for (const char of str) {

//     // If a char is not alphabetic, increase
//     // count of numNonChars by 1
//     if (!alphabeticChars.includes(char)) {
//       numNonChars += 1
//     } else {
//       // Otherwise check if 1 or more non-alpha chars
//       // have been accumulated and replace them with a single ' '
//       if (numNonChars > 0) {
//         cleanStr += ' ';
//         numNonChars = 0;   // reset back to 0
//       }
//       // add the alpha-char to cleanStr
//       cleanStr += char;
//     }
//   }
//   console.log(cleanStr);
// }

// function cleanUp(str) {
//   const cleanStr = str.replace(/[^a-z]/gi, ` `).replace(/\s+/gi, ` `);
//   console.log(cleanStr);
// }

// function cleanUp(str) {
//   let cleanStr = ``;

//   for (let i = 0; i < str.length; i++) {
//     if (isUpperCaseChar(str[i]) || isLowerCaseChar(str[i])) {
//       cleanStr += str[i];
//     } else if (i === 0 || lastCharNotSpace(cleanStr)) {
//       cleanStr += ' ';
//     }
//   }
//   console.log(cleanStr);
// }

// function isLowerCaseChar(char) {
//   return  char >= 'a' && char <= 'z';
// }

// function isUpperCaseChar(char) {
//   return  char >= 'A' && char <= 'Z';
// }

// function lastCharNotSpace(text) {
//   return text[text.length - 1] !== ' ';
// }

// cleanUp("---what's my +*& line?");    // " what s my line "

//Problem-10
//-------------------------------------------------------------------------------------------------------------------------------------

// function century (year) {
//   const suffix = {1: 'st', 2: 'nd', 3: 'rd'};

//   const century = Math.ceil(year / 100);
//   const lastTwoDigits = Number(String(century).slice(-2));
//   const lastDigit = Number(String(century).slice(-1));

//   if (lastTwoDigits > 3 && lastTwoDigits < 20) {
//     console.log(`${century}th`);
//   } else {
//     console.log(`${century}${suffix[lastDigit]}`);
//   }
// }

// century(2000);        // "20th"
// century(2001);        // "21st"
// century(1965);        // "20th"
// century(256);         // "3rd"
// century(5);           // "1st"
// century(10103);       // "102nd"
// century(1052);        // "11th"
// century(1127);        // "12th"
// century(11201);       // "113th"

function everyOther(arr) {
  const altArr = arr.filter((_, idx) => idx % 2 === 0);
  return altArr;
}

// console.log(everyOther([1, 4, 7, 2, 5])); // => [1,7,5];

function thirdIndex(str, char) {
  let occur = 0; // occurence count of char

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      occur++;
      // return index for third occurence of char
      if (occur === 3) return i;
    }
  }
  return null;
}

// console.log(thirdIndex("axbxcdxex", "x"));
// console.log(thirdIndex("axbxcdxex", "b"));

const merge = function (arr1, arr2) {
  const merged = [];

  for (let i = 0; i < arr1.length; i++) {
    merged.push(arr1[i]);
    merged.push(arr2[i]);
  }

  return merged;
};

console.log(merge([1, 2, 3], [4, 5, 6])); // => [1, 4, 2, 5, 3, 6]
