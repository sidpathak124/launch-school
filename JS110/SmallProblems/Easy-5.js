"strict";

// ------------------------------------------------------------------------------------------------
// const DEGREE = "\xB0";

// function padzeros(num) {
//   let numString = String(num);
//   return numString.length === 1 ? "0" + numString : numString;
// }

// function adjustDegree0to360(num) {
//   while (num > 360) {
//     num -= 360;
//   }
//   while (num < 0) {
//     num += 360;
//   }
//   return num;
// }

// function dms(num) {
//   num = adjustDegree0to360(num);
//   let degree = Math.trunc(num);
//   let minSec = (num - degree) * 60;

//   let min = Math.trunc(minSec);
//   let sec = Math.round((minSec - min) * 60);

//   let dms = `${degree}${DEGREE}${padzeros(min)}'${padzeros(sec)}"`;
//   return dms;
// }

// console.log(dms(156.742));
// console.log(dms(30)); // 30°00'00"
// console.log(dms(76.73)); // 76°43'48"
// console.log(dms(254.6)); // 254°35'59"
// console.log(dms(93.034773)); // 93°02'05"
// console.log(dms(0)); // 0°00'00"
// console.log(dms(360)); // 360°00'00" or 0°00'00"

// console.log(dms(-1)); // 359°00'00"
// console.log(dms(400)); // 40°00'00"
// console.log(dms(-40)); // 320°00'00"
// console.log(dms(-420)); // 300°00'00"

// ------------------------------------------------------------------------------------------------

// function union(...args) {
//   let unionArr = [];

//   args.flat().forEach((num) => {
//     if (!unionArr.includes(num)) {
//       unionArr.push(num);
//     }
//   });
//   return unionArr;
// }

// console.log(union([1, 3, 5], [3, 6, 9], [11, 12])); // [1, 3, 5, 6, 9, 11, 12]

// ------------------------------------------------------------------------------------------------

// function halvsies(arr) {
//   let mid = Math.ceil(arr.length / 2);
//   return [arr.splice(0, mid), arr];
//   // return [arr.slice(0, mid), arr.slice(mid)];
// }

// console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5])); // [[5], []]
// console.log(halvsies([])); // [[], []]

// ------------------------------------------------------------------------------------------------

// function findDup(arr) {
//   let counts = {};
//   arr.forEach((num) => {
//     counts[num] = counts[num] + 1 || 1;
//   });

//   let duplicate = Object.entries(counts).filter((arr) => {
//     let [num, count] = arr;
//     return count === 2;
//   });
//   return duplicate[0][0];
// }

// function findDup(arr) {
//   let seen = {};
//   let duplicate = undefined;
//   arr.forEach((num) => {
//     if (seen[num]) duplicate = num;
//     seen[num] = true;
//   });

//   return duplicate;
// }

// Solution- 2
// function count(array, element) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) count++;
//   }

//   return count;
// }

// function findDup(array) {
//   return array.find((element) => count(array, element) === 2);
// }

// Solution-3
// function findDup(array) {
//   return array.find((element, idx) => array.lastIndexOf(element) !== idx);
// }

// Solution-4
// function findDup(array) {
//   return array.find((element, idx) => array.slice(idx + 1).includes(num));
// }

// console.log(findDup([1, 5, 3, 1])); // 1
// console.log(
//   findDup([
//     18, 9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53,
//     27, 14, 61, 90, 81, 8, 63, 95, 99, 30, 65, 78, 76, 48, 16, 93, 77, 52, 49,
//     37, 29, 89, 10, 84, 1, 47, 68, 12, 33, 86, 60, 41, 44, 83, 35, 94, 73, 98,
//     3, 64, 82, 55, 79, 80, 21, 39, 72, 13, 50, 6, 70, 85, 87, 51, 17, 66, 20,
//     28, 26, 2, 22, 40, 23, 71, 62, 73, 32, 43, 24, 4, 56, 7, 34, 57, 74, 45, 11,
//     88, 67, 5, 58,
//   ])
// ); // 73

