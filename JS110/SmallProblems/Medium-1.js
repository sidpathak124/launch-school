"strict";

/*
i/p: An array
o/p: An array

rules:
  If i/p is not an array return undefined
  If i/p is an empty array return []
  For a non-empty array, slice off the 1st element
  and append it to the end of the array


check that input type is an array. If not, return undefined
check that i/p array is empty, if it is return []

copy the original array
remove 1st element of array and place it at the end of the array
return the mutated array

*/

// function rotateArray(arr) {
//   if (!Array.isArray(arr)) {
//     console.log("undefined");
//     return;
//   }
//   if (arr.length < 1) return [];

//   let rotatedArr = arr.slice();
//   rotatedArr.push(rotatedArr.shift());

//   console.log(rotatedArr);
//   return rotatedArr;
// }

// function rotateArray(arr) {
//   if (!Array.isArray(arr)) {
//     console.log("undefined");
//     return;
//   }
//   if (arr.length < 1) return [];

//   let rotatedArr = arr.slice(1).concat(arr[0]);

//   console.log(rotatedArr);
//   return rotatedArr;
// }

// rotateArray([7, 3, 5, 2, 9, 1]); // [3, 5, 2, 9, 1, 7]
// rotateArray(["a", "b", "c"]); // ["b", "c", "a"]
// rotateArray(["a"]); // ["a"]
// rotateArray([1, "a", 3, "c"]); // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]); // [[1, 2], 3, { a: 2 }]
// rotateArray([]); // []

// // return `undefined` if the argument is not an array
// rotateArray(); // undefined
// rotateArray(1); // undefined

// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array); // [2, 3, 4, 1]
// console.log(array); // [1, 2, 3, 4]

// ------------------------------------------------------------------------------------------------
/*
i/p: number
o/p: number

convert num to string
access the number counting from right side
and place it at the end
shift remaining digits to the left
convert the string back to number 
return the number

String(num)
*/

function rotateRightmostDigits(num, count) {
  let numArr = String(num).split("");
  numArr.push(numArr.splice(-count, 1));
  return Number(numArr.join(""));
}

// function rotateRightmostDigits(num, count) {
//   let strNum = String(num);
//   let static = strNum.slice(0, strNum.length - count);
//   let toRotate = strNum.slice(strNum.length - count);
//   let result = static + rotateString(toRotate);
//   return Number(result);
// }

// const rotateString = (str) => str.slice(1) + str.slice(0, 1);

// console.log(rotateRightmostDigits(735291, 1)); // 735291
// console.log(rotateRightmostDigits(735291, 2)); // 735219
// console.log(rotateRightmostDigits(735291, 3)); // 735912
// console.log(rotateRightmostDigits(735291, 4)); // 732915
// console.log(rotateRightmostDigits(735291, 5)); // 752913
// console.log(rotateRightmostDigits(735291, 6)); // 352917

// ------------------------------------------------------------------------------------------------
/*
perform rotations on the string 
from 1st num to 2nd last num

rotate(str, count = len(str))

*/

// function maxRotation(num) {
//   let numLen = String(num).length;
//   for (let count = numLen; count > 1; count--) {
//     num = rotateRightmostDigits(num, count);
//   }
//   return num;
// }

// function maxRotation(num) {
//   let arr = String(num).split("");
//   arr.forEach((_, i) => arr.push(arr.splice(i, 1)));
//   return Number(arr.join(""));
// }

// console.log(maxRotation(735291)); // 321579
// console.log(maxRotation(3)); // 3
// console.log(maxRotation(35)); // 53
// console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146)); // 7321609845

// ------------------------------------------------------------------------------------------------

/*
TITLE: Stack machine

function minlang(str)
stack = Array
register = num // all operations are stored back in the register

for command in str.split(' '):
switch command {
  case command ===
  case PUSH
  case ADD
  case MULT
}
*/

// function minilang(str) {
//   let validCommands = [
//     "PUSH",
//     "ADD",
//     "SUB",
//     "MULT",
//     "DIV",
//     "REMAINDER",
//     "POP",
//     "PRINT",
//   ];
//   let commandsRequireNumber = validCommands.slice(0, -1);
//   let stack = [];
//   let register = 0;

