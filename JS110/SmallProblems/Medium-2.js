"strict";
function isLowerCaseChar(char) {
  return char >= "a" && char <= "z";
}

function isUpperCaseChar(char) {
  return char >= "A" && char <= "Z";
}

// function letterPercentages(str) {
//   let obj = {};
//   let divisionOfChars = ["", "", ""];

//   for (let char of str) {
//     if (isLowerCaseChar(char)) {
//       divisionOfChars[0] += char;
//     } else if (isUpperCaseChar(char)) {
//       divisionOfChars[1] += char;
//     } else {
//       divisionOfChars[2] += char;
//     }
//   }
//   let percentageOfChars = divisionOfChars.map((type) =>
//     ((type.length * 100) / str.length).toFixed(2)
//   );

//   obj["lowercase"] = percentageOfChars[0];
//   obj["uppercase"] = percentageOfChars[1];
//   obj["neither"] = percentageOfChars[2];

//   return obj;
// }

// function letterPercentages(str) {
//   let obj = { lowercase: 0, uppercase: 0, neither: 0 };

//   for (let char of str) {
//     if (isLowerCaseChar(char)) {
//       obj.lowercase++;
//     } else if (isUpperCaseChar(char)) {
//       obj.uppercase++;
//     } else {
//       obj.neither++;
//     }
//   }
//   for (let key in obj) {
//     obj[key] = ((obj[key] * 100) / str.length).toFixed(2);
//   }
//   return obj;
// }

// function letterPercentages(str) {
//   let count = str.length;
//   let obj = {
//     lowercase: (((str.match(/[a-z]/g) || []).length * 100) / count).toFixed(2),
//     uppercase: (((str.match(/[A-Z]/g) || []).length * 100) / count).toFixed(2),
//     neither: (((str.match(/[^a-z]/gi) || []).length * 100) / count).toFixed(2),
//   };

//   return obj;
// }

// function letterPercentages(str) {
//   let count = str.length;

//   function calculatePercentage(regex) {
//     let matchingChars = str.match(regex) || [];
//     return ((matchingChars.length * 100) / count).toFixed(2);
//   }

//   return {
//     lowercase: calculatePercentage(/[a-z]/g),
//     uppercase: calculatePercentage(/[A-Z]/g),
//     neither: calculatePercentage(/[^a-z]/gi),
//   };
// }

// console.log(letterPercentages("abCdef 123"));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// console.log(letterPercentages("AbCd +Ef"));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// console.log(letterPercentages("123"));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// ------------------------------------------------------------------------------------------------
/*
Invalid triangle: sum of length of two short sides < length of long side OR
any side has length = 0
*/

// function validTriangle(sides) {
//   let noSideIsZero = sides.every((side) => side !== 0);
//   let sidesLengthValid = sides[0] < sides[1] + sides[2];
//   return noSideIsZero && sidesLengthValid;
// }

// function triangle(s1, s2, s3) {
//   let sides = [s1, s2, s3];
//   sides.sort((a, b) => b - a);

//   if (!validTriangle(sides)) return "invalid";
//   else if (new Set(sides).size === 1) return "equilateral";
//   else if (new Set(sides).size === 2) return "isosceles";
//   else return "scalene";
// }

// console.log(triangle(3, 3, 3)); // "equilateral"
// console.log(triangle(3, 3, 1.5)); // "isosceles"
// console.log(triangle(3, 4, 5)); // "scalene"
// console.log(triangle(0, 3, 3)); // "invalid"
// console.log(triangle(3, 1, 1)); // "invalid"

// ------------------------------------------------------------------------------------------------

// function validAngles(degrees) {
//   let total180 = degrees.reduce((total, angle) => total + angle, 0) === 180;
//   let noAngleZero = degrees.every((angle) => angle > 0);
//   return total180 && noAngleZero;
// }

// function triangle(deg1, deg2, deg3) {
//   let degrees = [deg1, deg2, deg3];
//   if (!validAngles(degrees)) return "invalid";
//   else if (degrees.some((angle) => angle === 90)) return "right";
//   else if (degrees.every((angle) => angle < 90)) return "acute";
//   else if (degrees.some((angle) => angle > 90)) return "obtuse";
// }

// console.log(triangle(60, 70, 50)); // "acute"
// console.log(triangle(30, 90, 60)); // "right"
// console.log(triangle(120, 50, 10)); // "obtuse"
// console.log(triangle(0, 90, 90)); // "invalid"
// console.log(triangle(50, 50, 50)); // "invalid"

// ------------------------------------------------------------------------------------------------

/*

list of months
initialize variable numOfFridays = 0
for every month (loop)
  create a new date with that month in the year
  get the weekday for that day of the month
  check if it is === friday (5th day of week)
    if yes, increment the numOfFridays
return numOfFridays

*/

// function fridayThe13ths(year) {
//   let months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   let numOfFridays = 0;

