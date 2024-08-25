"strict";

// const rlSync = require("readline-sync");
// let userInputs = [];
// const numPrefix = ["th", "st", "nd", "rd", "th", "th"];

// for (let i = 1; i < 6; i++) {
//   const ip = Number(rlSync.question(`Enter the ${i}${numPrefix[i]} number: `));
//   userInputs.push(ip);
// }

// const last = Number(rlSync.question(`Enter the last number: `));

// if (userInputs.includes(last)) {
//   console.log(`The number ${last} appears in ${userInputs.join(", ")}`);
// } else {
//   console.log(`The number ${last} does not appear in ${userInputs.join(", ")}`);
// }

// function isIncluded(arr, val) {
//   return arr.some((num) => num > val);
// }

// console.log(isIncluded([23, 1, 3, 4, 26, 14], 3));

// ------------------------------------------------------------------------------------------------

// function palindrome(str) {
//   return str.split("").reverse().join("");
// }

// function isPalindrome(str) {
//   return str === palindrome(str);
// }

// function isPalindrome(str) {
//   let i = 0;
//   let j = str.length - 1;

//   while (i < j) {
//     if (str[i] !== str[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }

//   return true;
// }

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("Madam")); // true
// console.log(isPalindrome("madam i'm adam")); // true
// console.log(isPalindrome("356653")); // true

// ------------------------------------------------------------------------------------------------
function isPalindrome(str) {
  return str === [...str].reverse().join("");
}

// // Solution using regex
// function isRealPalindrome(str) {
//   let alphaNumericStr = str.toLowerCase().match(/[a-z0-9]/gi).join("");
//   return isPalindrome(alphaNumericStr);
// }

// solution without regex

// function isNumber(char) {
//   return char >= "0" && char <= "9";
// }

// function isAlphabet(char) {
//   return char >= "a" && char <= "z";
// }

// function removeNonletterNumbers(str) {
//   let alphaNumericStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (isNumber(str[i]) || isAlphabet(str[i])) {
//       alphaNumericStr += str[i];
//     }
//   }
//   return alphaNumericStr;
// }

// function isRealPalindrome(str) {
//   let alphaNumericStr = removeNonletterNumbers(str.toLowerCase());
//   return isPalindrome(alphaNumericStr);
// }

// third solution

// function isRealPalindrome(str) {
//   const alphaNumArr = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
//   const alphaNumericStr = str
//     .toLowerCase()
//     .split("")
//     .filter((ele) => alphaNumArr.includes(ele))
//     .join("");
//   return isPalindrome(alphaNumericStr);
// }

// console.log(isRealPalindrome("madam")); // true
// console.log(isRealPalindrome("Madam")); // true
// console.log(isRealPalindrome("madam i'm adam")); // true
// console.log(isRealPalindrome("356653")); // true
// console.log(isRealPalindrome("356a653")); // true
// console.log(isRealPalindrome("123ab321")); // false

// ------------------------------------------------------------------------------------------------

// function isPalindromicNumber(num) {
//   const str = num.toString(8);
//   return isPalindrome(str);
// }

// function reversedNumber(num) {
//   // without converting num to string
//   let reversed = 0;
//   while (num > 0) {
//     let last = num % 10;
//     reversed = reversed * 10 + last;
//     num = Math.trunc(num / 10);
//   }

//   return reversed;
// }

// console.log(isPalindromicNumber(34543)); // true
// console.log(isPalindromicNumber(123210)); // false
// console.log(isPalindromicNumber(22)); // true
// console.log(isPalindromicNumber(5)); // true
// console.log(isPalindromicNumber(00123)); // true
// Note: leading zeros convert decimal to octal

// ------------------------------------------------------------------------------------------------

// function runningTotal(arr) {
//   const cumArr = [];
//   let cumSum = 0;
//   arr.forEach((num) => {
//     cumSum += num;
//     cumArr.push(cumSum);
//   });

//   return cumArr;
// }

// function runningTotal(arr) {
//   const cumArr = [];
//   arr.forEach((num, i) => {
//     i === 0 ? cumArr.push(num) : cumArr.push(arr[i - 1] + num);
//   });

//   return cumArr;
// }

// Using map (further exploration)
// function runningTotal(arr) {
//   let total = 0;
//   return arr.map((num) => {
//     num += total;
//   });
// }

// function runningTotal(arr) {
//   let total = 0;
//   return arr.reduce((acc, curr) => {
//     return acc.concat((total += curr));
//   }, []);
// }

// console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
// console.log(runningTotal([3])); // [3]
// console.log(runningTotal([])); // []

// ------------------------------------------------------------------------------------------------

