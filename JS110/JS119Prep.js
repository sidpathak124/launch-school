"use strict";

// function merge(arr1, arr2) {
//   let mergedArr = [];

//   for (let num of arr1.concat(arr2)) {
//     let idx = 0;
//     while (mergedArr[idx])
//   }
//   console.log(mergedArr);
// }

// merge([1, 5, 9], [2, 6, 8]); // [1, 2, 5, 6, 8, 9]
// merge([1, 1, 3], [2, 2]); // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5]); // [1, 4, 5]
// merge([1, 4, 5], []); // [1, 4, 5]

/*

Problem: Given a string, loop through it and sum all the numbers (only positive)
within it and then return the sum

number string continues until there is another non-num character in between

Example: "L12aun3ch Sch3oo45l" should output 63

i/p = String
o/p = Number

Algo
create a variable that holds the sum, initiate to 0
initiate the 1st loop variable i to 0
-loop through the string (parameter) until its end
-if the character is not a number, increase i by 1 and continue (guard)
-initialize a numStr to store number strings
--while the char is a number
--add number to numStr and increase the value of i by 1

convert the numStr to number type and add it to sum variable
return the sum
*/

// function sumOfNumbers(str) {
//   let nums = "0123456789";
//   let sum = 0;
//   let i = 0;

//   while (i < str.length) {
//     if (!nums.includes(str[i])) {
//       i++;
//       continue;
//     }
//     let numStr = "";
//     while (nums.includes(str[i])) {
//       numStr += str[i];
//       i++;
//     }
//     sum += Number(numStr);
//   }
//   return sum;
// }

// console.log(sumOfNumbers("L12aun3ch Sch3oo45l"));
// console.log(sumOfNumbers("HI") === 0);
// console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
// console.log(sumOfNumbers("L12aun3ch Sch3ool45") === 63);
// console.log(
//   sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") ===
//     3635
// );

// -----------------------------------------------------------------------------------------------

/*

function nextBiggerNum

i/p = Number (positive integer)
o/p = Number

Rules
rearrange the digits of the given number to make the next bigger number
If no bigger number is possible return -1

The smallest to largest change in a num can be made along the 
ascending order of its decimal place value

Algo
A helper function that takes number and two indices 
that needs to be swapped and returns the swapped number

Main funciton
Use a nested for loop to iterate through all the pairs of decimal places

-outer for loop for higher decimal place (1 to last)
--inner for loop for lower decimal place (0 to 2nd last)

--if the original number is smaller than swapped number
--return the swapped number

return -1 (no swapped number was greater than the original number)

*/

function nextBiggerNum(num) {
  let numLen = String(num).length;
  for (let i = 1; i < numLen; i++) {
    for (let j = 0; j < i; j++) {
      if (num < swap(num, i, j)) return swap(num, i, j);
    }
  }
  return -1;
}

function swap(num, i, j) {
  // i < j
  let numStr = String(num).split("").reverse();
  [numStr[i], numStr[j]] = [numStr[j], numStr[i]];
  return Number(numStr.reverse().join(""));
}

// console.log(nextBiggerNum(9));
// console.log(nextBiggerNum(12));
// console.log(nextBiggerNum(513));
// console.log(nextBiggerNum(2017));
// console.log(nextBiggerNum(111));
// console.log(nextBiggerNum(531));
// console.log(nextBiggerNum(123456789));
// console.log(nextBiggerNum(1432));

// -------------------------------------------------------------------------------------------

function scramble(str1, str2) {
  // check that str2 is a subset of str1
  str1 = str1.split("");
  str2 = str2.split("");

  for (let i = 0; i < str2.length; i++) {
    if (!str1.includes(str2[i])) return false;
    str1.splice(str1.indexOf(str2[i]), 1);
  }
  return true;
}

// console.log(scramble("javaass", "jjss")); // false
// console.log(scramble("rkqodlw", "world")); // true
// console.log(scramble("katas", "steak")); // false
// console.log(scramble("scriptjava", "javascript")); // true
// console.log(scramble("scripting the java", "javascript")); // true
// console.log(scramble("sdf", "sdfg")); // false

// -------------------------------------------------------------------------------------------

/*
function repeatedSubstringPattern()

Goal: Check if the given string is made up entirely of its repeated substring

i/p = string
o/p = boolean

Algo
-loop: slice the og string from its 1st char and keep adding more characters 
- repeat the sliced string for the length of og string
-- if the repeated str === og str, return true
return false
*/
// function repeatedSubstringPattern(str) {
//   for (let i = 1; i <= str.length / 2; i++) {
//     let substr = "";
//     while (substr.length < str.length) {
//       substr += str.slice(0, i);
//     }
//     if (substr === str) return true;
//   }
//   return false;
// }

function repeatedSubstringPattern(str) {
  for (let i = 0; i < str.length / 2; i++) {
    let substr = str.slice(0, i + 1);
    if (substr.repeat(str.length / (i + 1)) === str) return true;
  }
  return false;
}

// console.log(repeatedSubstringPattern("abab")); // true
// console.log(repeatedSubstringPattern("aba")); // false
// console.log(repeatedSubstringPattern("aabaaaba")); // true
// console.log(repeatedSubstringPattern("abaababaab")); // true
// console.log(repeatedSubstringPattern("abcabcabcabcabc")); // true
// console.log(repeatedSubstringPattern("abcabcabcabcabcd")); // false
// -------------------------------------------------------------------------------------------
/*
i/p: Array of strings
o/p: Array of strings

Goal: return an array of all the common characters in all the strings
of the array, including the duplicate ones

idea: loop through all the characters of the 1st string
and check all the strings in the array for those characters
collect the common characters in a separate container as you loop through

Algo:


*/

function commonChars(arr) {
  let common = [];
  let arrArr = arr.map((str) => str.split(""));

  for (let char of arrArr[0]) {
    let includesAll = true;
    for (let i = 1; i < arr.length; i++) {
      if (!arrArr[i].includes(char)) {
        includesAll = false;
        break;
      } else {
        arrArr[i].splice(arrArr[i].indexOf(char), 1);
      }
    }
    if (includesAll) common.push(char);
  }
  return common;
}