//   months.forEach((month) => {
//     let date = new Date(`${month} 13, ${year}`);

//     if (date.getDay() === 5) {
//       numOfFridays++;
//     }
//   });
//   return numOfFridays;
// }

// function fridayThe13ths(year) {
//   let dates = [];

//   for (let month = 0; month < 12; month++) {
//     dates.push(new Date(year, month, 13));
//   }

//   let numOfFriday13 = dates.reduce((count, date) => {
//     return date.getDay() === 5 ? count + 1 : count;
//   }, 0);
//   return numOfFriday13;
// }

// fridayThe13ths = (year) =>
//   [...Array(12)].filter((date, idx) => new Date(year, idx, 13).getDay() === 5)
//     .length;

// console.log(fridayThe13ths(1986)); // 1
// console.log(fridayThe13ths(2015)); // 3
// console.log(fridayThe13ths(2017)); // 2

// ------------------------------------------------------------------------------------------------

/*
Must be: 
  larger than the input integer (the next feature number)
  An odd number
  multiple of 7
  All digits must occur only once

Algo:
  var found = false;
  while not found:
    if num % 2 === 1 & num % 7 === 0 && noRepeatNums(num):
      found = true;
      break;
    num++;
*/
// let MAX_FEATURED_NUM = 9876543201;

// function isOdd(num) {
//   return num % 2 === 1;
// }

// function factorOf7(num) {
//   return num % 7 === 0;
// }

// function uniqueDigits(num) {
//   let numStr = String(num);
//   return new Set(numStr).size === numStr.length;
// }

// function featured(num) {
//   while (num <= MAX_FEATURED_NUM) {
//     num++;
//     if (isOdd(num) && factorOf7(num) && uniqueDigits(num)) return num;
//   }
//   return "There is no possible number that fulfills those requirements.";
// }

// function oddFactorOf7(num) {
//   do {
//     num++;
//   } while (num % 2 === 0 || num % 7 !== 0);
//   return num;
// }

// function featured(num) {
//   let factor = oddFactorOf7(num);
//   while (factor <= MAX_FEATURED_NUM) {
//     if (uniqueDigits(factor)) return factor;
//     factor = factor + 14;
//   }
//   return "There is no possible number that fulfills those requirements.";
// }

// console.log(featured(12)); // 21
// console.log(featured(20)); // 21
// console.log(featured(21)); // 35
// console.log(featured(997)); // 1029
// console.log(featured(1029)); // 1043
// console.log(featured(999999)); // 1023547
// console.log(featured(999999987)); // 1023456987
// console.log(featured(9876543186)); // 9876543201
// console.log(featured(9876543200)); // 9876543201
// console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."

// ------------------------------------------------------------------------------------------------

// function sumSquareDifference(num) {
//   let emptyArr = [...Array(num)];
//   let squaredSum = emptyArr.reduce((sum, _, idx) => sum + idx + 1, 0) ** 2;
//   let sumOfSquares = emptyArr.reduce((sum, _, idx) => sum + (idx + 1) ** 2, 0);
//   return squaredSum - sumOfSquares;
// }

// function sumSquareDifference(num) {
//   let sum = 0;
//   let sumOfSquares = 0;

//   for (let i = 1; i <= num; i++) {
//     sum += i;
//     sumOfSquares += i ** 2;
//   }
//   return sum ** 2 - sumOfSquares;
// }

// console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10)); // 2640
// console.log(sumSquareDifference(1)); // 0
// console.log(sumSquareDifference(100)); // 25164150

// ------------------------------------------------------------------------------------------------
/*
function Bubble sort (arr):
  var swap = 1
  while (swap > 0) {
    swap = 0
    for idx = 0 to arr.length-1:
      if arr[idx] > arr[idx+1]
        swap idx and idx + 1
        swap++;
}
*/

// function bubbleSort(arr) {
//   let swap = true;

//   while (swap) {
//     swap = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swap = true;
//       }
//     }
//   }
// }

// // Moreefficient solution using recursion
// function bubbleSort(arr, i = 0) {
//   if (i === arr.length) return arr;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[i]) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
//   bubbleSort(arr, i + 1);
// }

// let array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1); // [3, 5]

// let array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2); // [1, 2, 4, 6, 7]

// let array3 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
// bubbleSort(array3);
// console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// ------------------------------------------------------------------------------------------------

/*
currWord = ''
longestWord = ''
maxWordLength = 0
currWordLength = 0

for char of str:
  if (endPoints.includes(char)):
    if currWordLength > maxWordLength:
      maxWordLength = currWordLength
      maxWord = currWord;
    else
      currWord = ''
      currWordLength = 0
  currWord += char
  currWordLength++;  

  log the longestWord
  log the size of word
*/

// function longestSentence(str) {
//   let endPoints = [".", "?", "!"];

//   let longestSentence = [];
//   let currSentence = [];