//   for (let command of str.split(" ")) {
//     if (
//       !Number.isInteger(parseInt(command)) &&
//       !validCommands.includes(command)
//     ) {
//       console.log(`${command} is an invalid token.`);
//       return `${command} is an invalid token.`;
//     }

//     if (register === 0 && commandsRequireNumber.includes(command)) {
//       console.log(`Please first enter a number for operation`);
//       return `Please first enter a number for operation`;
//     }

//     switch (command) {
//       case "PUSH":
//         stack.push(register);
//         break;
//       case "ADD":
//         register = register + stack.pop();
//         break;
//       case "SUB":
//         register = register - stack.pop();
//         break;
//       case "MULT":
//         register = register * stack.pop();
//         break;
//       case "DIV":
//         register = Math.floor(register / stack.pop());
//         break;
//       case "REMAINDER":
//         register = register % stack.pop();
//         break;
//       case "POP":
//         register = stack.pop();
//         break;
//       case "PRINT":
//         console.log(register);
//         break;
//       default:
//         register = Number(command);
//     }
//   }
//   return undefined;
// }

// minilang("PRINT");
// // 0

// minilang("5 PUSH 3 MULT PRINT");
// // 15

// minilang("5 PLUP 3 MULT PRINT");
// // Error

// minilang("5 PRINT PUSH 3 PRINT ADD PRINT");
// // 5
// // 3
// // 8

// minilang("PUSH 4 SUB PRINT");
// // Error

// minilang("5 PUSH POP PRINT");
// // 5

// minilang("3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT");
// // 5
// // 10
// // 4
// // 7

// minilang("3 PUSH PUSH 7 DIV MULT PRINT");
// // 6

// minilang("4 PUSH PUSH 7 REMAINDER MULT PRINT");
// // 12

// minilang("4 PUSH PUSH 7 ADD MULT PRINT");
// // 44

// minilang("-3 PUSH 5 SUB PRINT");
// // 8

// minilang("6 PUSH");
// // (nothing is printed because the `program` argument has no `PRINT` commands)

// ------------------------------------------------------------------------------------------------

/*
i/p = string
o/p = string

convert number words to actual numbers in the string
DS: We can use an object map for this conversion

make an object map that maps a word to its corresponding number.
initialize an empty string
split the string into an array
loop through each word:
  if the word is in obj:
    fetch its corresponding number from obj and add to the string
  else:
    add the same string back
return the modified string
*/
// let wordToNum = {
//   zero: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
// };

// function wordToDigit(str) {
//   let digitStrArr = [];

//   str.split(" ").forEach((word) => {
//     if (Object.keys(wordToNum).includes(word))
//       digitStrArr.push(wordToNum[word]);
//     else digitStrArr.push(word);
//   });
//   return digitStrArr.join(" ");
// }

// function wordToDigit(str) {
//   Object.keys(wordToNum).forEach((word) => {
//     let regex = new RegExp(`\\b` + word + `\\b`, "g");
//     str = str.replace(regex, wordToNum[word]);
//   });
//   return str;
// }

// console.log(
//   wordToDigit("Please call me at five five five one two three four. Thanks.")
// );
// // "Please call me at 5 5 5 1 2 3 4. Thanks."

// console.log(wordToDigit("The weight is done."));
// // "The w8 is d1."

// ------------------------------------------------------------------------------------------------

/*
function (lengthOfFib)
fibNumPrev = 1
fibNum = 1
index = 2;
while (String(fibNum).length < lengthOfFib):
  [fibNumPrev, fibNum] = [fibNum, fibNum + fibNumPrev];
  index++;

return index;
*/

// function findFibonacciIndexByLength(fibNumLength) {
//   let fibNumPrev = 1n;
//   let fibNum = 1n;
//   let index = 2;

//   while (String(fibNum).length < fibNumLength) {
//     [fibNumPrev, fibNum] = [fibNum, fibNum + fibNumPrev];
//     index++;
//   }
//   return index;
// }

