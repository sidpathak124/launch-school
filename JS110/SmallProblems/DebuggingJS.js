"use strict";

// const RESERVED_KEYWORDS = [
//   "break",
//   "case",
//   "catch",
//   "class",
//   "const",
//   "continue",
//   "debugger",
//   "default",
//   "delete",
//   "do",
//   "else",
//   "enum",
//   "export",
//   "extends",
//   "finally",
//   "for",
//   "function",
//   "if",
//   "implements",
//   "import",
//   "in",
//   "instanceof",
//   "interface",
//   "let",
//   "new",
//   "package",
//   "private",
//   "protected",
//   "public",
//   "return",
//   "static",
//   "super",
//   "switch",
//   "this",
//   "throw",
//   "try",
//   "typeof",
//   "var",
//   "void",
//   "while",
//   "with",
//   "yield",
// ];

// function isReserved(name) {
//   RESERVED_KEYWORDS.forEach((reserved) => {
//     if (name === reserved) {
//       return true;
//     }
//   });

//   return false;
// }

// function isReserved(name) {
//   for (let i = 0; i < RESERVED_KEYWORDS.length; i++) {
//     if (name === RESERVED_KEYWORDS[i]) return true;
//   }
//   return false;
// }

// function isReserved(name) {
//   return RESERVED_KEYWORDS.some((keyword) => keyword === name);
// }

// function isReserved(name) {
//   return RESERVED_KEYWORDS.includes(name);
// }

// console.log(isReserved("monkey")); // false
// console.log(isReserved("patch")); // false
// console.log(isReserved("switch")); // should be: true

// --------------------------------------------------------------------------------------------------------

// Picks n random elements from an array,
// and returns a new array with those elements.

// function random(arr, numItems = 1) {
//   let randomItems = [];

//   while (numItems > 0 && arr.length > 0) {
//     let randomIdx = Math.floor(Math.random() * arr.length);
//     let randomItem = arr[randomIdx];

//     randomItems.push(randomItem);
//     arr.splice(randomIdx, 1);
//     numItems--;
//   }
//   return randomItems;
// }

// // Ingredients

// let ingredients = [
//   "rice",
//   "green bell pepper",
//   "mushrooms",
//   "carrot",
//   "kebab",
//   "spinach",
//   "soy bean sprouts",
//   "mashed potatoes",
//   "corn",
//   "cucumber",
//   "peas",
// ];

// let spices = [
//   "peri peri",
//   "cinnamon",
//   "nutmeg",
//   "cardamom",
//   "ground ginger",
//   "poppy seed",
//   "cumin",
// ];

// let extras = ["peanuts", "sesame seeds", "egg", "wasabi", "soy sauce"];

// // Name

// let adjective = ["Delicious", "Hot", "Exotic", "Creative", "Festive", "Dark"];
// let firstNoun = ["Power", "After Work", "Holiday", "Disco", "Late Night"];
// let secondNoun = ["Mix", "Delight", "Bowl", "Chunk", "Surprise", "Bliss"];

// // Generate!

// let dishName = random(adjective).concat(random(firstNoun), random(secondNoun));
// let dish = random(ingredients, 3).concat(random(spices, 2), random(extras, 1));

// console.log("How about: " + dishName.join(" "));
// console.log("You need: " + dish.join(", "));

// --------------------------------------------------------------------------------------------------------

// let todos = [
//   "wash car",
//   "exercise",
//   "buy groceries",
//   "balance budget",
//   "call plumber",
//   "feed fido",
//   "get gas",
//   "organize closet",
// ];

// function addTask(task) {
//   if (todos.includes(task)) {
//     console.log("That task is already on the list.");
//   } else {
//     todos.push(task);
//   }
// }

// function completeTasks(n = 1) {
//   let tasksComplete = 0;

//   while (todos.length > 0 && tasksComplete < n) {
//     console.log(`${todos.shift()} complete!`);
//     tasksComplete++;
//   }

//   if (todos.length === 0) {
//     console.log("All tasks complete!");
//   } else {
//     console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
//   }
// }

// function displayTaskList() {
//   console.log(`ToDo list (${todos.length} tasks):`);
//   console.log("---------------------");

//   for (let idx = 0; idx < todos.length; idx++) {
//     console.log(`-- ${todos[idx]}`);
//   }
// }

// // Utilizing our task manager

// addTask("oil change");
// addTask("dentist");
// addTask("homework");

