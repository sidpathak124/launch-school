"use strict";

// const obj = {
//   text: "Remove occurances of the letter e after the word 'letter' in this sentence",
// };
// Object.freeze(obj);

// /**
//  * BONUS:
//  * A single function should satisfy the strings defined 'obj' and the bonus objects below
//  * The function should only take a single argument of type object
//  * The function should be able to accomidate any word between the single quotes
//  */
// const bonusObj1 = {
//   text: "Remove occurances of the letter e after 'the' in this sentence",
// };
// const bonusObj2 = {
//   text: "The letter e should not appear after the word 'not' in this sentence",
// };
// Object.freeze(bonusObj1);
// Object.freeze(bonusObj2);

// function forSolution(obj) {
//   const wordIdx = obj["text"].lastIndexOf("'");
//   let unchangedStr = obj["text"].slice(0, wordIdx);
//   const strToChange = obj["text"].slice(wordIdx);

//   for (const char of strToChange) {
//     if (char !== "e") {
//       // console.log(char, typeof char);
//       unchangedStr += char;
//     }
//   }
//   return unchangedStr;
// }

// function whileSolution(obj) {
//   const wordIdx = obj["text"].lastIndexOf("'");
//   let unchangedStr = obj["text"].slice(0, wordIdx);
//   const strToChange = obj["text"].slice(wordIdx);
//   let charNum = 0;

//   while (strToChange[charNum]) {
//     if (strToChange[charNum] !== "e") {
//       unchangedStr += strToChange[charNum];
//     }
//     charNum++;
//   }
//   return unchangedStr;
// }

// function doWhileSolution(obj) {
//   const wordIdx = obj["text"].lastIndexOf("'");
//   let unchangedStr = obj["text"].slice(0, wordIdx);
//   const strToChange = obj["text"].slice(wordIdx);
//   let charNum = 0;

//   do {
//     if (strToChange[charNum] !== "e") {
//       unchangedStr += strToChange[charNum];
//     }
//     charNum++;
//   } while (strToChange[charNum]);
//   return unchangedStr;
// }

// function forEachSolution(obj) {
//   const wordIdx = obj["text"].lastIndexOf("'");
//   let unchangedStr = obj["text"].slice(0, wordIdx);
//   const strToChange = obj["text"].slice(wordIdx);

//   strToChange.split("").forEach((char) => {
//     if (char !== "e") {
//       unchangedStr = unchangedStr.concat(char);
//     }
//   });
//   return unchangedStr;
// }

// function filterSolution(obj) {
//   const wordIdx = obj["text"].lastIndexOf("'");
//   let unchangedStr = obj["text"].slice(0, wordIdx);
//   const strToChange = obj["text"].slice(wordIdx);

//   const strToChangeArr = strToChange.split("").filter((char) => char !== "e");
//   return unchangedStr + strToChangeArr.join("");
// }

// function mapSolution(obj) {
//   const wordIdx = obj["text"].lastIndexOf("'");
//   let unchangedStr = obj["text"].slice(0, wordIdx);
//   const strToChange = obj["text"].slice(wordIdx);

//   const strToChangeArr = strToChange.split("").map((char) => {
//     if (char !== "e") {
//       return char;
//     }
//   });
//   return unchangedStr + strToChangeArr.join("");
// }

// function reduceSolution(obj) {
//   const wordIdx = obj["text"].lastIndexOf("'");
//   let unchangedStr = obj["text"].slice(0, wordIdx);
//   const strToChange = obj["text"].slice(wordIdx);

//   const strToChangeArr = strToChange.split("").reduce((acc, char) => {
//     return char !== "e" ? acc + char : acc;
//   }, "");
//   return unchangedStr + strToChangeArr;
// }

// console.log(reduceSolution(obj));
// console.log(reduceSolution(bonusObj1));
// console.log(reduceSolution(bonusObj2));

// -------------------------------------------------------------------------------------------------

// function generateArr(start, finish) {
//   const range = finish - start + 1;
//   return [...new Array(range)].map((_, idx) => start + idx);
// }
// function generateArr(start, finish) {
//   const arr = [];

//   for (let i = start; i <= finish; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// console.log(generateArr(1, 10));
// console.log(generateArr(5, 12));
// console.log(generateArr(19, 25));

// -------------------------------------------------------------------------------------------------

