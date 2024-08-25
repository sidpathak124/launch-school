"use strict";

// 1)
// function sum(num) {
//   return String(num)
//     .split("")
//     .reduce((acc, curr) => acc + Number(curr), 0);
// }

// 2)
// function sum(num) {
//   return [...Array.from(String(num), Number)].reduce((acc, curr) => acc + curr);
// }

// 3)
// function sum(num) {
//   let strNum = String(num);
//   if (strNum.length === 1) return num;

//   return Number(strNum[0]) + Number(sum(strNum.slice(1)));
// }

// 4)
// function sum(num) {
//   if (num === 0) return 0;
//   let strNum = [...String(num)];
//   return Number(strNum.pop()) + sum(Number(strNum.join("")));
// }

// console.log(sum(23)); // 5
// console.log(sum(496)); // 19
// console.log(sum(123456789)); // 45

// ------------------------------------------------------------------------------------------------

/*
function alphabeticNumberSort

i/p: array of nums
o/p = array of nums

create an array of wnglish words of numbers from 0 to 19

sort the array based on their english word
   
*/

// let NUMBER_WORDS = [
//   "zero",
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
//   "ten",
//   "eleven",
//   "twelve",
//   "thirteen",
//   "fourteen",
//   "fifteen",
//   "sixteen",
//   "seventeen",
//   "eighteen",
//   "nineteen",
// ];

// function wordSort(num1, num2) {
//   if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
//     return 1;
//   } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
//     return -1;
//   } else {
//     return 0;
//   }
// }
// 1
// function alphabeticNumberSort(wordArr) {
//   return [...wordArr].sort(wordSort);
// }

// 2
// function alphabeticNumberSort(numArr) {
//   return numArr
//     .map((num) => NUMBER_WORDS[num])
//     .sort()
//     .map((numWord) => NUMBER_WORDS.indexOf(numWord));
// }

// console.log(
//   alphabeticNumberSort([
//     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
//   ])
// );
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// ------------------------------------------------------------------------------------------------

// 1
// function multiplyAllPairs(arr1, arr2) {
//   let products = [];

//   arr1.forEach((num1) => {
//     arr2.forEach((num2) => {
//       products.push(num1 * num2);
//     });
//   });

//   return products.sort((a, b) => a - b);
// }

// // 2
// function multiplyAllPairs(arr1, arr2) {
//   return arr1
//     .reduce((acc, curr) => {
//       return [...acc, ...arr2.map((ele) => ele * curr)];
//     }, [])
//     .sort((a, b) => a - b);
// }

// 3
// function multiplyAllPairs(arr1, arr2) {
//   return arr1
//     .map((num1) => arr2.map((num2) => num1 * num2))
//     .flat()
//     .sort((a, b) => a - b);
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]

// ------------------------------------------------------------------------------------------------

// 1
function leadingSubstrings(str) {
  return [...str].map((_, idx) => str.slice(0, idx + 1));
}

// // 2
// function leadingSubstrings(str) {
//   return [...str].reduce((arr, _, idx) => {
//     arr.push(str.slice(0, idx + 1));
//     return arr;
//   }, []);
// }

// // 3
// function leadingSubstrings(str) {
//   let leadSubstrs = [];

//   [...str].forEach((_, idx) => {
//     leadSubstrs.push(str.slice(0, idx + 1));
//   });
//   return leadSubstrs;
// }

// console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
// console.log(leadingSubstrings("a")); // ["a"]
// console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// ------------------------------------------------------------------------------------------------

// function substrings(str) {
//   let allSubstrs = [];

//   for (let firstIndex = 0; firstIndex < str.length; firstIndex++) {
//     let substr = str.slice(firstIndex);
//     allSubstrs = allSubstrs.concat(leadingSubstrings(substr));
//     return allSubstrs;
//   }
// }

// 2
function substrings(str) {
  return [...str].map((_, idx) => leadingSubstrings(str.slice(idx))).flat();
}

