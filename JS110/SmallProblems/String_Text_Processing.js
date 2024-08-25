"use strict";

// function isUppercase(str) {
//   return str === str.toUpperCase();
// }

// function isUppercase(str) {
//   return !/[a-z]/.test(str);
// }

// console.log(isUppercase("t")); // false
// console.log(isUppercase("T")); // true
// console.log(isUppercase("Four Score")); // false
// console.log(isUppercase("FOUR SCORE")); // true
// console.log(isUppercase("4SCORE!")); // true
// console.log(isUppercase("")); // true

// ------------------------------------------------------------------------------------------------

// function deleteVowels(str) {
//   let vowels = "aeiou".split("");
//   return [...str]
//     .filter((char) => !vowels.includes(char.toLowerCase()))
//     .join("");
// }

// function removeVowels(arr) {
//   return arr.slice().map((str) => deleteVowels(str));
// }

// function removeVowels(arr) {
//   return arr.map((str) => str.replace(/[aeiou]/gi, ""));
// }

// console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(["ABC", "AEIOU", "XYZ"])); // ["BC", "", "XYZ"]

// console.log("the end");

// ------------------------------------------------------------------------------------------------

// function letterCaseCount(str) {
//   let countObj = { lowercase: 0, uppercase: 0, neither: 0 };

//   [...str].forEach((char) => {
//     if (/[a-z]/.test(char)) {
//       countObj.lowercase += 1;
//     } else if (/[A-Z]/.test(char)) {
//       countObj.uppercase += 1;
//     } else {
//       countObj.neither += 1;
//     }
//   });
//   return countObj;
// }

// function letterCaseCount(str) {
//   let countObj = { lowercase: 0, uppercase: 0, neither: 0 };

//   [...str].forEach((char) => {
//     if (char >= "a" && char <= "z") {
//       countObj.lowercase += 1;
//     } else if (char >= "A" && char <= "Z") {
//       countObj.uppercase += 1;
//     } else {
//       countObj.neither += 1;
//     }
//   });
//   return countObj;
// }

// function letterCaseCount(str) {
//   let lowercase = str.match(/[a-z]/g) || [];
//   let uppercase = str.match(/[A-Z]/g) || [];
//   let neither = str.match(/[^a-z]/gi) || [];

//   return {
//     lowercase: lowercase.length,
//     uppercase: uppercase.length,
//     neither: neither.length,
//   };
// }

// console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }

// ------------------------------------------------------------------------------------------------

// function capitalizeWord(word) {
//   return word[0].toUpperCase() + word.slice(1).toLowerCase();
// }

// function wordCap(str) {
//   return str.split(" ").map(capitalizeWord).join(" ");
// }

// function wordCap(str) {
//   return str
//     .split(" ")
//     .reduce((acc, word) => {
//       return acc + (word[0].toUpperCase() + word.slice(1).toLowerCase()) + " ";
//     }, "")
//     .trimEnd();
// }

// console.log(wordCap("four score and seven")); // "Four Score And Seven"
// console.log(wordCap("the javaScript language")); // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'

// ------------------------------------------------------------------------------------------------

// function changeCase(char) {
//   return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
// }

// function swapCase(str) {
//   return [...str].map(changeCase).join("");
// }

// console.log(swapCase("CamelCase")); // "cAMELcASE"
// console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"

// ------------------------------------------------------------------------------------------------

// function staggeredCase(str) {
//   return [...str]
//     .map((char, idx) => {
//       return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
//     })
//     .join("");
// }

// function staggeredCase(str) {
//   return [...str].reduce((acc, char, idx) => {
//     return acc + (idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase());
//   }, "");
// }

// function staggeredCase(str) {
//   let Regexp = /(.)(.)/gi;
//   return str.replace(
//     Regexp,
//     (_, $1, $2) => $1.toUpperCase() + $2.toLowerCase()
//   );
// }

// console.log(staggeredCase("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
// console.log(staggeredCase("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 4444 nUmBeRs"

// ------------------------------------------------------------------------------------------------

// function staggeredCase(str) {
//   return [...str]
//     .map((char, idx) => {
//       if (/[^a-z]/gi.test(char)) return char;
//       return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
//     })
//     .join("");
// }

// function isAlphabet(char) {
//   let alphabets = "abcdefghijklmnopqrstuvwxyz";
//   return alphabets.includes(char.toLowerCase());
// }

// function staggeredCase(str, ignoreNonAlpha = true) {
//   let caps = false;
//   return [...str]
//     .map((char) => {
//       if (ignoreNonAlpha && !isAlphabet(char)) return char;
//       caps = !caps;
//       return caps ? char.toUpperCase() : char.toLowerCase();
//     })
//     .join("");
// }

