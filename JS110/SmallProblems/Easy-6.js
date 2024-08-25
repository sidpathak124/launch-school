"strict";

// function repeater(str) {
//   // return str
//   //   .split("")
//   //   .map((ele) => ele + ele)
//   //   .join("");
//   // return [...str].map((ele) => ele.repeat(2)).join("");
//   return str.replace(/./g, `$&$&`);
// }

// console.log(repeater("Hello")); // "HHeelllloo"
// console.log(repeater("Good job!")); // "GGoooodd  jjoobb!!"
// console.log(repeater("")); // ""

// ------------------------------------------------------------------------------------------------

// function doubleConsonants(str) {
//   const consonants = "bcdfghjklmnpqrstvwxyz".split("");
//   return [...str]
//     .map((ele) => (consonants.includes(ele.toLowerCase()) ? ele + ele : ele))
//     .join("");
// }

// const doubleConsonants = (str) => str.replace(/[^\Waeiou\d_]/g, `$&$&`);

// console.log(doubleConsonants("String")); // "SSttrrinngg"
// console.log(doubleConsonants("Hello-World!")); // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants("July 4th")); // "JJullyy 4tthh"
// console.log(doubleConsonants("")); // ""

// ------------------------------------------------------------------------------------------------

// function reverseNumber(num) {
//   return parseInt(String(num).split("").reverse().join(""), 10);
// }

// function reverseNumber(num) {
//   let reversed = "";

//   while (num > 0) {
//     let lastDigit = num % 10;
//     reversed += lastDigit;
//     num = Math.floor(num / 10);
//   }

//   return parseInt(reversed, 10);
// }

// console.log(reverseNumber(12345)); // 54321
// console.log(reverseNumber(12213)); // 31221
// console.log(reverseNumber(456)); // 654
// console.log(reverseNumber(12000)); // 21 -- Note that leading zeros in the result get dropped!
// console.log(reverseNumber(1)); // 1

// ------------------------------------------------------------------------------------------------

// function sequence(num) {
//   return Array.from({ length: num }, (v, i) => i + 1);
// }

// function sequence(num) {
//   let arr = [];

//   for (let i = 1; i <= num; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// function sequence(num) {
//   // return [...Array(num)].map((_, i) => i + 1);
//   // return [...Array(num).keys()].map((num) => num + 1);
//   return Array(num)
//     .fill()
//     .map((_, idx) => idx + 1);
// }

// console.log(sequence(5)); // [1, 2, 3, 4, 5]
// console.log(sequence(3)); // [1, 2, 3]
// console.log(sequence(1)); // [1]

// ------------------------------------------------------------------------------------------------

// function swapName(str) {
//   return str.split(" ").reverse().join(", ");
// }

// further exploration
// function swapName(str) {
//   let strArr = str.split(" ");
//   let last = strArr.splice(-1);
//   return last + ", " + strArr.join(" ");
// }

// function swapName(str) {
//   return str.match(/\b\w*$/)[0] + ", " + str.replace(/\s\w*$/, "");
// }

// console.log(swapName("Joe Roberts")); // "Roberts, Joe"
// console.log(swapName("Karl Oskar Henriksson Ragvals")); // "Ragvals, Karl Oskar Henriksson"

// ------------------------------------------------------------------------------------------------

// function sequence(count, start) {
//   return Array(count)
//     .fill()
//     .map((num, idx) => start * (idx + 1));
// }

// function sequence(count, start) {
//   let seqArr = [];

//   for (let i = 1; i <= count; i++) {
//     seqArr.push(start * i);
//   }
//   return seqArr;
// }

// console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7)); // [-7, -14, -21, -28]
// console.log(sequence(3, 0)); // [0, 0, 0]
// console.log(sequence(0, 1000000)); // []

// ------------------------------------------------------------------------------------------------

// function reverseSentence(str) {
//   return str.split(" ").reverse().join(" ");
// }

// function reverseSentence(str) {
//   let [strOld, strNew] = [str.split(" "), []];

//   while (strOld.length > 0) {
//     strNew.push(strOld.pop());
//   }
//   return strNew.join(" ");
// }

// console.log(reverseSentence("")); // ""
// console.log(reverseSentence("Hello World")); // "World Hello"
// console.log(reverseSentence("Reverse these words")); // "words these Reverse"

