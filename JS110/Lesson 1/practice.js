"strict";

// // Convert all palindromes to uppercase in the string and return the string.
function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
}

function changeMe(str) {
  let newStr = [];
  strArray = str.split(" ");

  for (const str of strArray) {
    if (isPalindrome(str)) {
      newStr.push(str.toUpperCase());
    } else {
      newStr.push(str);
    }
  }

  console.log(newStr.join(" "));
}

// changeMe("We will meet at noon");
// changeMe("No palindromes here");
// changeMe("");
// changeMe("I LOVE my mom and dad equally");

// -----------------------------------------------------------------------------------------

// function substrings(str, minLength = 2) {
//   const substrs = [];

//   for (let i = 0; i <= str.length - minLength; i++) {
//     for (let j = i + 2; j <= str.length; j++) {
//       substrs.push(str.slice(i, j));
//     }
//   }
//   return substrs;
// }

// function substrings(str) {
//   const substr = [];
//   let startingIndex = 0;

//   while (startingIndex <= str.length - 2) {
//     let numChars = 2;
//     while (numChars <= str.length - startingIndex) {
//       substr.push(str.slice(startingIndex, startingIndex + numChars));
//       numChars += 1;
//     }
//     startingIndex += 1;
//   }
//   console.log(substr);
// }

// substrings("halo");

// function palindromeSubstrings(str) {
//   const result = [];
//   const substrs = substrings(str);

//   substrs.forEach((sub) => (isPalindrome(sub) ? result.push(sub) : 0));

//   console.log(result);
// }

// palindromeSubstrings("halo");
// palindromeSubstrings("abcddcbA");
// palindromeSubstrings("supercalifragilisticexpialidocious");

// -----------------------------------------------------------------------------------------
// Method-1
// function evenSeriesFn(num) {
//   const evenSeries = [];
//   let nextNum = 0;

//   for (let i = 0; i < num; i++) {
//     let row = [];
//     for (let j = 0; j <= i; j++) {
//       nextNum += 2;
//       row.push(nextNum);
//     }
//     evenSeries.push(row);
//     row = [];
//   }

//   return evenSeries;
// }

// function sumNthRow(num) {
//   const evenSeries = evenSeriesFn(num);

//   if (num === 0) {
//     console.log(0);
//     return 0;
//   }
//   const sum = evenSeries[num - 1].reduce((curr, acc) => curr + acc, 0);
//   console.log(sum);
// }

// sumNthRow(0);
// sumNthRow(1);
// sumNthRow(2);
// sumNthRow(3);
// sumNthRow(4);

// Method-2
// function sumEvenNumberRows(rowNumber) {
//   let startInteger = (rowNumber - 1) * rowNumber + 2;
//   nthRow = createRow(startInteger, rowNumber);
//   sumNthRow = nthRow.reduce((acc, curr) => acc + curr, 0);

//   return sumNthRow;
// }

// function createRow(startInteger, rowLength) {
//   const row = [];
//   let currentInteger = startInteger;
//   for (let i = 1; i <= rowLength; i++) {
//     row.push(currentInteger);
//     currentInteger += 2;
//   }

//   return row;
// }

// console.log(createRow(2, 1));
// console.log(createRow(4, 2));
// console.log(createRow(8, 3));
// console.log(createRow(14, 4));
// console.log(createRow(22, 5));

// console.log(sumEvenNumberRows(1));
// console.log(sumEvenNumberRows(2));
// console.log(sumEvenNumberRows(3));
// console.log(sumEvenNumberRows(4));
// console.log(sumEvenNumberRows(5));

// -------------------------------------------------------------------------------------------------

// function buildingBlocksLeft(numBlocks) {
//   let blocksLeft = numBlocks;
//   let layer = 1;

//   while (blocksLeft >= layer ** 2) {
//     blocksLeft -= layer ** 2;
//     layer += 1;
//   }

//   return blocksLeft;
// }
// console.log(buildingBlocksLeft(0));
// console.log(buildingBlocksLeft(1));
// console.log(buildingBlocksLeft(2));
// console.log(buildingBlocksLeft(4));
// console.log(buildingBlocksLeft(5));
// console.log(buildingBlocksLeft(6));
// console.log(buildingBlocksLeft(14));
// console.log(buildingBlocksLeft(11));
// console.log(buildingBlocksLeft(30));

// -------------------------------------------------------------------------------------------------