// // 3
// function substrings(str) {
//   return [...str].reduce((arr, _, idx) => {
//     return arr.concat(leadingSubstrings(str.slice(idx)));
//   }, []);
// }

// console.log(substrings("abcde"));
// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

// ------------------------------------------------------------------------------------------------

// function isPalindrome(str) {
//   return str.length > 1 && str === [...str].reverse().join("");
// }
// function palindromes(str) {
//   let allsubstr = substrings(str);
//   return allsubstr.filter((substr) => isPalindrome(substr));
// }

// console.log(palindromes("abcd")); // []
// console.log(palindromes("madam")); // [ "madam", "ada" ]

// console.log(palindromes("hello-madam-did-madam-goodbye"));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes("knitting cassettes"));
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// ------------------------------------------------------------------------------------------------

// 1
// function sum(arr) {
//   return arr.reduce((acc, curr) => acc + curr, 0);
// }

// function sumOfSums(arr) {
//   return arr.reduce((acc, _, idx, arr) => sum(arr.slice(0, idx + 1)) + acc, 0);
// }

// // 2
// function sumOfSums(arr) {
//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     total += arr.slice(0, i + 1).reduce((acc, curr) => acc + curr);
//   }
//   return total;
// }

// 3

// function sumOfSums(arr) {
//   return arr
//     .map((num, idx) => {
//       return arr.slice(0, idx + 1).reduce((acc, curr) => acc + curr);
//     })
//     .reduce((acc, sum) => acc + sum);
// }

// console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4])); // 4
// console.log(sumOfSums([1, 2, 3, 4, 5])); // 35

// ------------------------------------------------------------------------------------------------

// function numFruits(fruit) {
//   let num = fruit[1];
//   let fruits = [];

//   for (let i = 0; i < num; i++) {
//     fruits.push(fruit[0]);
//   }
//   return fruits;
// }

// function buyFruit(arr) {
//   return arr.map((fruitArr) => numFruits(fruitArr)).flat();
// }

// function buyFruit(arrOfFruits) {
//   return arrOfFruits
//     .map((fruitArr) => {
//       let arr = [];
//       let fruit = fruitArr[0];
//       let numFruits = fruitArr[1];
//       for (let i = 0; i < numFruits; i++) arr.push(fruit);
//       return arr;
//     })
//     .flat();
// }

// function buyFruit(arrOfFruits) {
//   return arrOfFruits.flatMap(([fruit, num]) => Array(num).fill(fruit));
// }

// function buyFruit(arrOfFruits) {
//   return arrOfFruits.reduce(
//     (arr, [fruit, num]) => arr.concat(Array(num).fill(fruit)),
//     []
//   );
// }

// console.log(
//   buyFruit([
//     ["apple", 3],
//     ["orange", 1],
//     ["banana", 2],
//   ])
// );
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// ------------------------------------------------------------------------------------------------

function transactionsFor(itemId, transactions) {
  return transactions.filter((obj) => obj.id === itemId);
}

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

// ------------------------------------------------------------------------------------------------

// function isItemAvailable(itemId, transactions) {
//   let totalTransaction = transactionsFor(itemId, transactions).reduce(
//     (acc, curr) => {
//       let itemMovement = curr.movement === "in" ? 1 : -1;
//       return (acc += curr.quantity * itemMovement);
//     },
//     0
//   );
//   return totalTransaction > 0;
// }

// console.log(isItemAvailable(101, transactions)); // false
// console.log(isItemAvailable(103, transactions)); // false
// console.log(isItemAvailable(105, transactions)); // true

// console.log(`The end`);