// ------------------------------------------------------------------------------------------------

/*
Algorithm:
- Split string into array (separated by spaces)
- Iterate over all words in array
- for each string check if it has length >= 5
- if yes, reverse the word, if not return it as it is, 
- join the string array into a single string 
*/

// function reverse(str) {
//   return [...str].reverse().join("");
// }

// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map((word) => (word.length >= 5 ? reverse(word) : word))
//     .join(" ");
// }

// function reverseWords(str) {
//   let strArr = str.split(" ");
//   let reversedArr = [];

//   for (let i = 0; i < strArr.length; i++) {
//     let word = strArr[i];
//     if (word.length >= 5) {
//       reversedArr.push(reverse(word));
//     } else {
//       reversedArr.push(word);
//     }
//   }
//   return reversedArr.join(" ");
// }

// console.log(reverseWords("Professional")); // "lanoisseforP"
// console.log(reverseWords("Walk around the block")); // "Walk dnuora the kcolb"
// console.log(reverseWords("Launch School")); // "hcnuaL loohcS"

// ------------------------------------------------------------------------------------------------

// function reverse(arr) {
//   let halfLength = Math.floor(arr.length / 2);
//   for (let frontIndex = 0; frontIndex < halfLength; frontIndex++) {
//     let endIndex = arr.length - 1 - frontIndex;
//     [arr[frontIndex], arr[endIndex]] = [arr[endIndex], arr[frontIndex]];
//   }
//   return arr;
// }

// function reverse(arr) {
//   return arr.sort((a, b) => arr.indexOf(b) - arr.indexOf(a));
// }

// function reverse(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr.splice(i, 0, arr.pop());
//   }
//   return arr;
// }

// function reverse(arr) {
//   let arrCopy = arr.splice(0, arr.length);
//   while (arrCopy.length > 0) {
//     arr.push(arrCopy.pop());
//   }
//   return arr;
// }

// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true

// ------------------------------------------------------------------------------------------------
/*
i/p = string
o/p = true or false (boolean)

Goal:
Check if all parantheses in the string are properly balanced: '(', ')'

Rule:
paranthesis must be properly balanced '()'
paranthesis must start with '('

loop through each character of the string
check if the char is a pranthesis
if it is ) return false
if it is (, push it inside a stack and continue
if it is ( , again push it and continue, if it is ), remove/pop one (
in the end check and if stack === empty (return the boolean)

*/
function isEmpty(arr) {
  return arr.length === 0;
}
// function isBalanced(str) {
//   let parenthesisArr = [];
//   for (let char of str) {
//     if (char === ")" && isEmpty(parenthesisArr)) {
//       return false;
//     } else if (char === ")") {
//       parenthesisArr.pop();
//     } else if (char === "(") {
//       parenthesisArr.push(char);
//     }
//   }
//   return isEmpty(parenthesisArr);
// }

// function isBalanced(str) {
//   let parens = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "(") {
//       parens++;
//     } else if (str[i] === ")") {
//       parens--;
//     }
//     if (parens < 0) return false;
//   }
//   return parens === 0;
// }

// further exploration
function isEven(num) {
  return num % 2 === 0;
}

function isBalanced(str) {
  let parens = 0;
  let singleQuote = 0;
  let doubleQuote = 0;
  let opening = ["(", "{", "["];
  let closing = [")", "}", "]"];
  for (let i = 0; i < str.length; i++) {
    if (opening.includes(str[i])) {
      parens++;
    } else if (closing.includes(str[i])) {
      parens--;
    } else if (str[i] === "'") {
      singleQuote++;
    } else if (str[i] === '"') {
      doubleQuote++;
    }
    if (parens < 0) return false;
  }
  return parens === 0 && isEven(singleQuote) && isEven(doubleQuote);
}

console.log(isBalanced("What (is) this?")); // true;
console.log(isBalanced("What is) this?")); // false;
console.log(isBalanced("What (is this?")); // false;
console.log(isBalanced("((What) (is this))?")); //= true;
console.log(isBalanced("((What)) (is this))?")); // false;
console.log(isBalanced("Hey!")); // true;
console.log(isBalanced(")Hey!(")); // false;
console.log(isBalanced("What ((is))) up(")); // false;