// console.log(commonChars(["a", "b"]));
// console.log(commonChars(["ab", "bc"]));
// console.log(commonChars(["bella", "label", "roller"]));
// console.log(commonChars(["cool", "lock", "cook"]));
// console.log(commonChars(["hello", "goodbye", "booya", "random"]));
// console.log(
//   commonChars(["aabbaaaa", "ccdddddd", "eeffee", "ggrrrrr", "yyyzzz"])
// );
// -------------------------------------------------------------------------------------------
// Write a function called longestConsecutiveAscendingWords that takes a sentence as input and finds all consecutive word  where the succeeding word is longer than the previous.  -- Siddhant
/*
function longestConsecutiveAscendingWords

i/p: String
o/p: Array of strings

Goal: Find the longest series of consecutive words in ascending order 
and return them as an array of words

main fn
split the string to words into array and store them into a variable
initialize an empty array to store the longest consecutive words
initialize an empty array for storing running consecutive words

-loop through the word array
- if their length is in ascending order or it is empty
-- add them to the running array
- else (if the next word is not in ascending order)
--if the running array is longer than the longest_array
--update the longest array
--else
--empty the running array

return the longest_array

*/

function isEmpty(arr) {
  return arr.length === 0;
}

function longestConsecutiveAscendingWords(str) {
  let wordArr = str.split(" ");
  let longestArr = [];
  let runningArr = [];

  wordArr.forEach((word) => {
    if (
      isEmpty(runningArr) ||
      runningArr[runningArr.length - 1].length < word.length
    ) {
      runningArr.push(word);
    } else {
      if (runningArr.length > longestArr.length) {
        longestArr = runningArr.slice();
      }
      runningArr = [word];
    }

    if (runningArr.length > longestArr.length) longestArr = runningArr.slice();
  });

  return longestArr;
}
// console.log(
//   longestConsecutiveAscendingWords(
//     "Tiny bird flew over the peaceful countryside"
//   )
// ); // [ 'the', 'peaceful', 'countryside' ]
// console.log(
//   longestConsecutiveAscendingWords(
//     "The quick brown fox jumps over the lazy dog"
//   )
// ); // [ 'The', 'quick' ]

// console.log(
//   longestConsecutiveAscendingWords(
//     "A journey of a thousand miles begins with a single step"
//   )
// ); // [ 'A', 'journey' ]
// console.log(longestConsecutiveAscendingWords("Easy come easy go")); // [ 'Easy' ]

// -------------------------------------------------------------------------------------------

// Write a function that calculates the sum of all numbers in a nested array. The array may contain integers, nested arrays of integers, or a mix of both. (for ruby and JS don’t use flatten) -- Marc

/*

Goal: calculate sum of all nnumbers in a nested array and return the sum

i/p = nested array
o/p = number

Algo:
declare a variable to store sum: total
loop over all the elements of the n. array
if the elem is a number, add it to the total
else:
- concatenate all the elements of array at the back of original array

*/

function sumOfNestedArray(arr) {
  let sum = 0;

  while (arr.length > 0) {
    if (!Array.isArray(arr[0])) sum += arr[0];
    else {
      arr.push(...arr[0]);
    }
    arr.shift();
  }
  return sum;
}

// Test cases
// console.log(sumOfNestedArray([1, [2, 3], [4, [5, 6]]])); // 21
// console.log(sumOfNestedArray([10, [20, 30, [40]], 50])); // 150

// function sumOfNestedArray(elem, sum) {
//   if (elem.length === 0) {
//     return;
//   }
//   if (!Array.isArray(elem[0])) {
//     if (!sum) sum = elem.shift();
//     return sumOfNestedArray(elem, sum);
//   }
//   return sumOfNestedArray(elem[0]);
// }

// -------------------------------------------------------------------------------------------

// Write a function that finds the longest palindromic substring in a given sentence. A palindromic substring reads the same forwards and backwards. The function should ignore spaces, punctuation, and case. If there are multiple palindromic substrings of the same length, return the first one found. -- Pablo

/*
Goal: Find the longest palindromic substring in a string

ignore spaces, punctuations and case 

i/p = string
o/p = string

Algo
remove all the spaces, punctuations and convert all chars to lowercase
(find all the permutations of the transformed string)
- find all the leading substrings
- find all the back substrings of each leading substring (this is all substrings)
- find the palindromes amongstall the substrings
- find the longest palindrome and return it
*/

// function leadingSubstrings(str) {
//   let leadingsubstrs = [];
//   for (let i = 0; i < str.length; i++) {
//     leadingsubstrs.push(str.slice(i, str.length));
//   }
//   return leadingsubstrs;
// }

// function allSubstrings(leadingsubstrs) {
//   let allsubstrs = [];
//   leadingsubstrs.forEach((lsubstr) => {
//     for (let i = lsubstr.length; i > 0; i--) {
//       allsubstrs.push(lsubstr.slice(0, i));
//     }
//   });
//   return allsubstrs;
// }

// function isPalindrome(str) {
//   return str.split("").reverse().join("") === str;
// }

// function longestPalindromicSubstring(str) {
//   str = str.replaceAll(" ", "").toLowerCase();
//   let allsubstrs = allSubstrings(leadingSubstrings(str));

//   let longestPalindrome = "";

//   for (let i = 0; i < allsubstrs.length; i++) {
//     let current = allsubstrs[i];
//     if (isPalindrome(current) && current.length > longestPalindrome.length) {
//       longestPalindrome = current;
//     }
//   }
//   return longestPalindrome;
// }

// function isPalindrome(str) {
//   return str.split("").reverse().join("") === str;
// }

// function longestPalindromicSubstring(str) {
//   str = str.replaceAll(" ", "").toLowerCase();
//   let longestPalindrome = "";