// completeTasks(3);
// displayTaskList();

// --------------------------------------------------------------------------------------------------------

// function range(start, end) {
//   if (!end) {
//     end = start;
//     start = 0;
//   }
//   let rangeElements = [];

//   for (let element = start; element <= end; element++) {
//     rangeElements.push(element);
//   }

//   return rangeElements;
// }

// function range(end) {
//   return rangen(0, end);
// }

// Examples

// console.log(range(10, 20));
// console.log(range(5));

// --------------------------------------------------------------------------------------------------------

// let memberDirectory = {
//   "Jane Doe": "323-8293",
//   "Margaret Asbury": "989-1111",
//   "Callum Beech": "533-9090",
//   "Juanita Eastman": "424-1919",
// };

// function isValidName(name) {
//   return /^[a-z]+ [a-z]+$/i.test(name);
// }

// function isValidPhone(phone) {
//   return /^\d{3}-\d{4}$/.test(phone);
// }

// function validMemberInfo(name, phone) {
//   return isValidName(name) && isValidPhone(phone);
// }

// function addMember(name, phone) {
//   if (validMemberInfo(name, phone)) {
//     memberDirectory[name] = phone;
//   } else {
//     console.log("Invalid member information.");
//   }
// }

// addMember("Laura Carlisle", "444-2223");
// addMember("Rachel Garcia", "232-1191");
// addMember("Earl 5mith", "331-9191");
// addMember("ka5l Nage3", "331-9191");
// addMember("Rajesh Agarwal", "33l-9191");
// addMember("Rajesh Agarwal", "333-9191");

// console.log(memberDirectory);

// console.log(`The end`);

// --------------------------------------------------------------------------------------------------------

// Standard role-playing dice, with 20 faces,
// specified in terms of minimum and maximum face value.

// let d20 = { min: 1, max: 20 };

// function roll(die) {
//   return Math.floor(Math.random() * (die.max - die.min + 1)) + die.min;
// }

// // Standard target roll tossing a 20-sided die,
// // with optional bonus and penalty dice.
// // Used to determine whether a character wanting to perform an action
// // succeeds or fails, based on whether the sum of the dice is higher
// // or lower than the relevant character trait.
// // (See below for examples.)
// function targetRoll(characterValue) {
//   let result = roll(d20);

//   console.log("--> " + result);

//   switch (result) {
//     case 1:
//       automaticFail();
//       break;
//     case 20:
//       automaticSuccess();
//       break;
//     default:
//       void (result >= characterValue ? success() : fail());
//   }
// }

// function success() {
//   console.log("Your character succeeds.");
// }

// function fail() {
//   console.log("Your character fails.");
// }

// function automaticSuccess() {
//   console.log("Your character succeeds without effort. Glory!");
// }

// function automaticFail() {
//   console.log("Meagre attempt. Your character fails miserably.");
// }

// // Example character.
// let myCharacter = {
//   name: "Jenkins",
//   strength: 4,
//   constitution: 6,
//   education: 11,
//   luck: 3,
//   sanity: 9,
// };

// // Example rolls:

// // Jenkins wants to break in a door with brute force,
// // so he has to roll against his strength value.
// targetRoll(myCharacter.strength);

// // Jenkins found an ancient scroll and attempts to decipher it.
// // He has to roll against his education, in order to determine
// // whether he's able to read it.
// targetRoll(myCharacter.education);

// --------------------------------------------------------------------------------------------------------

// Tests

// function average(scores) {
//   let sum = scores.reduce((acc, curr) => acc + curr);

//   return sum / scores.length;
// }

// function median(scores) {
//   scores.sort((a, b) => a - b);
//   let len = scores.length;

//   let median;
//   if (len % 2 === 0) {
//     median = average([scores[len / 2 - 1], scores[len / 2]]);
//   } else {
//     median = scores[Math.floor(len / 2)];
//   }

//   return median;
// }

// let quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
// let quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
// let quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
// let quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// // should all log 'true':
// console.log(average(quarter1ExamScores) === 86.8);
// console.log(average(quarter2ExamScores) === 86.3);
// console.log(average(quarter3ExamScores) === 83.7);
// console.log(average(quarter4ExamScores) === 88.8);

// console.log(median(quarter1ExamScores) === 89.5);
// console.log(median(quarter2ExamScores) === 89.5);
// console.log(median(quarter3ExamScores) === 87);
// console.log(median(quarter4ExamScores) === 89.5);