// ------------------REVISION------------------------------------------------------------------------------
/*

Goal: Build a fn that lists all the palindromic substrings of a given string
i/p = string
o/p = array of strings

- Build all the substrings
-- build an array containing all the leading substrings (fn leadingSubstrings)
-- loop over the array of leading substrings and create trailing 
substrings for each leading substring, thus creating all possible substrings (fn substrings)
- filter out all the palindromic substrings from a list of 
all possible substrings (and return it)
*/
// function leadingSubstrings(str) {
//   return [...str].map((_, idx) => str.slice(0, idx + 1));
// }

// function substrings(str) {
//   return [...str].reduce(
//     (acc, _, idx) => acc.concat(leadingSubstrings(str.slice(idx))),
//     []
//   );
// }

// function isPalindrome(str) {
//   return str.length > 1 && str === [...str].reverse().join("");
// }

// function palindromes(str) {
//   return substrings(str).filter((substr) => isPalindrome(substr));
// }

// console.log(palindromes("abcd")); // []
// console.log(palindromes("madam")); // [ "madam", "ada" ]

// console.log(palindromes("hello-madam-did-madam-goodbye"));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes("knitting cassettes"));
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// console.log(substrings("abcd").length); // []
// console.log(substrings("madam").length); // [ "madam", "ada" ]
// console.log(substrings("hello-madam-did-madam-goodbye").length);
// console.log(substrings("hello-madam-did-madam-goodbye"));

// --------------------------------------------------------------------------------------------

// Given an array of numbers, return the count of all combination of 3 numbers where the values are in decreasing order.  -- Andrew

function countDecreasingTriplets(arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] > arr[j] && arr[j] > arr[k]) {
          count++;
        }
      }
    }
  }

  return count;
}

function findTripleWithVowels(sentence) {
  const words = sentence.split(/\s+/);
  const wordsWithTwoVowels = words.filter((word) => countVowels(word) >= 2);
  const result = [];

  for (let i = 0; i < wordsWithTwoVowels.length - 2; i++) {
    for (let j = i + 1; j < wordsWithTwoVowels.length - 1; j++) {
      for (let k = j + 1; k < wordsWithTwoVowels.length; k++) {
        result.push([
          wordsWithTwoVowels[i],
          wordsWithTwoVowels[j],
          wordsWithTwoVowels[k],
        ]);
      }
    }
  }

  return result;
}

// Test cases
console.log(countDecreasingTriplets([5, 4, 3, 2, 1])); // Expected output: 10
console.log(countDecreasingTriplets([-1, -2, -3, 4])); // Expected output: 1
console.log(countDecreasingTriplets([1, 2, 3, 4, 5])); // Expected output: 0 (No combinations)

// 5, 4, 3
// 5, 3, 2
// 5, 4, 2
// 5, 4, 1
// 5, 3, 1
// 5, 2, 1
// 4, 3, 2
// 4, 3, 1
// 4, 2, 1
// 3, 2, 1

// Task
// Return the count of all combinitions of 3 numbers where the values are in decreasing order
// Input: An array of numbers (not necessarily 5)
// Output: A count of all of the combination of 3 numbers of decreasing order
//   Explicit: Return count of the combination of 3 numbers of decreasing order
//   - Questions
//     - Can I be given more than 5 values?

// - Examples and test cases
// console.log(countDecreasingTriplets([5, 4, 3, 2, 1])); // Expected output: 10
// console.log(countDecreasingTriplets([-1, -2, -3, 4])); // Expected output: 1
// console.log(countDecreasingTriplets([1, 2, 3, 4, 5])); // Expected output: 0 (No combinations)

// - Data Structures
//   - I will be working with arrays
// - Algorithm
//   - Define `counter` that represents the number of the decreasing triplets
//   - Define `length` to represent the length of array
//   - Loop through the array from the first element to the third-to-last element.
//   - For each element selected in the outer loop, start another loop to iterate through the subsequent elements.
//   - Compare current element with the selected element from out looper. If smaller, continue
//  - check if it's smaller than the element selected in the outer loop and larger than the currently selected inner loop element. If so, increment the counter.
//