// function countOccurences(str) {
//   const counts = {};
//   str.split("").forEach((char) => {
//     if (char in counts) {
//       counts[char]++;
//     } else {
//       counts[char] = 1;
//     }
//   });
//   return counts;
// }

// console.log(countOccurences("oyeoyeoyeeeeoyeoyeoyeee"));

// function objToString(obj) {
//   let str = "";
//   for (const arr of Object.entries(obj)) {
//     console.log(arr);
//     str += arr[0].repeat(arr[1]);
//   }
//   return str;
// }

// console.log(objToString({ a: 1, k: 3, g: 2 }));

// -------------------------------------------------------------------------------------------------

// function countWords(str) {
//   const strArray = str
//     .toLowerCase()
//     .replace(/[^a-zA-Z ]/g, "")
//     .split(" ");

//   const strObj = {};

//   strArray.forEach((word) => {
//     if (word in strObj) {
//       strObj[word]++;
//     } else {
//       strObj[word] = 1;
//     }
//   });
//   return strObj;
// }

// console.log(countWords("hello world"));
// console.log(countWords("Hello, hello world"));

// -------------------------------------------------------------------------------------------------

// function countSubStr(str, subStr) {
//   let startIdx = 0;
//   const subStrIndices = [];
//   let subStrIdx = str.slice(startIdx).indexOf(subStr);

//   while (subStrIdx != -1) {
//     subStrIndices.push(startIdx + subStrIdx);
//     startIdx += subStrIdx + 1;
//     subStrIdx = str.slice(startIdx).indexOf(subStr);
//   }
//   return subStrIndices.length;
// }

// NOT COMPLETED
// function countSubStr(str, subStr) {
//   console.log(str.matchAll(subStr));
//   return;
// }

// console.log(countSubStr("Hello, Hello! How are you doing Mellody?", "ello")); // => 3

// -------------------------------------------------------------------------------------------------

// function countEle(arr, ele) {
//   let count = 0;

//   arr.forEach((item) => (item === ele ? count++ : count));

//   console.log(count);
// }

// countEle(["name", "year", "age", "name"], "name"); // => 2
// countEle([1, 2, 3, 4, 5, 1, 2, 3, 4], 2); //=> 2
// countEle(
//   [...new Array(30)].map((ele) => Math.floor(Math.random() * 3 + 1)),
//   1
// );

// -------------------------------------------------------------------------------------------------

// function countDuplic(str) {
//   const wordArr = str.split(" ");
//   const duplicateWordCount = {};

//   wordArr.forEach((word) =>
//     word in duplicateWordCount
//       ? duplicateWordCount[word]++
//       : (duplicateWordCount[word] = 0)
//   );

//   const duplicateWordCountArr = Object.entries(duplicateWordCount);
//   const totalDuplicates = duplicateWordCountArr.reduce(
//     (acc, curr) => acc + curr[1],
//     0
//   );
//   console.log(duplicateWordCountArr);
//   console.log(totalDuplicates);
// }

// countDuplic("one two one three two"); //=> 2
// countDuplic("flower cat cat dog flower dog"); //=> 3

// -------------------------------------------------------------------------------------------------

// function countDuplic(str) {
//   const charCount = {};
//   str.split("").forEach((char) => {
//     if (char in charCount) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   });

//   let counts = 0;
//   for (const value of Object.values(charCount)) {
//     if (value === 2) counts++;
//   }
//   console.log(counts);
// }

// countDuplic("123123"); //=> 3
// countDuplic("abcdea ab"); //=> 1

// -------------------------------------------------------------------------------------------------

// function appearTwice(arr) {
//   const countEle = arr.reduce((acc, curr) => {
//     if (acc.hasOwnProperty(curr)) {
//       acc[curr]++;
//     } else {
//       acc[curr] = 1;
//     }
//     return acc;
//   }, {});

//   const arrTwice = Object.entries(countEle).reduce((acc, biArr) => {
//     if (biArr[1] === 2) {
//       acc.push(biArr[0]);
//     }
//     return acc;
//   }, []);
//   console.log(arrTwice);
// }

// appearTwice([1, 2, undefined, "hello", 2, undefined]); //=> [2, undefined];

// -------------------------------------------------------------------------------------------------

// function sorting(arr) {
//   console.log(arr.sort());
// }