// console.log(findFibonacciIndexByLength(2n)); // 7n;    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n)); // 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n)); // 45n;
// console.log(findFibonacciIndexByLength(16n)); // 74n;
// console.log(findFibonacciIndexByLength(100n)); // 476n;
// console.log(findFibonacciIndexByLength(1000n)); // 4782n;
// console.log(findFibonacciIndexByLength(10000n)); // 47847n;

// The last example may take a minute or so to run.

// ------------------------------------------------------------------------------------------------

// function fibonacci(num) {
//   if (num < 3) {
//     return 1;
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// }

// function fibonacciWithMemoization(n) {
//   memo = {};

//   const fibonacci = (num) => {
//     if (num <= 2) {
//       return 1;
//     }
//     if (memo[num]) {
//       return memo[num];
//     }

//     memo[num] = fibonacci(num - 1) + fibonacci(num - 2);

//     return memo[num];
//   };

//   return fibonacci(n);
// }

// console.log(fibonacciWithMemoization(1)); // 1
// console.log(fibonacciWithMemoization(2)); // 1
// console.log(fibonacciWithMemoization(3)); // 2
// console.log(fibonacciWithMemoization(4)); // 3
// console.log(fibonacciWithMemoization(5)); // 5
// console.log(fibonacciWithMemoization(12)); // 144
// console.log(fibonacciWithMemoization(20)); // 6765
// console.log(fibonacciWithMemoization(100)); // 354224848179262000000

// tco implementation
// function fibonacci(n, a = 0, b = 1) {
//   if (n < 0) return "Invalid number";
//   if (n === 0) return a;
//   if (n === 1) return b;
//   return fibonacci(n - 1, b, a + b);
// }

// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(5)); // 5
// console.log(fibonacci(12)); // 144
// console.log(fibonacci(20)); // 6765

// ------------------------------------------------------------------------------------------------

// procedural fibonacci

// function fibonacci(n) {
//   let fibprev = 1;
//   let fibcurr = 1;

//   for (let count = 2; count < n; count++) {
//     [fibprev, fibcurr] = [fibcurr, fibprev + fibcurr];
//   }

//   return fibcurr;
// }

// function fibonacci(n) {
//   let previousTwo = [1, 1];

//   for (let _ = 3; _ <= n; _++) {
//     previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
//   }

//   return previousTwo[1];
// }

// console.log(fibonacci(20)); // 6765
// console.log(fibonacci(50)); // 12586269025
// console.log(fibonacci(75)); // 2111485077978050
// console.log(fibonacci(100)); //
// console.log(fibonacci(1000)); //

// ------------------------------------------------------------------------------------------------
// Memoization (saving a computed answer for future use).
// One way is using object

// function fibonacciWithMemoization(n) {
//   let obj = {};

//   function fibonacci(num) {
//     if (num <= 2) return 1;
//     if (obj[num]) return obj[num];

//     obj[num] = fibonacci(num - 2) + fibonacci(num - 1);

//     return obj[num];
//   }
//   return fibonacci(n);
// }

// let memo = {};

// function fibonacciWithMemoization(n) {
//   if (n <= 2) {
//     return 1;
//   } else if (memo[n]) {
//     return memo[n];
//   } else {
// memo[n] = fibonacciWithMemoization(n - 1) + fibonacciWithMemoization(n - 2);
//     return memo[n];
//   }
// }

// // faster memoization
// let memo = { 1: 1, 2: 1 };
// function fibonacciWithMemoization(n) {
//   if (memo[n]) {
//     return memo[n];
//   } else {
//     memo[n] = fibonacciWithMemoization(n - 1) + memo[n - 2];
//     return memo[n];
//   }
// }

// console.log(fibonacciWithMemoization(1)); // 1
// console.log(fibonacciWithMemoization(2)); // 1
// console.log(fibonacciWithMemoization(3)); // 2
// console.log(fibonacciWithMemoization(4)); // 3
// console.log(fibonacciWithMemoization(5)); // 5
// console.log(fibonacciWithMemoization(12)); // 144
// console.log(fibonacciWithMemoization(20)); // 6765
// console.log(fibonacciWithMemoization(100)); // 354224848179262000000