// ------------------------------------------------------------------------------------------------

// function interleave(arr1, arr2) {
// interArr = [];
// for (let i = 0; i < arr1.length; i++) {
//   interArr.push(arr1[i], arr2[i]);
// }
// arr1.forEach((num, idx) => interArr.push(num, arr2[idx]));
//   return interArr;
// }

// function interleave(arr1, arr2) {
//   // return arr1.map((ele, idx) => [ele, arr2[idx]]).flat();
//   return arr1.reduce((acc, curr, idx) => {
//     return [...acc, curr, arr2[idx]];
//   }, []);
// }

// console.log(interleave([1, 2, 3], ["a", "b", "c"])); // [1, "a", 2, "b", 3, "c"]

// ------------------------------------------------------------------------------------------------

// function multiplicativeAverage(arr) {
//   return (arr.reduce((acc, curr) => acc * curr, 1) / arr.length).toFixed(3);
// }

// console.log(multiplicativeAverage([3, 5])); // "7.500"
// console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"

// ------------------------------------------------------------------------------------------------

// function multiplyList(arr1, arr2) {
//   return arr1.map((num, idx) => num * arr2[idx]);
// }

// console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]

// ------------------------------------------------------------------------------------------------

// function digitList(num) {
//   return String(num)
//     .split("")
//     .map((ele) => Number(ele));
// }

// function digitList(num) {
//   let numArr = [];

//   while (num > 0) {
//     numArr.unshift(num % 10);
//     num = Math.trunc(num / 10);
//   }

//   return numArr;
// }

// console.log(digitList(12345)); // [1, 2, 3, 4, 5]
// console.log(digitList(7)); // [7]
// console.log(digitList(375290)); // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444)); // [4, 4, 4]

// ------------------------------------------------------------------------------------------------

// function countOccurrences(arr) {
//   let occurences = {};

//   arr.forEach((ele) => {
//     ele = ele.toLowerCase();
//     occurences[ele] = occurences[ele] + 1 || 1;
//   });

//   Object.entries(occurences).forEach((obj) => {
//     console.log(`${obj[0]} => ${obj[1]}`);
//   });
// }

// let vehicles = [
//   "car",
//   "car",
//   "truck",
//   "car",
//   "SUV",
//   "truck",
//   "motorcycle",
//   "suv",
//   "motorcycle",
//   "car",
//   "truck",
// ];

// countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1

// ------------------------------------------------------------------------------------------------

// function average(arr) {
//   return Math.trunc(arr.reduce((acc, curr) => acc + curr) / arr.length);
// }

// console.log(average([1, 5, 87, 45, 8, 8])); // 25
// console.log(average([9, 47, 23, 95, 16, 52])); // 40

// ------------------------------------------------------------------------------------------------

/*
You are given an array of strings and want to find the sum of their numeric values.
On each string, the numeric value can be found by combining the first digit
and the last digit to form a single two-digit number.

For example:

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet

In this example, the numeric values of these four strings are 12, 38, 15, and 77.
Adding these together produces 142.

Consider your entire array. What is the sum of all of the numeric values?

Algo
- use a for-loop/map to loop through each string of the array
- use a for-loop/forEach to loop through each element of string
- if the ele is a number, extract it. Save these nums into variable
- Check the length of the string, if it is only one duplicate it, 
- if its more, extract first and last number from this variable
- Convert string to number and add it to the array
- sum the array and return the value.
*/

// function isNumber(numStr) {
//   return "0123456789".split("").includes(numStr);
// }

// function sumStringValues(arr) {
//   let numsArr = arr.map((str) => {
//     let num = str
//       .split("")
//       .filter((ele) => isNumber(ele))
//       .join("");
//     if (num.length === 1) {
//       num = num + num;
//     } else if (num.length > 2) {
//       num = num[0] + num.slice(-1);
//     }
//     return parseInt(num);
//   });