// sorting(["a", "d", "a", "b"]); //=> ['a', 'a', 'b', 'd'];
// sorting(["banana", "apple", "pear"]); //=> ['apple', 'banana', 'pear']

// -------------------------------------------------------------------------------------------------

// function sorting(arr) {
//   // sort in ascending order
//   arr.sort((a, b) => (a - b < 0 ? 1 : -1));

//   console.log(arr);
// }

// sorting([3, 5, 1, 2, 11, 456]); //=> [456,11,5,3,2,1];

// -------------------------------------------------------------------------------------------------

// function sorting(arr) {
//   // sort in ascending order
//   arr.sort((a, b) => (a - b > 0 ? 1 : -1));

//   console.log(arr);
// }

// sorting([3, 5, 1, 2, 11, 456]); //=> [456,11,5,3,2,1];

// -------------------------------------------------------------------------------------------------

// function sorting(arr) {
//   // sort in ascending order of length
//   arr.sort((a, b) => (a.length > b.length ? 1 : -1));

//   console.log(arr);
// }

// sorting(["o", "hello", "llo", "ello", "lo"]); // => ['o', 'lo', 'llo', 'ello', 'hello']

// -------------------------------------------------------------------------------------------------

// function sorting(arr) {
//   // sort in ascending order of length
//   arr.sort((a, b) => (a.toLowerCase() >= b.toLowerCase() ? 1 : -1));

//   console.log(arr);
// }

// sorting(["goo", "A", "aB", "Ab", "c", "C"]); // => ['A', 'aB', 'Ab', 'c', 'C', 'goo']

// -------------------------------------------------------------------------------------------------

// function sorting(arr) {
//   const sorted = arr.sort((obj1, obj2) => (obj1["a"] < obj2["a"] ? 1 : -1));
//   console.log(sorted);
// }

// sorting([{ a: 1 }, { a: 0 }, { a: 3 }]); //=> [{a:0}, {a:1}, {a:3}];

// -------------------------------------------------------------------------------------------------

// function sum(subArr) {
//   return subArr.reduce((acc, num) => acc + num, 0);
// }
// function sorting(arr) {
//   const sorted = arr.sort((subArr1, subArr2) =>
//     sum(subArr1) < sum(subArr2) ? 1 : -1
//   );

//   console.log(sorted);
// }

// sorting([
//   [1, 2, 3],
//   [0, 1],
//   [2, 1],
// ]); //=> [[0,1], [2,1], [1,2,3]]

// -------------------------------------------------------------------------------------------------

// function allLeadSubstr(str) {
//   const substrings = [];

//   for (let i = 1; i <= str.length; i++) {
//     substrings.push(str.slice(0, i));
//   }

//   return substrings;
// }
// console.log(allLeadSubstr("abcd")); // => ['a', 'ab', 'abc', 'abcd'];

// -------------------------------------------------------------------------------------------------

// function allLeadSubstr(str) {
//   const substrings = [];

//   for (let i = 3; i <= str.length; i++) {
//     substrings.push(str.slice(0, i));
//   }

//   return substrings;
// }

// console.log(allLeadSubstr("abcdef")); //=> ['abc', 'abcd', 'abce', 'abcdef'];

// -------------------------------------------------------------------------------------------------

// function allLeadSubstr(str) {
//   const substrings = [];

//   for (let i = 4; i > 0; i--) {
//     substrings.push(str.slice(0, i));
//   }

//   return substrings;
// }

// console.log(allLeadSubstr("abcdefg")); //=> ['abcd', 'abc', 'ab', 'a'];

// -------------------------------------------------------------------------------------------------

function minUmbrellas(arr) {
  const needUmberella = ["rainy", "thunderstorms"];
  // const dontNeedUmberella = ["clear", "sunny", "cloudy", "overcast", "windy"];
  let tookUmbrellaWhileGoing = false;
  let tookUmbrellaWhileComing = false;
  let totalUmbrellasNeeded = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      if (needUmberella.includes(arr[i]) && !tookUmbrellaWhileComing) {
        totalUmbrellasNeeded++;
        tookUmbrellaWhileGoing = true;
      } else if (needUmberella.includes(arr[i]) && tookUmbrellaWhileComing) {
        tookUmbrellaWhileGoing = true;
      } else {
        tookUmbrellaWhileGoing = false;
      }
    } else {
      if (needUmberella.includes(arr[i]) && !tookUmbrellaWhileGoing) {
        totalUmbrellasNeeded++;
        tookUmbrellaWhileComing = true;
      } else if (needUmberella.includes(arr[i]) && tookUmbrellaWhileGoing) {
        tookUmbrellaWhileComing = true;
      } else {
        tookUmbrellaWhileComing = false;
      }
    }
  }

  // return totalUmbrellasNeeded;
  console.log(totalUmbrellasNeeded);
}