//   for (let i = 1; i <= str.length; i++) {
//     let leadingsubstr = str.slice(0, i);
//     for (let j = str.length; j >= 0; j--) {
//       let substr = leadingsubstr.slice(j, str.length + 1);
//       if (isPalindrome(substr) && substr.length > longestPalindrome.length) {
//         longestPalindrome = substr;
//       }
//     }
//   }
//   return longestPalindrome;
// }

// // Test cases
// console.log(longestPalindromicSubstring("Madam Arora teaches malayalam")); // "malayalam"
// console.log(longestPalindromicSubstring("Nurses Run")); // "nursesrun"
// console.log(longestPalindromicSubstring("ABC")); // "a"

// -------------------------------------------------------------------------------------------
// Write a function robustSsearch that takes two arguments: an array of words and a query term. The function should return an array of words from the given array that match the query term. The function should be case insensitive, it should consider partial matches, and to account for keyboard typo should consider the that last two letters of the query term may have been reversed. -- Grant

/*
function robustSearch

i/p = array of strings, string (query term)
o/p = array of strings

Goal: filter the strings in array that contain the query term (partial matching)
- match must be case insensitive
- last two characters of query term might be reversed, 
- also 3rd last and 2nd last characters might be reversed (from test case)

Algo
create 2 twisted variations of the string
create regex to match all the variations of regexp

call filter on the array of words (arg1) and test the regexes on them

return the returning array;

*/

// function robustSearch(arr, query) {
//   let query2 =
//     query.slice(0, query.length - 2) +
//     query[query.length - 1] +
//     query[query.length - 2];

//   let regexp1 = new RegExp(query, "i");
//   let regexp2 = new RegExp(query2, "i");

//   let matches = arr.filter((word) => {
//     return regexp1.test(word) || regexp2.test(word);
//   });
//   return matches;
// }

// function lastTwoCharsReversed(str) {
//   let lastIdx = str.length - 1;
//   let secondLastIdx = str.length - 2;
//   return str.slice(0, secondLastIdx) + str[lastIdx] + str[secondLastIdx];
// }

// function robustSearch(arr, query) {
//   query = query.toLowerCase();
//   let typo = lastTwoCharsReversed(query);

//   let matches = arr.filter((word) => {
//     return word.includes(query) || word.includes(typo);
//   });
//   return matches;
// }

// // Test Cases
// console.log(
//   robustSearch(["develop", "develpo", "deep", "dive", "devel"], "devel")
// ); // ["develop", "develpo", "devel"]
// console.log(robustSearch(["apple", "banana", "cherry"], "naan")); // ["banana"]
// console.log(robustSearch(["testing", "switch", "characters"], "testnig")); // []

// -------------------------------------------------------------------------------------------

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

/*
Goal: Find the total unique numbers in the array smaller than each number in the array
store them in an array and return them

i/p: array of nums
o/p: array of nums

Algo:
declare a variable to store the results array
-loop over all the nums in array
-variable to store currentnum
-variable to store all the numssmaller (than currentnum)
--loop over all the nums in the array
--if index is the same as currentnum: continue
--if the num < currentnum and is not in the array numssmaller
---append the num to numssmaller
-push the length of numssmaller to results array
- 
*/

function smallerNumbersThanCurrent(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let numsSmaller = [];
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[j] < currentNum && !numsSmaller.includes(arr[j])) {
        numsSmaller.push(arr[j]);
      }
    }
    result.push(numsSmaller.length);
  }
  return result;
}

// p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
// p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
// p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
// p(eq(smallerNumbersThanCurrent([1]), [0]));

// let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
// let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
// p(eq(smallerNumbersThanCurrent(myArray), result));

// -------------------------------------------------------------------------------------------
/*
Goal: Find the min sum of 5 consecutive digits in the array
Exception: return null if there are less than 5 digits

i/p = Array of numbers
o/p = number

algo:
if length of arr < 5 return null (guard clause)
var to store leastsum
-loop over the array startIdx i until the 5th last element
-var to store currentsum
--loop over array from i to i + 5
--add num to currentsum
-if currentsum < leastsum: leastsum = currentsum
return leastsum
*/

function minimumSum(arr) {
  if (arr.length < 5) return null;
  let leastSum = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i <= arr.length - 5; i++) {
    let currentSum = 0;
    for (let j = i; j < i + 5; j++) {
      currentSum += arr[j];
    }
    if (currentSum < leastSum) leastSum = currentSum;
  }
  return leastSum;
}

// p(minimumSum([1, 2, 3, 4])); // null
// p(minimumSum([1, 2, 3, 4, 5, -5])); // 9
// p(minimumSum([1, 2, 3, 4, 5, 6])); //15
// p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100])); //16
// p(minimumSum([-1, -5, -3, 0, -1, 2, -4])); // -10

// -------------------------------------------------------------------------------------------

/*
Goal: Given a string, convert every 2nd character of every 3rd word to uppercase

i/p : string
o/p : string

Algo:
convert the string to array of words
loop over this array
- for every 3rd word return a copy of the word where 2nd char is uppercase

*/

function capitalizeEverySecondChar(str) {
  let capitalizedArr = str.split("").map((char, idx) => {
    if ((idx + 1) % 2 === 0) {
      return char.toUpperCase();
    }
    return char;
  });
  return capitalizedArr.join("");
}

function toWeirdCase(str) {
  let weirdWords = str.split(" ").map((word, idx) => {
    if ((idx + 1) % 3 === 0 && word.length > 1) {
      return capitalizeEverySecondChar(word);
    }
    return word;
  });

  return weirdWords.join(" ");
}

// let original = "Lorem Ipsum is simply dummy text of the printing world";
// let expected = "Lorem Ipsum iS simply dummy tExT of the pRiNtInG world";
// p(toWeirdCase(original) === expected);

// original = "It is a long established fact that a reader will be distracted";
// expected = "It is a long established fAcT that a rEaDeR will be dIsTrAcTeD";
// p(toWeirdCase(original) === expected);

// p(toWeirdCase("aaA bB c") === "aaA bB c");