// function countMaxAdjacentConsonant(str) {
//   joinedStr = str.split(" ").join("");
//   let adjacentConsonants = "";
//   let maxCount = 0;
//   const vowels = "aeiou";

//   for (const char of joinedStr) {
//     if (!vowels.includes(char)) {
//       adjacentConsonants += char;

//       if (
//         adjacentConsonants.length > 1 &&
//         adjacentConsonants.length > maxCount
//       ) {
//         maxCount = adjacentConsonants.length;
//       }
//     } else {
//       adjacentConsonants = "";
//     }
//   }
//   return maxCount;
// }

// // console.log(countMaxAdjacentConsonant("dddaa")); // 3
// // console.log(countMaxAdjacentConsonant("ccaa")); // 2
// // console.log(countMaxAdjacentConsonant("baa")); // 0
// // console.log(countMaxAdjacentConsonant("aa")); // 0
// console.log(countMaxAdjacentConsonant("month")); // 0
// console.log(countMaxAdjacentConsonant("salt pan")); // 0

// function sortStringsByConsonants(strArray) {
//   let strings = strArray.slice();

//   strings.sort(
//     (a, b) => countMaxAdjacentConsonant(b) - countMaxAdjacentConsonant(a)
//   );
//   return strings;
// }

// let list1 = ["aa", "baa", "ccaa", "dddaa"];
// console.log(sortStringsByConsonants(list1));
// // ['dddaa', 'ccaa', 'aa', 'baa']

// let list2 = ["can can", "toucan", "batman", "salt pan"];
// console.log(sortStringsByConsonants(list2));
// // ['salt pan', 'can can', 'batman', 'toucan']

// let list3 = ["bar", "car", "far", "jar"];
// console.log(sortStringsByConsonants(list3));
// // ['bar', 'car', 'far', 'jar']

// let list4 = ["day", "week", "month", "year"];
// console.log(sortStringsByConsonants(list4));
// // ['month', 'day', 'week', 'year']

// -------------------------------------------------------------------------------------------------

// function selectType(selectList, produceType) {
//   let selectListKeys = Object.keys(selectList);
//   let filteredList = {};

//   for (let i = 0; i < selectListKeys.length; i++) {
//     let currentKey = selectListKeys[i];
//     let currentValue = selectList[currentKey];

//     if (currentValue === produceType) {
//       filteredList[currentKey] = currentValue;
//     }
//   }
//   return filteredList;
// }

// let produce = {
//   apple: "Fruit",
//   carrot: "Vegetable",
//   pear: "Fruit",
//   broccoli: "Vegetable",
// };

// console.log(selectType(produce, "Fruit"));
// console.log(selectType(produce, "Vegetable"));
// console.log(selectType(produce, "meat"));

// -------------------------------------------------------------------------------------------------

// function multiply(numbers, multiplier) {
//   let result = [];

//   for (let i = 0; i < numbers.length; i++) {
//     currentNumber = numbers[i];
//     result.push(currentNumber * multiplier);
//   }

//   return result;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(multiply(myNumbers, 3));
// console.log(multiply(myNumbers, 7));

// -------------------------------------------------------------------------------------------------

// High level strategy
//   - Adrienne
//     - Sort the input word and filter the input array to see if the sorted word is the same as the sorted word in the array.

//   - Khumari
//     - Iterate over array and check if each word is an anagram. To check if two words are anagrams, sort the letters in alphabetical order.

//   - Aman
//     - Iterate through the array and find each anagram by checking that each word contains the characters with the same frequencies in the given word.

//   - Siddhant
//     - Find all possible anagrams of given word. Iterate through input array and determine if they exist in the possible anagrams.

/*
helper function to build all the anagrams for a given word

*/

/*
=============================================================

function anagrams(word, arr)
================================
allAnagrams = create all possible anagrams of the word
filter all the words from the arr that are present in all Anagrams
return the filtered arr

return arr.filter(word => allAnagrams.includes(word.toLowerCase()))
*/

// Method 1: By making all the possible anagrams of a word
// function allAnagrams(str) {
//   if (str.length === 1) return str;

//   let allPermutations = [];
//   for (let _ = 0; _ < str.length; _++) {
//     let first = str[0];
//     let subAnagrams = allAnagrams(str.slice(1));

//     for (let i = 0; i < subAnagrams.length; i++) {
//       allPermutations.push(first + subAnagrams[i]);
//     }
//     str = str.slice(1) + first;
//   }
//   return allPermutations;
// }