// function wordSizes(str) {
//   const wordCount = {};

//   if (str.trim().length === 0) {
//     console.log(wordCount);
//     return;
//   }
//   str.split(" ").forEach((s) => {
//     wordCount[s.length] = wordCount[s.length] + 1 || 1;
//   });

//   console.log(wordCount);
// }

// wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
// wordSizes(""); // {}

// ------------------------------------------------------------------------------------------------

// function wordSizes(str) {
//   const wordCount = {};
//   if (str.trim().length === 0) return wordCount;

//   str.split(" ").forEach((word) => {
//     word = word.replace(/[\W]/g, "");
//     wordCount[word.length] = wordCount[word.length] + 1 || 1;
//   });

//   return wordCount;
// }

// console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 3 }
// console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
// console.log(wordSizes("")); // {}

// ------------------------------------------------------------------------------------------------

// const swap = function (str) {
//   const swappedArr = str.split(" ").map((word) => {
//     // if (word.length === 1) return word;
//     // const first = word[0];
//     // const middle = word.slice(1, word.length - 1);
//     // const last = word[word.length - 1];
//     // return last + middle + first;

//     let w = word.split("");
//     [w[0], w[w.length - 1]] = [w[w.length - 1], w[0]];

//     return w.join("");
//   });

//   return swappedArr.join(" ");
// };

// console.log(swap("Oh what a wonderful day it is")); // "hO thaw a londerfuw yad ti si"
// console.log(swap("Abcde")); // "ebcdA"
// console.log(swap("a")); // "a"

// ------------------------------------------------------------------------------------------------

// function stringToInteger(str) {
//   let decimal = str.length - 1;
//   let sum = 0;

//   str.split("").forEach((digit) => {
//     sum = sum + digit * 10 ** decimal;
//     decimal--;
//   });
//   return sum;
// }

function stringToInteger(str) {
  const DIGITS = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
  const arrayOfDigits = str.split("").map((char) => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach((digit) => (value = value * 10 + digit));
  return value;
}

// console.log(stringToInteger("4321")); //
// console.log(stringToInteger("570")); //

// function hexadecimalToInteger(str) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//     a: 10,
//     b: 11,
//     c: 12,
//     d: 13,
//     e: 14,
//     f: 15,
//   };
//   const arrayOfDigits = str
//     .toLowerCase()
//     .split("")
//     .map((char) => DIGITS[char]);
//   let value = 0;
//   arrayOfDigits.forEach((digit) => (value = value * 16 + digit));
//   return value;
// }

// console.log(hexadecimalToInteger("4D9f"));

// ------------------------------------------------------------------------------------------------

// function stringToSignedInteger(str) {
//   let sign;
//   if (str[0] === "+" || str[0] === "-") {
//     sign = str[0];
//     str = str.slice(1);
//   }
//   let value = stringToInteger(str);
//   if (sign === "-") value = value * -1;
//   return value;
// }

// function stringToSignedInteger(str) {
//   switch (str[0]) {
//     case "+":
//       return stringToInteger(str.slice(1));
//     case "-":
//       return -stringToInteger(str.slice(1));
//     default:
//       return stringToInteger(str);
//   }
// }
// console.log(stringToSignedInteger("4321")); //
// console.log(stringToSignedInteger("-570")); //
// console.log(stringToSignedInteger("+100")); //

// ------------------------------------------------------------------------------------------------

function integerToString(num) {
  let str = "";

  do {
    let digit = num % 10;
    str = digit + str;
    num = Math.trunc(num / 10);
  } while (num > 0);
  return str;
}

// function integerToString(num) {
//   const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   let result = "";
//   do {
//     const remainder = num % 10;
//     num = Math.floor(num / 10);

//     result = DIGITS[remainder] + result;
//   } while (num > 0);

//   return result;
// }

// console.log(integerToString(4321)); // "4321"
// console.log(integerToString(0)); // "0"
// console.log(integerToString(5000)); // "5000"
// console.log(integerToString(1234567890)); // "1234567890"

// ------------------------------------------------------------------------------------------------

function signedIntegerToString(num) {
  switch (Math.sign(num)) {
    case -1:
      return "-" + integerToString(-num);
    case +1:
      return "+" + integerToString(num);
    default:
      if (Object.is(num, -0)) return "-0"; // Object.is() separates 0 from -0
      return integerToString(num);
  }
}

console.log(signedIntegerToString(4321)); // returns "+4321"
console.log(signedIntegerToString(-123)); // returns  "-123"
console.log(signedIntegerToString(0)); // returns  "0"
console.log(signedIntegerToString(-0)); // returns "-0"