// original =
//   "Mary Poppins' favorite word is " + "supercalifragilisticexpialidocious";
// expected =
//   "Mary Poppins' fAvOrItE word is " + "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS";
// p(toWeirdCase(original) === expected);

// -------------------------------------------------------------------------------------------

/*
function closestNumbers

Goal: find the pair of closest integers in the array
if more than 1 pair are equally close, return the one found first

i/p : Array of numbers
o/p : Array of numbers

Algo:

array to store pair of nums with min difference (minDiffPair)
var to store minDifference
-loop over the array from 0th to 2nd last num (firstNUm)
--loop over the array from 1st to last num (secondNum)
--- if firstNum - secondNum < minDifference
---- minDifference = firstNum - secondNum 
---- minDiffPair = [firstNum, secondNum]
*/

function closestNumbers(arr) {
  let minDiffPair;
  let minDifference = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length - 1; i++) {
    let firstNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let secondNum = arr[j];
      let currentDifference = Math.abs(firstNum - secondNum);
      if (currentDifference < minDifference) {
        minDifference = currentDifference;
        minDiffPair = [firstNum, secondNum];
      }
    }
  }
  return minDiffPair;
}

// p(closestNumbers([5, 25, 15, 11, 20]));
// p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
// p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
// p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));

// -------------------------------------------------------------------------------------------

/*
Goal: return the most repeating char in the string 

i/p = string
o/p = string

Algo:
wordObj var that stores the counts of all chars
-loop through the str
-add to wordObj if absent, increase count by 1 if already present

var to store char and maxCount (arr)
-loop through all the entries of wordObj
- find and store the char with highest count

return the char with highest count
*/

function charObject(str) {
  let charObj = {};

  str.split("").forEach((char) => {
    if (char in charObj) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  });

  return charObj;
}

function mostCommonChar(str) {
  str = str.replaceAll(" ", "").toLowerCase();
  let charObj = charObject(str);

  let maxCount = [0, 0];

  Object.entries(charObj).forEach((arr) => {
    if (arr[1] > maxCount[1]) maxCount = arr;
  });

  return maxCount[0];
}

// p(mostCommonChar("Hello World") === "l");
// p(mostCommonChar("Mississippi") === "i");
// p(mostCommonChar("Happy birthday!") === "h");
// p(mostCommonChar("aaaaaAAAA") === "a");

// let myStr = "Peter Piper picked a peck of pickled peppers.";
// p(mostCommonChar(myStr) === "p");

// myStr = "Peter Piper repicked a peck of repickled peppers. He did!";
// p(mostCommonChar(myStr) === "e");

// -------------------------------------------------------------------------------------------