// function anagrams(word, wordArr) {
//   let allPerms = allAnagrams(word);
//   return wordArr.filter((word) => allPerms.includes(word.toLowerCase()));
// }

// Method 2: by sorting the word as well as all the words in the array and comparing them
function sortWord(word) {
  return word.toLowerCase().split("").sort().join("");
}

function anagrams(word, wordArr) {
  let anagramWords = [];
  let sortedWord = sortWord(word);

  wordArr.forEach((str) => {
    if (sortedWord === sortWord(str)) anagramWords.push(str);
  });
  return anagramWords;
}

/*
Method 3: create letter frequency object for the words in array and compare them to the word passed

helper fn: charFrequency- takes a word as an i/p and o/ps an object containing letter frequency

function anagrams:
create a lf (letter frequency) object for the main word
d. and i. an empty array for storing anagrams

loop over all the words in arr
- convert each word to lf object
- compare this object to the main lf object, if they are equal
  add them to the array
return the array
*/

function letterFrequency(word) {
  let obj = {};
  word
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (Object.keys(obj).includes(char)) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    });
  return Object.entries(obj).sort().toString();
}

function anagrams(word, wordArr) {
  let wordObj = letterFrequency(word);
  let allAnagrams = [];

  wordArr.forEach((word) => {
    if (letterFrequency(word) === wordObj) allAnagrams.push(word);
  });
  return allAnagrams;
}

// Test cases
console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
// ['aabb', 'bbaa']

console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));
// ['carer', 'racer']

console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "Racer"]));
// ['carer', 'Racer']

console.log(anagrams("laser", ["lazing", "lazy", "lacer"]));
// []

function sum(num) {
  if (num <= 1) return num;
  return num + sum(num - 1);
}

// console.log(sum(0));
// console.log(sum(1));
// console.log(sum(5));
// console.log(sum(10));

// ------------------------------------------------------------------------------------------------

// Given an array of numbers, return the count of all combination of 3 numbers where the values are in decreasing order.  -- Andrew

function countDecreasingTriplets(arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] > arr[j] && arr[j] > arr[k]) count++;
      }
    }
  }
  return count;
}

// Test cases
// console.log(countDecreasingTriplets([5, 4, 3, 2, 1])); // Expected output: 10
// console.log(countDecreasingTriplets([-1, -2, -3, 4])); // Expected output: 1
// console.log(countDecreasingTriplets([1, 2, 3, 4, 5])); // Expected output: 0 (No combinations)

// Find all triple of words in the sentence that have at least 2 vowels in them. -- Jason

function hasTwoOrMoreVowels(word) {
  let vowels = "aeiouAEIOU".split("");
  return word.split("").filter((char) => vowels.includes(char)).length >= 2;
}

function isATriplet(arr) {
  return arr.every((word) => hasTwoOrMoreVowels(word));
}

function findTripleWithVowels(str) {
  let strArr = str.split(" ");
  let triplets = [];

  for (let i = 0; i < strArr.length - 2; i++) {
    for (let j = i + 1; j < strArr.length - 1; j++) {
      for (let k = j + 1; k < strArr.length; k++) {
        let arr = [strArr[i], strArr[j], strArr[k]];
        if (isATriplet(arr)) triplets.push(arr);
      }
    }
  }
  return triplets;
}

// Test cases
// console.log(findTripleWithVowels("This is a test sentence with some vowels")); // [["sentence", "some", "vowels"]]
// console.log(
//   findTripleWithVowels("The quick brown fox jumps over the lazy dog")
// ); // []
// console.log(
//   findTripleWithVowels("Beautiful, bright, and sunnier days are lovely")
// );

// [
//  [ 'Beautiful,', 'sunnier', 'are' ],
//  [ 'Beautiful,', 'sunnier', 'lovely' ],
//  [ 'Beautiful,', 'are', 'lovely' ],
//  [ 'sunnier', 'are', 'lovely' ]
// ]

// */
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

// function countTriples(numArr) {
//   let tripletsCount = 0;

//   for (let i = 0; i < numArr.length - 2; i++) {
//     for (let j = i + 1; j < numArr.length - 1; j++) {
//       for (let k = j + 1; k < numArr.length; k++) {
//         let countOdds = [numArr[i], numArr[j], numArr[k]].filter(
//           (num) => num % 2 === 1
//         ).length;
//         if (countOdds === 2) tripletsCount++;
//       }
//     }
//   }

//   return tripletsCount || -1;
// }

// // Test cases
// console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
// console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
// console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
// console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9