// Write a function that returns the count of triple of numbers that have 2 odd numbers and 1 even. If there’s none return -1. All numbers in the array will be integers greater than 0. -- Siddhant
/*
Problem: Count the number of unique triplets within the array
where each triplet is made up of 2 odd numbers and an even number

i/p : Array of numbers
o/p : An integer (Number of triplets), -1 if no triplets are found

no. of triplets = no. of unique pairs of odd numbers * no. of even no.s
no. of unique pairs of odd no.s = sum (1 to num_of_odds - 1)
*/

// function sumTill(n) {
//   if (n === 1) return 1;
//   return n + sumTill(n - 1);
// }

// function countTriples(numArr) {
//   let [numOdd, numEven] = [0, 0];

//   numArr.forEach((num) => (num % 2 === 0 ? numOdd++ : numEven++));

//   if (numOdd < 2 || numEven < 1) return -1;

//   let uniqueOddPairs = sumTill(numOdd - 1);
//   let numTriplets = uniqueOddPairs * numEven;

//   return numTriplets;
// }

// function countTriples(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length - 2; i++) {
//       for (let j = i + 1; j < arr.length - 1; j++) {
//           for (let k = j + 1; k < arr.length; k++) {
//               let oddCount = [arr[i], arr[j], arr[k]].filter(num => num % 2 !== 0).length;
//               if (oddCount === 2) count++;
//           }
//       }
//   }

//   return count > 0 ? count : -1;
// }

// Test cases
console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9
// // Test cases
// console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
// console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
// console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
// console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9

// Find all triple of words in the sentence that have at least 2 vowels in them. -- Jason

// Test cases
// console.log(findTripleWithVowels("This is a test sentence with some vowels")); // [["sentence", "some", "vowels"]]
// console.log(findTripleWithVowels("The quick brown fox jumps over the lazy dog")); // []
// console.log(findTripleWithVowels("Beautiful, bright, and sunnier days are lovely"));
// [
//  [ 'Beautiful,', 'sunnier', 'are' ],
//  [ 'Beautiful,', 'sunnier', 'lovely' ],
//  [ 'Beautiful,', 'are', 'lovely' ],
//  [ 'sunnier', 'are', 'lovely' ]
// ]

/*
-get all triplets within the string, within those triplets, filter them so that at least 2 vowels are included in each of the words (inside triplets) in the final result 

algo
  getTriplett
    init result to store triplets
    split string into words
     iterate through words, use 3 loops to make 3 combonations of elements
        store tripplets in result variable, push each iteration to result
      return result

  hasVowel
    init vowels
    init count
    iterate through each word, if it contains a vowel increment count
      return true if the count is 2 or greater 

  mainfunction
    store call getriplett on input string into variable
    
    filter the variable so that it checks if vowels are included in each word
      -call hasVowel on each word using every method within the tripplet
      
    return those that return true 
      
*/

// function getTriplets(str) {
//   const result = [];
//   const words = str.split(' ');

//   for (let i = 0; i < words.length - 2; i++) {
//     for (let j = i + 1; j < words.length - 1; j++) {
//       for (let k = j + 1; k < words.length; k++) {
//         result.push([words[i], words[j], words[k]]);
//       }
//     }
//   }

//   return result;
// }

// //console.log(getTripletts("This is a test sentence with some vowels"))

// function hasVowel(word) {
//   const vowels = 'aeiouAEIOU';
//   let vowelCount = 0;

//   for (let char of word) {
//     if (vowels.includes(char)) {
//       vowelCount++;
//       if (vowelCount >= 2) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

// /* using match to check vowels
// function hasVowel(word) {
//   return (word.match(/[aeiouAEIOU]/g) || []).length >= 2;
// }
// */

// function findTripleWithVowels(sentence) {
//   const triplets = getTriplets(sentence);

//   return triplets.filter(triplet =>
//     triplet.every(word => hasVowel(word))
//   );
// }