const objeq = function (obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

function countLetters(str) {
  str = str.match(/[a-z]/g)?.join("");
  let charObj = {};

  str?.split("").forEach((char) => {
    if (char in charObj) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  });

  return charObj;
}

// let expected = { w: 1, o: 2, e: 3, b: 1, g: 1, n: 1 };
// p(objeq(countLetters("woebegone"), expected));

// expected = { l: 1, o: 1, w: 1, e: 4, r: 2, c: 2, a: 2, s: 2, u: 1, p: 2 };
// p(objeq(countLetters("lowercase/uppercase"), expected));

// expected = { u: 1, o: 1, i: 1, s: 1 };
// p(objeq(countLetters("W. E. B. Du Bois"), expected));

// p(objeq(countLetters("x"), { x: 1 }));
// p(objeq(countLetters(""), {}));
// p(objeq(countLetters("!!!"), {}));

// -------------------------------------------------------------------------------------------

/*

Goal : Count total number of pairs of identical numbers

i/p = array (of nums)
o/p = number

make a count object of all the numbers

calculate the sum of all the Math.floor(values/2) from countObj

*/

function pairs(arr) {
  if (arr.length === 0) return arr.length;
  let numObj = {};
  arr.forEach((num) => {
    if (num in numObj) {
      numObj[num]++;
    } else {
      numObj[num] = 1;
    }
  });

  let totalPairs = Object.values(numObj).reduce((acc, curr) => {
    return acc + Math.floor(curr / 2);
  }, 0);

  return totalPairs;
}

// p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
// p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
// p(pairs([]) === 0);
// p(pairs([23]) === 0);
// p(pairs([997, 997]) === 1);
// p(pairs([32, 32, 32]) === 1);
// p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);
// -------------------------------------------------------------------------------------------

/*
Goal: Find the longest vowel substring
- String is always non-empty, lowercase

i/p = string
o/p = number

Algo:
var that stores all vowels in an array: vowels
var that stores all the lengths of vowel
var that stores num of continuous vowels vowelsLength, init at 0

loop through all the chars of string
-if char is a vowel
-- vowelsLength++
-else
-- store vowelsLength in allVowelLengths
-- vowelsLength = 0

return the max number in allVowelLengths
*/

function longestVowelSubstring(str) {
  let vowels = "aeiou".split("");
  let allVowelLengths = [];
  let currVowelLength = 0;

  str.split("").forEach((char) => {
    if (vowels.includes(char)) {
      currVowelLength++;
    } else {
      allVowelLengths.push(currVowelLength);
      currVowelLength = 0;
    }
  });
  allVowelLengths.push(currVowelLength);
  return Math.max(...allVowelLengths);
}

// p(longestVowelSubstring("cwm")); // 0
// p(longestVowelSubstring("many")); // 1
// p(longestVowelSubstring("launchschoolstudents")); // 2
// p(longestVowelSubstring("eau")); //  3
// p(longestVowelSubstring("beauteous")); //  3
// p(longestVowelSubstring("sequoia")); //  4
// p(longestVowelSubstring("miaoued")); //  5

// -------------------------------------------------------------------------------------------
/*
i/p : str1, str2
o/p : number

Goal: Count the number of times str2 appears in str1
- overlapping strings don't count

algo1:
split str1 by str2, calculate the length of returning array (n)
return n-1

algo2:
var to store substrCount, init 0

-loop through all the indices of str1
- if str1[i] matches str2[0]
- var to store matchedChars, init 1
-- loop through all indices of str2 for its length (1 to end)
--- if str1[i+j] matches str2[j]
--- matchedchars++
--- i = i + j
--- else break;
--- if matchedchars equals str2 length
---- substrCount++

return substrCount
*/

// function countSubstrings(str1, str2) {
//   let substrCount = 0;
//   let matchedChars = 0;

//   for (let i = 0; i < str1.length; i++) {
//     // console.log(str1[i], str2[i % str2.length]);
//     if (str1[i] === str2[i % str2.length]) {
//       matchedChars++;
//       if (matchedChars === str2.length) {
//         substrCount++;
//         matchedChars = 0;
//       }
//     } else {
//       matchedChars = 0;
//     }
//   }
//   return substrCount;
// }

/*
var to store substrCount
var to store str1 index i

-loop through all the indices of str1
- var to store matchedChars, init 0
-- loop through all indices of str2 j
--- if i + j > str1.length break;
--- if str1[i+j] matches str2[j]
--- matchedchars++
---- if matchedchars equals str2 length
---- substrCount++
---- i = i + j + 1;
--- else 
--- i = i + j + 1;
--- break;

return substrCount
*/
function countSubstrings(str1, str2) {
  let substrCount = 0;
  let i = 0;

  while (i < str1.length) {
    let matchedChars = 0;
    for (let j = 0; j < str2.length; j++) {
      if (i + j > str1.length) {
        i = i + 1;
        break;
      }
      if (str1[i + j] === str2[j]) {
        matchedChars++;
        if (matchedChars === str2.length) {
          substrCount++;
          i = i + j + 1;
        }
      } else {
        i++;
        break;
      }
    }
  }
  return substrCount;
}

// function countSubstrings(str1, str2) {
//   return str1.split(str2).length - 1;
// }

// p(countSubstrings("babab", "bab")); // 1
// p(countSubstrings("babab", "ba")); // 2
// p(countSubstrings("babab", "b")); // 3
// p(countSubstrings("babab", "x")); // 0
// p(countSubstrings("babab", "x")); // 0
// p(countSubstrings("", "x")); // 0
// p(countSubstrings("bbbaabbbbaab", "baab")); // 2
// p(countSubstrings("bbbaabbbbaab", "bbaab")); // 2
// p(countSubstrings("bbbaabbbbaabb", "bbbaabb")); // 1
// -------------------------------------------------------------------------------------------

/*
function evenSubstrings

count the number of substrings of a number (in string form) that are even (numerically)

i/p : string
o/p : number

algo:
checking all the possible substrings of a given stringnum for an even number

var to store the number of even numbers, init at 0
-loop through the number from first num to end of number, i
-var that stores leadingsubstr = str[0 to i]
--loop through the currentnum from its 0 to totalLength: j
--currentNum = leadingsubstr[j to totallength]
--- convert currentNum str to number and check if it is even (helper fn)
--- if it is even increment the numEvenNum
*/

function isEven(str) {
  return Number(str) % 2 === 0;
}

function evenSubstrings(str) {
  let totalEvenNum = 0;

  for (let i = 1; i <= str.length; i++) {
    for (let j = 0; j < i; j++) {
      let substr = str.slice(j, i);
      if (isEven(substr)) totalEvenNum++;
    }
  }
  return totalEvenNum;
}

// p(evenSubstrings("1432")); //   6
// p(evenSubstrings("3145926")); //  16
// p(evenSubstrings("2718281")); //  16
// p(evenSubstrings("13579")); //   0
// p(evenSubstrings("143232")); //  12

// -------------------------------------------------------------------------------------------

/*
Goal : for a given str return a 2-element array that contains shortest substring 
and its total number of occurences
- no empty strings
- all chars are lowercase

i/p : str
o/p : an array with str and number [substr, counts]

-loop through the str from 1 to length of str : i
- substr = 0 to i
- var count = length of str / length of substr
- if substr.repeat(count) = str
-- return [substr, count];
*/

function repeatedSubstring(str) {
  for (let i = 1; i <= str.length; i++) {
    let substr = str.slice(0, i);
    let count = str.length / substr.length;

    if (substr.repeat(count) === str) return [substr, count];
  }
}

// p(eq(repeatedSubstring("xyzxyzxyz"), ["xyz", 3]));
// p(eq(repeatedSubstring("xyxy"), ["xy", 2]));
// p(eq(repeatedSubstring("xyz"), ["xyz", 1]));
// p(eq(repeatedSubstring("aaaaaaaa"), ["a", 8]));
// p(eq(repeatedSubstring("superduper"), ["superduper", 1]));

// -------------------------------------------------------------------------------------------

/*
Goal : check whether the given str is a panagram (contains
all the letters of the english alphabet)

i/p : string
o/p : boolean

var with all the alphabets (in str form) allAlpha

convert the str to only lowercase letters
convert it to arr
convert it to set
convert it back to arr
return whether it's length = 26;
*/

// function isPangram(str) {
//   let onlyChars = str.match(/[a-z]/gi).join("").toLowerCase();

//   let uniqueChars = new Set(onlyChars.split(""));
//   return Array.from(uniqueChars).length === 26;
// }

function isPangram(str) {
  let onlyChars = str.match(/[a-z]/gi).join("").toLowerCase();
  let alphaChars = [];

  for (const char of onlyChars) {
    !alphaChars.includes(char) ? alphaChars.push(char) : 1;
  }
  return alphaChars.length === 26;
}

// p(isPangram("The quick, brown fox jumps over the lazy dog!")); //   true
// p(isPangram("The slow, brown fox jumps over the lazy dog!")); //  false
// p(isPangram("A wizard’s job is to vex chumps quickly in fog.")); //   true
// p(isPangram("A wizard’s task is to vex chumps quickly in fog.")); //  false
// p(isPangram("A wizard’s job is to vex chumps quickly in golf.")); //   true

// let myStr = "Sixty zippers were quickly picked from the woven jute bag.";
// p(isPangram(myStr) === true);

// -------------------------------------------------------------------------------------------

/*
goal : check if str1 can be rearranged to form str2

i/p : str1, str2
o/p : boolean

algo:
if length of str1 not same as that of str2 return false

declare strCompare as a copy of str2 and convert it to array

-loop over all chars of str1 array
-remove a char from str1 and check if it is included in strCompare
--if it is, then remove it from strCompare
--else return false

return result of str1 and str2 are both empty
*/

function unscramble(str1, str2) {
  let strArr1 = str1.slice().split("");
  let strArr2 = str2.slice().split("");

  while (strArr2.length !== 0) {
    let currChar = strArr2.pop();
    if (strArr1.includes(currChar)) {
      strArr1.splice(strArr1.indexOf(currChar), 1);
    } else {
      return false;
    }
  }
  return true;
}

// p(unscramble("ansucchlohlo", "launchschool")); //  true
// p(unscramble("phyarunstole", "pythonrules")); //  true
// p(unscramble("phyarunstola", "pythonrules")); //  false
// p(unscramble("boldface", "coal")); //  true

// -------------------------------------------------------------------------------------------

function sevenEleven(num) {
  if (num <= 0) return 0;
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (i % 7 === 0 || i % 11 === 0) sum += i;
  }
  return sum;
}