//   for (let word of str.split(" ")) {
//     currSentence.push(word);
//     if (endPoints.includes(word.slice(-1))) {
//       if (currSentence.length > longestSentence.length) {
//         longestSentence = currSentence.slice();
//       }
//       currSentence = [];
//     }
//   }

//   console.log(longestSentence.join(" "));
//   console.log("");
//   console.log(`The longest sentence has ${longestSentence.length} words.`);
// }

let longText =
  "Four score and seven years ago our fathers brought forth on this " +
  "continent a new nation, conceived in liberty, and dedicated to the " +
  "proposition that all men are created equal. Now we are engaged in a " +
  "great civil war, testing whether that nation, or any nation so " +
  "conceived and so dedicated, can long endure. We are met on a great " +
  "battlefield of that war. We have come to dedicate a portion of that " +
  "field, as a final resting place for those who here gave their lives " +
  "that that nation might live. It is altogether fitting and proper that " +
  "we should do this.";

let longerText =
  longText +
  "But, in a larger sense, we can not dedicate, we can not consecrate, " +
  "we can not hallow this ground. The brave men, living and dead, who " +
  "struggled here, have consecrated it, far above our poor power to add " +
  "or detract. The world will little note, nor long remember what we say " +
  "here but it can never forget what they did here. It is for us the " +
  "living, rather, to be dedicated here to the unfinished work which " +
  "they who fought here have thus far so nobly advanced. It is rather " +
  "for us to be here dedicated to the great task remaining before us -- " +
  "that from these honored dead we take increased devotion to that " +
  "cause for which they gave the last full measure of devotion -- that " +
  "we here highly resolve that these dead shall not have died in vain " +
  "-- that this nation, under God, shall have a new birth of freedom -- " +
  "and that government of the people, by the people, for the people, " +
  "shall not perish from the earth.";

// longestSentence(longText);
// // Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
// //
// // The longest sentence has 30 words.

// longestSentence(longerText);
// // It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
// //
// // The longest sentence has 86 words.

// longestSentence("Where do you think you're going? What's up, Doc?");
// // Where do you think you're going?
// //
// // The longest sentence has 6 words.

// longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

// function longestSentence(str) {
//   let sentences = str.match(/\w.*?[?!.]/g);

//   let longest = sentences.reduce(
//     function (longest, sentence) {
//       let length = sentence.split(/\s/).length;

//       if (length > longest.length) {
//         return { text: sentence, length: length };
//       } else {
//         return longest;
//       }
//     },
//     { text: "", length: 0 }
//   );

//   console.log(longest.text + `\n`);
//   console.log(`The longest sentence has ${longest.length} words. \n \n`);
// }

// function longestSentence(str) {
//   let sentences = str.match(/\w.*?[!?.]/g);

//   let sentenceWithLongestWord = sentences.reduce(
//     function longest(longest, sentence) {
//       for (let word of sentence.split(" ")) {
//         if (word.length > longest.word.length) {
//           longest.sentence = sentence;
//           longest.word = word;
//         }
//       }
//       return longest;
//     },
//     { sentence: "", word: "" }
//   );

//   console.log(sentenceWithLongestWord.sentence + `\n`);
//   console.log(
//     `The sentence with longest word has the word ${sentenceWithLongestWord.word} \n \n`
//   );
// }

// ------------------------------------------------------------------------------------------------

// function is_prime(num) {
//   let divisors = [];
//   if (num === 1) return false;

//   for (let i = 1; i <= Math.ceil(num / 2); i++) {
//     if (num % i === 0) divisors.push(i);
//   }

//   return divisors.length < 2;
// }

// function is_prime(num) {
//   if (num === 1) return false;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }

// // faster soln
// function is_prime(num) {
//   if (num < 2) return false;

//   let maxDivisor = Math.sqrt(num);
//   for (let i = 2; i <= maxDivisor; i++) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }

// console.log(is_prime(1) === false); // true
// console.log(is_prime(2) === true); // true
// console.log(is_prime(3) === true); // true
// console.log(is_prime(4) === false); // true
// console.log(is_prime(5) === true); // true
// console.log(is_prime(6) === false); // true
// console.log(is_prime(7) === true); // true
// console.log(is_prime(8) === false); // true
// console.log(is_prime(9) === false); // true
// console.log(is_prime(10) === false); // true
// console.log(is_prime(23) === true); // true
// console.log(is_prime(24) === false); // true
// console.log(is_prime(997) === true); // true
// console.log(is_prime(998) === false); // true
// console.log(is_prime(3_297_061) === true); // true
// console.log(is_prime(23_297_061) === false); // true

let arr = [1, 2, 0, 4, 5];

let newArr = arr.map((num) => {
  return arr.pop();
});

console.log(newArr);

let result = ["a", "b", "c"].filter(function (item) {
  console.log(item);
});

console.log(result); // []