//   let numsArrSum = numsArr.reduce((acc, curr) => acc + curr, 0);
//   return numsArrSum;
// }
// console.log(
//   sumStringValues(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"])
// ); // 142

// console.log(
//   sumStringValues([
//     "ninesixthree8six8",
//     "5tnzrrzmcsnfivefeightrjninexrhnnfbcb",
//     "dcjcj2",
//     "4fhcmhdtfourlzdphfxvlmvm6",
//   ])
// ); // 211

// ------------------------------------------------------------------------------------------------
/*
i/p = integer (num of minutes)
o/p = string (time in "HH:MM" format)

rules:
If num is +tive: time is after midnight
If num is -tive: time is before midnight
take in a number in minutes and return time in 24-hour format(hh: mm)
implicit rules:
A day has 24 * 60 = 1440 minutes, but input can have higher or lower number


*/

let MINUTES_PER_HOUR = 60;
let HOURS_PER_DAY = 24;
let MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;
let WEEK_DAYS = 7;

let DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function padNum(num) {
  return num < 10 ? "0" + num : String(num);
}
// function timeOfDay(num) {
//   let mins = num % 60;
//   let hours = Math.floor(num / 60) % 24;

//   if (mins < 0) mins = 60 + mins;
//   if (hours < 0) hours = 24 + hours;

//   return `${padNum(hours)}:${padNum(mins)}`;
// }

function formatTime(dayOfWeek, hours, minutes) {
  return `${dayOfWeek}, ${padNum(hours)}:${padNum(minutes)}`;
}

// function calculateDay(deltaMinutes) {
//   let daysAhead = Math.floor(deltaMinutes / MINUTES_PER_DAY) % WEEK_DAYS;
//   daysAhead = daysAhead > 0 ? daysAhead : daysAhead + 7;
//   return daysAhead;
// }

// function timeOfDay(deltaMinutes) {
//   let dayOfWeek = calculateDay(deltaMinutes);
//   if (deltaMinutes < 0) {
//     deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
//   } else {
//     deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   }

//   let minutes = deltaMinutes % 60;
//   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   return formatTime(dayOfWeek, hours, minutes);
// }

// function timeOfDay(deltaMinutes) {
//   let date = new Date(`5/11/2024, 00:00`);
//   date.setMinutes(deltaMinutes);

//   let day = DAYS_OF_WEEK[date.getDay()];
//   let minutes = date.getMinutes();
//   let hours = date.getHours();

//   return formatTime(day, hours, minutes);
// }

// console.log(timeOfDay(0)); // "00:00"
// console.log(timeOfDay(-3)); // "23:57"
// console.log(timeOfDay(35)); // "00:35"
// console.log(timeOfDay(-1437)); // "00:03"
// console.log(timeOfDay(3000)); // "02:00"
// console.log(timeOfDay(800)); // "13:20"
// console.log(timeOfDay(-4231)); // "01:29"

// ------------------------------------------------------------------------------------------------

function extractHoursMinutes(str) {
  let hours = parseInt(str.slice(0, 2));
  let minutes = parseInt(str.slice(3));
  return [hours, minutes];
}

function beforeMidnight(str) {
  return (MINUTES_PER_DAY - afterMidnight(str)) % MINUTES_PER_DAY;
}

function afterMidnight(str) {
  // let [hours, minutes] = extractHoursMinutes(str);
  let date = new Date(`May 11, 2024 ${str}:00`);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let deltaMinutes = (hours * MINUTES_PER_HOUR + minutes) % MINUTES_PER_DAY;
  return deltaMinutes;
}

console.log(afterMidnight("00:00")); // 0
console.log(beforeMidnight("00:00")); // 0
console.log(afterMidnight("12:34")); // 754
console.log(beforeMidnight("12:34")); // 686
console.log(afterMidnight("24:00")); // 0
console.log(beforeMidnight("24:00")); // 0