// p(sevenEleven(10)); //  7
// p(sevenEleven(11)); //  7
// p(sevenEleven(12)); //  18
// p(sevenEleven(25)); //  75
// p(sevenEleven(100)); //  1153
// p(sevenEleven(0)); //  0
// p(sevenEleven(-100)); //  0

// -------------------------------------------------------------------------------------------

/*
goal: find the greatest product of 4 consecutive digits from the num string
- will always have more than 4 digits

i/p = string
o/p = number

algo:
var to store the maxProduct, init value 1

-loop from 1st char of string to 4th last one i
-var to store the currProduct, init value  1
--loop from i to i + 4 j
--multiply the currProduct by Number value of str[j] 
-if currProduct > maxProduct, update the maxProduct
return maxProduct
*/

function greatestProduct(numStr) {
  let maxProduct = 0;
  for (let i = 0; i <= numStr.length - 4; i++) {
    let currProduct = 1;
    for (let j = i; j < i + 4; j++) {
      currProduct *= Number(numStr[j]);
    }
    if (currProduct > maxProduct) maxProduct = currProduct;
  }
  return maxProduct;
}

// p(greatestProduct("23456") === 360); // 3 * 4 * 5 * 6
// p(greatestProduct("3145926") === 540); // 5 * 9 * 2 * 6
// p(greatestProduct("1828172") === 128); // 1 * 8 * 2 * 8
// p(greatestProduct("123987654") === 3024); // 9 * 8 * 7 * 6

// -------------------------------------------------------------------------------------------

/*

goal: count the number of unique chars in a string
that appear more than once

i/p : string (alpha-numeric)
o/p : number

algo:
convert str to all lowercase
var to store an empty obj

-loop through the str
-if a char is in obj increment it by one
-else initiate a new object with value = 1

convert the obj to entries and filter for values > 1
return the length of filtered array

*/

function distinctMultiples(str) {
  str = str.toLowerCase();
  let obj = {};

  for (const char of str) {
    obj[char] ? obj[char]++ : (obj[char] = 1);
  }
  let multipleNums = Object.entries(obj).filter((arr) => {
    return arr[1] > 1;
  });
  return multipleNums.length;
}

// p(distinctMultiples("xyz") === 0); // (none)
// p(distinctMultiples("xxyypzzr") === 3); // x, y, z
// p(distinctMultiples("xXyYpzZr") === 3); // x, y, z
// p(distinctMultiples("unununium") === 2); // u, n
// p(distinctMultiples("multiplicity") === 3); // l, t, i
// p(distinctMultiples("7657") === 1); // 7
// p(distinctMultiples("3141592653589793") === 4); // 3, 1, 5, 9
// p(distinctMultiples("2718281828459045") === 5); // 2, 1, 8, 4, 5

// -------------------------------------------------------------------------------------------

/*
function nearestPrimeSum

i/p : array
o/p : number

goal: return the number of increments (difference) needed to reach the 
nearest prime number, to the sum of numbers in the array

rules:
At least 2 elements in the array
All elements are positive integers (>0)

algo:
sum all the nums in the array and store in a var: sum
var to store the add value, init at 1

-loop until you find the nearest prime num
- increment the add value by 1 on each iteration
return add

function isPrime
algo (helper fn) if a number is a prime number

-loop over divisors from 2 to floor(n / 2) i
-if num is divisible by i return true
return false;
*/

function isPrime(num) {
  let halfNum = Math.floor(num / 2);
  for (let i = 2; i <= halfNum; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function nearestPrimeSum(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  let add = 1;
  while (!isPrime(sum + add)) {
    add++;
  }
  return add;
}

// p(nearestPrimeSum([1, 2, 3])); // 1 // Nearest prime to 6 is 7
// p(nearestPrimeSum([5, 2])); // 4 // Nearest prime to 7 is 11
// p(nearestPrimeSum([1, 1, 1])); // 2 // Nearest prime to 3 is 5
// p(nearestPrimeSum([2, 12, 8, 4, 6])); // 5 // Nearest prime to 32 is 37

// // Nearest prime to 163 is 167
// p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);

// -------------------------------------------------------------------------------------------

/*
goal: find and return the index i for the array such that
sum of all nums 0 to i-1 = sum of all nums i + 1 to end of array

sum of nums to the left of index 0 = 0
sum of nums to the right of last index = 0

i/p : array of nums
o/p : number

algo:
-loop over all the indices of array i = 0 to last
-declare a var that stores leftIdxSum, init at 0
-declare a var that stores rightIdxSum, init at 0
--loop over all nums from 0 to i-1
--add the num to leftIndexSum

--loop over all nums from i to end of array
--add the num to rightIndexSum

- if leftIdxSum = rightIdxSum return i

return -1
*/

function equalSumIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftIdxSum = 0;
    let righttIdxSum = 0;

    for (let j = 0; j < i; j++) {
      leftIdxSum += arr[j];
    }

    for (let j = i + 1; j < arr.length; j++) {
      righttIdxSum += arr[j];
    }
    if (leftIdxSum === righttIdxSum) return i;
  }
  return -1;
}