// console.log(staggeredCase("I Love Launch School!")); // I lOvE lAuNcH sChOoL!
// console.log(staggeredCase("ALL CAPS")); // AlL cApS
// console.log(staggeredCase("ALL CAPS", false)); // AlL cApS
// console.log(staggeredCase("ignore 77 the 444 numbers")); // IgNoRe 77 ThE 444 nUmBeRs

// ------------------------------------------------------------------------------------------------

// function wordLengths(str) {
//   if (!str) return [];
//   return str.split(" ").map((word) => `${word} ${word.length}`);
// }

// function wordLengths(str = "") {
//   return str.length
//     ? str.split(" ").map((word) => `${word} ${word.length}`)
//     : [];
// }

// console.log(wordLengths("cow sheep chicken"));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths("baseball hot dogs and apple pie"));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths("Supercalifragilisticexpialidocious"));
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths("")); // []
// console.log(wordLengths()); // []

// ------------------------------------------------------------------------------------------------
/*
text:
-convert to lowercase
-remove punctuations
-split, loop and count words 

*/
// function searchWord(word, text) {
//   text = text.replace(/[^a-z ]/gi, ""); // remove punctuations
//   return text
//     .toLowerCase() // count word in text
//     .split(" ")
//     .filter((val) => val === word).length;
// }

// function searchWord(word = "a", text = "a") {
//   // word = "\\b" + word + "\\b"; // only match independent words
//   let regexp = new RegExp(word, "gi");
//   return text.match(regexp)?.length || 0;
// }

// function searchWord(word = "a", text = "a") {
//   let regexp = new RegExp("\\b" + word + "\\b", "gi");
//   return text.match(regexp)?.length || 0;
// }

// const text =
//   "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

// console.log(searchWord("sed", text)); // 3
// console.log(searchWord("sed", "Sed confused sed seduction-sedated")); //
// console.log(searchWord("sed", "text")); //
// console.log(searchWord()); //

// ------------------------------------------------------------------------------------------------

// function searchWord(word, text) {
//   let regexp = new RegExp("\\b" + word + "\\b", "gi");
//   return text.replace(regexp, "**" + word.toUpperCase() + "**");
// }

// function searchWord(word, text) {
//   let ucword = word.toUpperCase();

//   return text
//     .split(" ")
//     .map((val) => {
//       if (val.toUpperCase() === ucword) {
//         return `**${ucword}**`;
//       } else {
//         return val;
//       }
//     })
//     .join(" ");
// }

// const text =
//   "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?";

// console.log(searchWord("sed", text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"

// ------------------------------------------------------------------------------------------------
/*
i/p : integer
o/p : Array of integers

create a boolean array for switches
loop over array for numbers 1 to count/switches
- loop over array for all entries
--check if entry is a multiple of the number (number % entry === 0)
--- if it is, flip its switch
  
Once you've looped over the array of switchedSeries and flipped them,
you need to collect the indices (1-based) of all the switches that are still ON
*/
// function lightsOn(switches) {
//   let switchSeries = Array(switches).fill(false);

//   for (let s = 1; s <= switches; s++) {
//     for (let idx = s; idx <= switches; idx++) {
//       if (idx % s === 0) {
//         switchSeries[idx - 1] = !switchSeries[idx - 1];
//       }
//     }
//   }

//   let switchesON = switchSeries.reduce(
//     (acc, s, idx) => (s ? acc.concat(idx + 1) : acc),
//     []
//   );
//   return switchesON;
// }

// console.log(lightsOn(5)); // [1, 4]
// // Detailed result of each round for `5` lights
// // Round 1: all lights are on
// // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// ------------------------------------------------------------------------------------------------
/*
we need to o/p the following marks for n = 5
stars = 1, 3, 5, 3, 1
spaces = 2, 1, 0, 1, 2
*/

// function diamond(n) {
//   let initStar = 1;
//   let initSpace = (n - 1) / 2;

//   for (let stars = 1; stars <= n; stars = stars + 2) {
//     let str = " ".repeat(initSpace) + "*".repeat(stars);
//     console.log(str);
//     initSpace--;
//   }
//   initSpace = 1;
//   for (let stars = n - 2; stars >= 1; stars = stars - 2) {
//     let str = " ".repeat(initSpace) + "*".repeat(stars);
//     console.log(str);
//     initSpace++;
//   }
// }

function numberSequence(n) {
  let sequence = [];
  let increment = 2;
  let number = 1;

  while (number > 0) {
    sequence.push(number);
    if (number >= n) increment = -2;
    number += increment;
  }

  return sequence;
}

function diamond(n) {
  numberSequence(n).forEach((num) =>
    console.log(` `.repeat((n - num) / 2) + `*`.repeat(num))
  );
}