// minUmbrellas(["rainy", "clear", "rainy", "cloudy"]); // 2
// minUmbrellas(["sunny", "windy", "sunny", "clear"]); // 0
// minUmbrellas(["sunny", "rainy", "sunny", "rainy"]); // 2
// minUmbrellas(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"]); // 1
// minUmbrellas([
//   // 1
//   "windy",
//   "sunny",
//   "windy",
//   "rainy",
//   "clear",
//   "sunny",
//   "windy",
//   "sunny",
//   "thunderstorms",
//   "windy",
// ]);

// ----------------------------------------PEDAC-----------------------------------------------

// function sumOfMultiples(num, factors = [3, 5]) {
//   const multiples = [];

//   for (let i = 1; i < num; i++) {
//     factors.forEach((factr) => {
//       if (i % factr === 0 && !multiples.includes(i)) {
//         multiples.push(i);
//       }
//     });
//   }
//   console.log(multiples);
//   const total = multiples.reduce((acc, curr) => acc + curr, 0);
//   return total;
// }

// function sumOfMultiples(num, factors = [3, 5]) {
//   const multiples = [];
//   for (const factr of factors) {
//     let multiple = factr;
//     while (multiple < num) {
//       if (multiple % factr === 0 && !multiples.includes(multiple)) {
//         multiples.push(multiple);
//       }
//       multiple++;
//     }
//   }
//   console.log(multiples);
//   let total = multiples.reduce((acc, curr) => acc + curr, 0);
//   return total;
// }

// console.log(sumOfMultiples(20, [2, 3]));
// console.log(sumOfMultiples(20));
// console.log(sumOfMultiples(100, [7, 13]));
// console.log(sumOfMultiples(20, [3]));
// console.log(sumOfMultiples(20, [5]));
// console.log(sumOfMultiples(1));
// console.log(sumOfMultiples(20, [19]));

// -------------------------------------------------------------------------------------------------
// function arrayEqual(arr1, arr2) {
//   return (
//     arr1.length === arr2.length && arr1.every((val, idx) => val === arr2[idx])
//   );
// }

// function isAnagram(str1, str2) {
//   const sortedStr1 = str1.split("").sort((a, b) => (a > b ? 1 : -1));
//   const sortedStr2 = str2.split("").sort((a, b) => (a > b ? 1 : -1));
//   console.log(arrayEqual(sortedStr1, sortedStr2));
// }

// isAnagram("aba", "aab");
// isAnagram("aba", "ac");

// -------------------------------------------------------------------------------------------------

// function isPanagram(str) {
//   const alphaStr = str
//     .toLowerCase()
//     .split("")
//     .filter((char) => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122);

//   const uniqueAlpha = Array.from(new Set(alphaStr));
//   const sortedUniqueAlpha = uniqueAlpha.sort((a, b) => (a > b ? 1 : -1));
//   console.log(sortedUniqueAlpha.length === 26);
// }

// isPanagram("The quick brown fox jumped over the lazy sleeping dog,");
// isPanagram("abcd");
// isPanagram("Bawds jog, flick quartz, vex nymphs.");

// -------------------------------------------------------------------------------------------------

// function isIsogram(str) {
//   const arrStr = str.toLowerCase().split("");
//   const uniqueArrStr = Array.from(new Set(arrStr));

//   console.log(arrStr.length === uniqueArrStr.length);
// }

// isIsogram("dermatoglyphics"); // true
// isIsogram("alabama"); //false

// -------------------------------------------------------------------------------------------------

// function isPalindrome(str) {
//   const strArr = str.toLowerCase().split("");
//   const alphaStrArr = strArr.filter(
//     (char) => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122
//   );

//   console.log(alphaStrArr.join());
//   console.log(alphaStrArr.reverse().join());
//   console.log(alphaStrArr.join() === alphaStrArr.reverse().join());
// }

// isPalindrome("kayak"); //true
// isPalindrome("apple"); //false
// isPalindrome("Able was I ere I saw Elba."); //true