// p(equalSumIndex([1, 2, 4, 4, 2, 3, 2])); //  3
// p(equalSumIndex([7, 99, 51, -48, 0, 4])); //  1
// p(equalSumIndex([17, 20, 5, -60, 10, 25])); //  0

// // The following test case could return 0 or 3. Since we're
// // supposed to return the smallest correct index, the correct
// // return value is 0.
// p(equalSumIndex([0, 20, 10, -60, 5, 25])); //  0
// -------------------------------------------------------------------------------------------

function oddFellow(arr) {
  let numCounts = {};

  arr.forEach((num) => {
    numCounts[num] ? numCounts[num]++ : (numCounts[num] = 1);
  });

  let oddCounts = Object.entries(numCounts).filter((arr) => {
    return arr[1] % 2 === 1;
  });
  return Number(oddCounts[0][0]);
}

// p(oddFellow([4]) === 4);
// p(oddFellow([7, 99, 7, 51, 99]) === 51);
// p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
// p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
// p(oddFellow([0, 0, 0]) === 0);

// -------------------------------------------------------------------------------------------

function whatIsDifferent(arr) {
  let numCounts = {};

  arr.forEach((num) => {
    numCounts[num] ? numCounts[num]++ : (numCounts[num] = 1);
  });

  let oneCount = Object.entries(numCounts).filter((arr) => {
    return arr[1] === 1;
  });
  return Number(oneCount[0][0]);
}

// p(whatIsDifferent([0, 1, 0]) === 1);
// p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
// p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
// p(whatIsDifferent([3, 4, 4, 4]) === 3);
// p(whatIsDifferent([4, 4, 4, 3]) === 3);

// -------------------------------------------------------------------------------------------

/*
goal: find out if there is any substr (2 char or more long)
that appears in both the given strings

i/p : string, string
o/p : boolean



algo:
declare substrArr1 that stores all the substrs of str1
declare substrArr2 that stores all the substrs of str2

-loop over substrs of substrArr1 
-and find if there is any substr that is included in substrArr2
- if there is, return true

return false

helper fn allSubstrs
algo:
var that stores all the substrs
-loop over all the indices from 2 to length of str i
--loop over all indices from 0 to i - 2
-- slice the str from i to j and append to the var substrs
return substrs;
*/

function allSubstrs(str) {
  let substrs = [];

  for (let i = 2; i <= str.length; i++) {
    for (let j = 0; j <= i - 2; j++) {
      substrs.push(str.slice(j, i));
    }
  }
  return substrs;
}

function substringTest(str1, str2) {
  let str1Substrs = allSubstrs(str1.toLowerCase());
  let str2Substrs = allSubstrs(str2.toLowerCase());

  for (const substr of str1Substrs) {
    if (str2Substrs.includes(substr)) return true;
  }
  return false;
}

// console.log(substringTest("Something", "Fun"));
// console.log(substringTest("Something", "Home"));
// console.log(substringTest("Something", "Fun"));
// console.log(substringTest("Something", ""));
// console.log(substringTest("", "Something"));
// console.log(substringTest("BANANA", "banana"));
// console.log(substringTest("test", "lllt"));
// console.log(substringTest("", ""));
// console.log(substringTest("1234567", "541265"));
// console.log(
//   substringTest("supercalifragilisticexpialidocious", "SoundOfItIsAtrociou")
// );

// -------------------------------------------------------------------------------------------

/*
goal : find the longest common prefix amongst an array of strings
if there are no common prefix, return "" (an empty string)
all i/ps are in lowercase

i/p : an array of strings
o/p : string

algo:
declare a var to store string, init at "" common
-loop over all the characters of the first string in arr
-if all the strs in array have the char push it to common
-else break

return common
*/