// console.log(numberSequence(1));
// console.log(numberSequence(3));
// console.log(numberSequence(7));

// diamond(1);
// diamond(3);
// diamond(7);

// function hollowDiamond(n) {
//   let increment = 2;

//   for (let i = 1; i > 0; i += increment) {
//     if (i === 1) {
//       console.log(` `.repeat((n - i) / 2) + `*`.repeat(i));
//     } else {
//       console.log(` `.repeat((n - i) / 2) + "*" + ` `.repeat(i - 2) + `*`);
//     }
//     if (i === n) increment = -2;
//   }
// }

// hollowDiamond(1);
// hollowDiamond(3);
// hollowDiamond(7);

// ------------------------------------------------------------------------------------------------

/*
Given the spelling blocks, check if a word can be made by using any of the block items
where each block (of two letters) is used only once.

i/p: String
o/p: boolean

Store the blocks in an array of double-arrays
declare an empty list to store the indices of used blocks

loop through each char of the word (passed as argument)
loop through the outer array (of blocks)
check if the char is included in any block && that block is not already used
if true: add the block in the list of used blocks and return true (move to next char)
if a char not found in any of the non-used blocks: return false

*/

function isBlockWord(word) {
  let blocks = [
    "BO",
    "XK",
    "DQ",
    "CP",
    "NA",
    "GT",
    "RE",
    "FS",
    "JW",
    "HU",
    "VI",
    "LY",
    "ZM",
  ];
  let blocksUsed = [];

  return word
    .toUpperCase()
    .split("")
    .every((char) => {
      for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].includes(char) && !blocksUsed.includes(i)) {
          blocksUsed.push(i);
          return true;
        }
      }
      return false;
    });
}

// function isBlockWord(word) {
//   let blocks = [
//     "BO",
//     "XK",
//     "DQ",
//     "CP",
//     "NA",
//     "GT",
//     "RE",
//     "FS",
//     "JW",
//     "HU",
//     "VI",
//     "LY",
//     "ZM",
//   ];
//   let letters = word.toUpperCase().split("");

//   for (let i = 0; i < letters.length; i++) {
//     let matchedBlock = blocks.filter((block) => {
//       return block.indexOf(letters[i]) > -1;
//     })[0];

//     if (matchedBlock === undefined) {
//       return false;
//     } else {
//       blocks.splice(blocks.indexOf(matchedBlock), 1);
//     }
//   }
//   return true;
// }

// console.log(isBlockWord("BATCH")); // true
// console.log(isBlockWord("BUTCH")); // false
// console.log(isBlockWord("jest")); // true
// console.log(isBlockWord("floW")); // true
// console.log(isBlockWord("APPLE")); // false
// console.log(isBlockWord("apple")); // false
// console.log(isBlockWord("apPLE")); // false
// console.log(isBlockWord("Box")); // false

// ------------------------------------------------------------------------------------------------
/*
function that logs/outputs an 8-pointed star
parameter passed >= 7
(n-1)/2 rows of 3 stars each with decreasing spacing m [(n-3)/2]], m-1, ..., 0
1 main row of n stars in the middle
(n-1)/2 rows of 3 stars each with increasing spacing 0, ..., m-1,  m [(n-3)/2]]

Algo:
spaceBefore = 0
spaceBetween = (n - 3)/2
increment = 1

for rows from 1 to n
if row = (n + 1)/2
-o/p: n-stars
-increment = -1
o/p: spaceBefore + star + spaceBetween + star + spaceBetween + star
spaceBefore+= increment
spaceBetween-= increment
*/

// function star(n) {
//   let spaceBefore = 0;
//   let spaceBetween = (n - 3) / 2;
//   let increment = 1;

//   for (let i = 1; i > 0; i += increment) {
//     if (i === (n + 1) / 2) {
//       console.log("*".repeat(n));
//       increment = -1;
//     } else {
//       let line =
//         ` `.repeat(spaceBefore) +
//         "*" +
//         ` `.repeat(spaceBetween) +
//         "*" +
//         ` `.repeat(spaceBetween) +
//         "*";
//       console.log(line);
//     }
//     spaceBefore += increment;
//     spaceBetween -= increment;
//   }
// }

function star(n) {
  let asterisks = "***".split("");
  let middleIdx = Math.floor(n / 2);
  let spaceBetween = (n - 3) / 2;
  let increment = 1;

  for (let i = 0; i >= 0; i += increment) {
    if (i === middleIdx) {
      console.log("*".repeat(n));
      increment = -1;
    } else {
      let space = spaceBetween - i;
      let starpattern = asterisks.join(" ".repeat(space));
      let initSpace = " ".repeat(i);
      console.log(initSpace + starpattern);
    }
  }
}

star(7);
// star(21);