// -------------------------------------------------------------------------------------------------

// function isLipogram(str, bannedChar) {
//   for (const char of str) {
//     if (char === bannedChar) {
//       return false;
//     }
//   }
// }

// console.log(isLipogram("abcdefghijklmnopqrstuvwxy", "z")); //true
// console.log(isLipogram("abc", "d")); //false

//-------------------------------------------------------------------------------------------

// function isTautonym(str) {
//   const half = Math.floor(str.length / 2);

//   let firstHalf = str.slice(0, half);
//   let secondHalf =
//     str.length % 2 === 0
//       ? str.slice(half, str.length)
//       : str.slice(half + 1, str.length);

//   console.log(firstHalf === secondHalf);
// }

// isTautonym("Pago Pago"); //true
// isTautonym("so-so"); //true
// isTautonym("tom-tom"); //true
// isTautonym("abcd"); //false

//-------------------------------------------------------------------------------------------

// function isAmbigram(str) {
//   const ambigramsObj = {
//     N: "N",
//     I: "I",
//     l: "l",
//     o: "o",
//     O: "O",
//     p: "q",
//     b: "d",
//     d: "b",
//     w: "m",
//     m: "w",
//     M: "W",
//     W: "M",
//     u: "n",
//     n: "u",
//     s: "s",
//     S: "S",
//     x: "x",
//     X: "X",
//     z: "z",
//     Z: "Z",
//     0: "0",
//     1: "1",
//     8: "8",
//     6: "9",
//     9: "6",
//   };
//   let ambigram = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     if (ambigramsObj[str[i]]) {
//       ambigram += ambigramsObj[str[i]];
//     } else {
//       return false;
//     }
//   }
//   console.log(ambigram);
//   return str === ambigram;
// }

// console.log(isAmbigram("SWIMS"));
// console.log(isAmbigram("NOON"));
// console.log(isAmbigram("sun"));
// console.log(isAmbigram("SIS"));
// console.log(isAmbigram("1881"));
// console.log(isAmbigram("1961"));
// console.log(isAmbigram("91016"));

//-------------------------------------------------------------------------------------------

// function isAlphabetical(str) {
//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] > str[i]) return false;
//   }
//   return true;
// }

// console.log(isAlphabetical("abcdefg")); //true
// console.log(isAlphabetical("adegttksn")); //false
// console.log(isAlphabetical("abcdefhgij")); //
// console.log(isAlphabetical("azbcdefgh")); //
// console.log(isAlphabetical("nopqrstuzz")); //

//-------------------------------------------------------------------------------------------

// function hasOnlyVowels(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   for (const char of str.split("")) {
//     if (!vowels.includes(char)) return false;
//   }
//   return true;
// }

// console.log(hasOnlyVowels("aaeuiooae"));
// console.log(hasOnlyVowels("tgbhrrf_00&"));

//-------------------------------------------------------------------------------------------

// function hasOnlyConsonants(str) {
//   const small = "bcdfghjklmnpqrstvwxyz";
//   const consonants = (small + small.toUpperCase()).split("");

//   for (const char of str.split("")) {
//     if (!consonants.includes(char)) return false;
//   }
//   return true;
// }

// console.log(hasOnlyConsonants("typRRWQQL"));
// console.log(hasOnlyConsonants("AccdE4$$ __ "));

//-------------------------------------------------------------------------------------------

function segregate(str) {
  const segregateObj = {
    lettersUpper: "",
    lettersLower: "",
    numbers: "",
    "other characters": "",
  };
  const lower = "abcdefghijklmnopqrstuvwxyz".split("");
  const upper = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  const numbers = "1234567890".split("");

  for (const char of str) {
    switch (true) {
      case lower.includes(char):
        segregateObj["lettersLower"] += char;
        break;
      case upper.includes(char):
        segregateObj["lettersUpper"] += char;
        break;
      case numbers.includes(char):
        segregateObj["numbers"] += char;
        break;
      default:
        segregateObj["other characters"] += char;
    }
  }

  console.log(segregateObj);
}

segregate("aad559 $%,"); //{lettersUpper: '', lettersLower: 'aad', numbers: '559', other characters: '$%,' }
segregate("11AB"); //{lettersUpper: 'AB', lettersLower: '', numbers: '', other characters: '' }