function longestCommonPrefix(arr) {
  let common = "";

  for (let i = 0; i < arr[0].length; i++) {
    let currentChar = arr[0][i];
    if (arr.every((str) => str[i] === currentChar)) {
      common += currentChar;
    } else {
      break;
    }
  }
  return common;
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(
//   longestCommonPrefix(["interspecies", "interstellar", "interstate"])
// );
// console.log(longestCommonPrefix(["throne", "dungeon"]));
// console.log(longestCommonPrefix(["throne", "throne"]));
// console.log(longestCommonPrefix(["thronehood", "throne"]));
// console.log("");
// -------------------------------------------------------------------------------------------

/*
goal : given a string of nums find the total number of substrings with even numerical value

i/p : str
o/p : number

algo:
declare a variable that stores evenNums, init at 0
-loop over the substr from 1 to str length, i
--loop over the substr from 0 to str length - 1, j
--create a substr by slicing str from j to i
--if the substr is an even number, increment evenNums by 1

return evenNums
*/

function isEven(str) {
  return Number(str) % 2 === 0;
}

function evenSubstrings(str) {
  let evenNums = 0;

  for (let i = 1; i <= str.length; i++) {
    for (let j = 0; j < i; j++) {
      let currSubstr = str.slice(j, i);
      if (isEven(currSubstr)) evenNums++;
    }
  }
  return evenNums;
}

// p(evenSubstrings("1432") === 6);
// p(evenSubstrings("3145926") === 16);
// p(evenSubstrings("2718281") === 16);
// p(evenSubstrings("13579") === 0);
// p(evenSubstrings("143232") === 12);

// Implement a function, capitalize, that capitalizes all words in a sentences. However, only capitalize if the word is followed by a word starting with a vowel (for Ruby don’t use capitalize). -- Mustafa

/*
goal : in a given str of words, if the next word starts with a vowel,
capitalize the current word

i/p: str
o/p: str

algo:
declare a var that stores the capitalized string capStr
convert the str to arr and store it strArr

-loop over all the words of strArr until 2nd last word, i
-if i + 1th word's 1st char is a vowel (helper fn isVowel)
--capitalize the word and append it to capStr
-else
--append original word to capStr
append the last word to capStr
return the capStr after converting it back to str
*/

function isVowel(char) {
  let vowels = "aeiou".split("");
  return vowels.includes(char);
}

function capitalize(str) {
  let capStr = [];
  let strArr = str.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    let currWord = strArr[i];
    let nextWord = strArr[i + 1];
    if (nextWord && isVowel(nextWord[0])) {
      let capWord = currWord[0].toUpperCase() + currWord.slice(1);
      capStr.push(capWord);
    } else {
      capStr.push(currWord);
    }
  }
  return capStr.join(" ");
}

// Test cases
// console.log(capitalize("hello apple world")); // "Hello apple world"
// console.log(capitalize("this is an umbrella")); // "This Is An umbrella"
// console.log(capitalize("every vowel starts an echo")); // "every vowel Starts An echo"
// console.log(capitalize("under the oak tree")); // "under The oak tree"
// console.log(capitalize("a quick brown fox")); // "a quick brown fox"

/*
P.
i: a string
o: a string

r/e:
- capitalize words that are followed by a word starting with a wovel

r/i:
- I assume input string use only letters
- Last word should never get capitalized since there is no word following
- If input is one word do not capitalize
- I assume there is one space between words

D.
- array of strings

A.
high-level:
- split the string into words array
  - if array has length one, return the string
- iterate through the words and capitalize the current word if the next word
starts with a wovel

detailed:
- create a variable named words and assign the words array
- if words has size one return the single word (guard clause)
- declare results var and init to empty array
- iterate through the words
  - if there is next word and next word starts with a wovel
    - capitalize current word and push to results array
  - else push the current word to results array
- convert the words array to string and return

example run:
"hello apple world" => ['hello', 'apple', 'world']
current => 'word' next => undefined
Hello apple world
*/

// function capitalize(str) {
//   let words = str.split(" ");

//   if (words.length === 1) {
//     return words[0];
//   }

//   let results = words.map((word, idx) => {
//     let nextWord = words[idx + 1];
//     if (nextWord && ["a", "e", "i", "o", "u"].includes(nextWord.charAt(0))) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     } else {
//       return word;
//     }
//   });

//   return results.join(" ");
// }

// Write a function that returns the count of triple of numbers that have 2 odd numbers and 1 even. If there’s none return -1. All numbers in the array will be integers greater than 0. -- Sorim
function twoOddOneEven(...nums) {
  return [...nums].filter((num) => num % 2 === 1).length === 2;
}

function countTriples(arr) {
  let counts = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (twoOddOneEven(arr[i], arr[j], arr[k])) counts++;
      }
    }
  }
  return counts || -1;
}

// Test cases
// console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
// console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
// console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
// console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9

// # Write a function, `snakecase`, that transforms each word in a sentence to alternate between lower (even index value) and upper (odd index value) cases when the word before or after it  begins with `"s"`. -- Siddhant

/*
goal : given a str, convert every word into alternating upper 
and lower (even indices) case letters if the word before or after it begins with "s"

i/p : str
o/p : str

algo:
declare a var that stores the new str snakeStr, init empty arr
convert the str into an array of words

-loop over all the words in array
-declare a var to store the current word
-declare a var before that stores the 1st letter of previous word
-declare a var after that stores the 1st letter of next word
--if before or after words to lowercase are "s"
--declare a snakeWord, empty string
---loop over all the chars of the current word
--- if charidx is even add original char
---else add original char convert char to uppercase and add to snakeWord
--add snakeWord to snakeStr
--else add original word to snakeStr

return snakeStr after joining
*/

function snakecase(str) {
  let snakeStr = [];
  let strArr = str.toLowerCase().split(" ");

  for (let i = 0; i < strArr.length; i++) {
    let currWord = strArr[i];
    let before = i === 0 ? "" : strArr[i - 1][0];
    let after = i === strArr.length - 1 ? "" : strArr[i + 1][0];

    if (before.toLowerCase() === "s" || after.toLowerCase() === "s") {
      let snakeWord = "";
      for (let j = 0; j < currWord.length; j++) {
        if (j % 2 === 0) {
          snakeWord += currWord[j].toLowerCase();
        } else {
          snakeWord += currWord[j].toUpperCase();
        }
      }
      snakeStr.push(snakeWord);
    } else {
      snakeStr.push(currWord);
    }
  }
  return snakeStr.join(" ");
}

// Test cases
// console.log(snakecase("Snakes slither silently")); // "sNaKeS sLiThEr sIlEnTlY"
// console.log(snakecase("simple sentence structure")); // "sImPlE sEnTeNcE sTrUcTuRe"
// console.log(snakecase("apples are sweet")); // "apples aRe sweet"
// console.log(snakecase("swiftly swimming swans")); // "sWiFtLy sWiMmInG sWaNs"
// console.log(snakecase("the sun sets slowly")); // "tHe sUn sEtS sLoWlY"
// console.log(snakecase("A quick brown fox")); // "A quick brown fox"

// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

function substrings(str) {
  let allsubstrs = [];

  for (let i = 2; i <= str.length; i++) {
    for (let j = 0; j < i - 1; j++) {
      allsubstrs.push(str.slice(j, i));
    }
  }
  return allsubstrs;
}

function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
}

function palindromeSubstrings(str) {
  let palSubstrs = [];
  let allsubstrs = substrings(str);

  allsubstrs.forEach((substr) => {
    if (isPalindrome(substr)) palSubstrs.push(substr);
  });
  return palSubstrs;
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"));
// should return: ["ili"]
//
console.log(palindromeSubstrings("abcddcbA"));
// should return: ["bcddcb", "cddc", "dd"]

console.log(palindromeSubstrings("palindrome"));
// should log: []

console.log(palindromeSubstrings(""));
// should log: []