// --------------------------------------------------------------------------------------------------------

// function toDate(string) {
//   return new Date(string + "T00:00:00");
// }

// const TODAY = toDate("2018-08-05");

// function toString(date) {
//   function padNum(num, month = false) {
//     if (month) {
//       return String(num + 1).padStart(2, "0");
//     }
//     return String(num).padStart(2, "0");
//   }

//   let year = date.getFullYear();
//   let month = padNum(date.getMonth(), true);
//   let day = padNum(date.getDate());
//   return `${year}-${month}-${day}`;
// }

// function isInThePast(date) {
//   return date < TODAY;
// }

// function isWeekday(date) {
//   return date.getDay() >= 1 && date.getDay() <= 5;
// }

// let myCalendar = {
//   "2018-08-13": ["JS debugging exercises"],
//   "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
//   "2018-08-15": ["Read 'Demystifying Rails'"],
//   "2018-08-16": [],
//   "2018-08-30": ["Drone video project plan"],
//   "2018-09-10": ["Annual servicing of race bike"],
//   "2018-09-12": ["Study"],
//   "2018-11-02": ["Birthday Party"],
//   "2018-11-03": ["Birthday Party"],
// };

// let offeredClasses = {
//   "Back To The Future Movie Night": ["2018-07-30"],
//   "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
//   "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
//   "Mike's Hikes": ["2018-08-16"],
//   "Gordon Ramsay Master Class": ["2018-09-11", "2018-09-12"],
//   "Powerboating 101": ["2018-09-15", "2018-09-16"],
//   "Discover Parachuting": ["2018-11-02"],
// };

// function getCompatibleEvents(classes, calendar) {
//   function isAvailable(date) {
//     let dateStr = toString(date);
//     return !calendar[dateStr] || calendar[dateStr].length === 0;
//   }

//   let compatibleClasses = [];

//   for (let className of Object.keys(classes)) {
//     let classDates = classes[className].map(toDate);

//     if (classDates.some(isInThePast)) {
//       continue;
//     }

//     if (classDates.filter(isWeekday).every(isAvailable)) {
//       compatibleClasses.push(className);
//     }
//   }

//   return compatibleClasses;
// }

// console.log(getCompatibleEvents(offeredClasses, myCalendar));
// // expected: ["Mike's Hikes", "Powerboating 101"]
// // function isAvailable(date) {
// //   let dateStr = toString(date);
// //   console.log(dateStr);
// //   console.log(myCalendar[dateStr]);
// //   return !myCalendar[dateStr] || myCalendar[dateStr].length === 0;
// // }

// // let classDates = offeredClasses["Discover Parachuting"].map(toDate);
// // console.log(classDates);
// // console.log(classDates.filter(isWeekday).every(isAvailable));

// // console.log(toString(toDate("2018-09-10")));
// // console.log(toDate("2018-09-10"));
// // console.log(toDate("2018-09-10").getMonth());
// // console.log(typeof toDate("2018-09-10").getMonth());

// // console.log(String(toDate("2018-09-10").getMonth()).padStart(2, "0"));

// --------------------------------------------------------------------------------------------------------

function neutralize(sentence) {
  let words = sentence.split(" ");
  let neutralWords = words.filter((word) => !isNegative(word));

  return neutralWords.join(" ");
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);

// ----------------------------------------

// Write a function robustSsearch that takes two arguments: an array of words and a query term. The function should return an array of words from the given array that match the query term. The function should be case insensitive, it should consider partial matches, and to account for keyboard typo should consider the that last two letters of the query term may have been reversed. -- Grant

// function swapLastTwoChars(str) {
//   return str.slice(0, str.length - 2) + str[str.length - 1] + str[str.length - 2];
// }

// function robustSearch(arr, query) {
//   let result = [];
//   query = query.toLowerCase();
//   let typo = swapLastTwoChars(query);

//   arr.forEach(word => {
//     if (word.toLowerCase().includes(query) || word.toLowerCase().includes(typo)) {
//       result.push(word);
//     }
//   });

//   return result;
// }

// // Test Cases
// console.log(robustSearch(["develop", "develpo", "deep", "dive", "devel"], "devel")); // ["develop", "develpo", "devel"]
// console.log(robustSearch(["apple", "banana", "cherry"], "naan")); // ["banana"]
// console.log(robustSearch(["testing", "switch", "characters"], "testnig")); // []
