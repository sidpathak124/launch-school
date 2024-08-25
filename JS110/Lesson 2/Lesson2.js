"use strict";

// --------------------------------------------- PRACTICE PROBLEMS --------------------------------------------------

// let arr = ["10", "11", "9", "7", "8"];
// console.log(arr);
// arr.sort((a, b) => {
//   console.log(`a = ${a}, b = ${b}`);
//   return Number(b) - Number(a);
// });
// console.log(arr);

// ------------------------------------------------------------------------------------------------------------------

// let books = [
//   {
//     title: "One Hundred Years of Solitude",
//     author: "Gabriel Garcia Marquez",
//     published: "1967",
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     published: "1925",
//   },
//   { title: "War and Peace", author: "Leo Tolstoy", published: "1869" },
//   { title: "Ulysses", author: "James Joyce", published: "1922" },
//   { title: "The Book of Kells", author: "Multiple Authors", published: "800" },
// ];

// books.sort((a, b) => {
//   return Number(a.published) - Number(b.published);
// });
// console.log(books);

// ------------------------------------------------------------------------------------------------------------------

// let arr1 = ["a", "b", ["c", ["d", "e", "f", "g"]]];
// console.log(arr1[2][1][3]);

// let arr2 = [
//   { first: ["a", "b", "c"], second: ["d", "e", "f"] },
//   { third: ["g", "h", "i"] },
// ];
// console.log(arr2[1].third[0]);

// let arr3 = [["abc"], ["def"], { third: ["ghi"] }];
// console.log(arr3[2].third[0][0]);

// let obj1 = { a: ["d", "e"], b: ["f", "g"], c: ["h", "i"] };
// console.log(obj1.b[1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } };
// console.log(Object.keys(obj2.third)[0]);

// ------------------------------------------------------------------------------------------------------------------

// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;

// let obj1 = { first: [1, 2, [3]] };
// obj1.first[2][0] = 4;

// let obj2 = { a: { a: ["1", "two", 3], b: 4 }, b: 5 };
// obj2["a"]["a"][2] = 4;

// console.log(arr1);
// console.log(arr2);
// console.log(obj1);
// console.log(obj2);

// ------------------------------------------------------------------------------------------------------------------

// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" },
// };

// let totalAgeOfMales = Object.values(munsters)
//   .filter((obj) => obj.gender === "male")
//   .map((obj) => {
//     return obj.age;
//   })
//   .reduce((acc, curr) => acc + curr);

// let totalAgeOfMales = 0;

// for (let obj of Object.values(munsters)) {
//   if (obj.gender === "male") {
//     totalAgeOfMales += obj.age;
//   }
// }

// console.log(totalAgeOfMales);

// ------------------------------------------------------------------------------------------------------------------

// Object.entries(munsters).forEach((val) => {
//   let name = val[0];
//   let age = val[1]["age"];
//   let gender = val[1]["gender"];

//   console.log(`${name} is a ${age}-year-old ${gender}`);
// });

// ------------------------------------------------------------------------------------------------------------------

// let obj = {
//   first: ["the", "quick"],
//   second: ["brown", "fox"],
//   third: ["jumped"],
//   fourth: ["over", "the", "lazy", "dog"],
// };
// let vowels = "aeiou".split("");
// Object.values(obj).forEach((arr) => {
//   arr.forEach((str) => {
//     str.split("").forEach((char) => {
//       if (vowels.includes(char)) console.log(char);
//     });
//   });
// });

// ------------------------------------------------------------------------------------------------------------------

// let arr = [
//   ["b", "c", "a"],
//   [2, 11, -3],
//   ["blue", "black", "green"],
// ];

// let sortedsubArrs = arr.map((subArr) => {
//   return subArr.sort((a, b) => {
//     if (a > b) {
//       return 1;
//     } else if (a < b) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// });

// let sortedsubArrs = arr.map((subArr) => {
//   if (typeof subArr[0] === "string") {
//     return subArr.slice().sort();
//   } else {
//     return subArr.slice().sort((a, b) => a - b);
//   }
// });

// descending order

// let sortedsubArrs = arr.map((subArr) => {
//   return subArr.sort((a, b) => {
//     if (a > b) {
//       return -1;
//     } else if (a < b) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// });

// console.log(sortedsubArrs);

// ------------------------------------------------------------------------------------------------------------------

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// let arrIncremented = arr.map((obj) => {
//   let incrementedObj = {};
//   Object.entries(obj).forEach((ele) => {
//     incrementedObj[ele[0]] = ele[1] + 1;
//   });
//   return incrementedObj;
// });

// console.log(arrIncremented);
// console.log(arr);

// ------------------------------------------------------------------------------------------------------------------

// const arr = [
//   ["b", "c", "a"],
//   ["blue", "black", "green"],
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// let arrDeepCopy = JSON.parse(JSON.stringify(arr));
// arr[0][0] = "z";

// console.log(arr);
// console.log(arrDeepCopy);

// const truthiness = {
//   falsy: [null, undefined, "", false, NaN, 0],
//   truthy: ["everything else..."],
// };

// let objDeepcopy = {};
// // Object.entries(truthiness).forEach((ele) => {
// //   objDeepcopy[ele[0]] = ele[1].slice();
// // });

// for (let key in truthiness) {
//   objDeepcopy[key] = [...truthiness[key]];
// }

// truthiness["truthy"].push(100);
// truthiness["falsy"][0] = "Jalsa";

// console.log(objDeepcopy);

// ------------------------------------------------------------------------------------------------------------------

// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// let arr3s = arr.map((subArr) => {
//   return subArr.filter((num) => num % 3 === 0);
// });

// console.log(arr3s);

// ------------------------------------------------------------------------------------------------------------------

// let arr = [
//   [1, 6, 7],
//   [1, 5, 3],
//   [1, 8, 3],
// ];

// arr.sort((a, b) => {
//   let oddSumA = a.reduce((acc, curr) => {
//     if (curr % 2 === 1) {
//       return acc + curr;
//     }
//     return acc;
//   });

//   let oddSumB = b.reduce((acc, curr) => {
//     if (curr % 2 === 1) {
//       return acc + curr;
//     }
//     return acc;
//   });

//   return oddSumA - oddSumB;
// });

// console.log(arr);

// ------------------------------------------------------------------------------------------------------------------

// let obj = {
//   grape: { type: "fruit", colors: ["red", "green"], size: "small" },
//   carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
//   apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
//   apricot: { type: "fruit", colors: ["orange"], size: "medium" },
//   marrow: { type: "vegetable", colors: ["green"], size: "large" },
// };

// let capitalize = (str) => str[0].toUpperCase() + str.slice(1);

// let colorSize = Object.values(obj).map((ele) => {
//   if (ele.type === "fruit") {
//     return ele.colors.map((color) => capitalize(color));
//   } else {
//     return ele.size.toUpperCase();
//   }
// });

// console.log(colorSize);

// ------------------------------------------------------------------------------------------------------------------

// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// let evenArr = arr.filter((obj) => {
//   return Object.values(obj)
//     .flat()
//     .every((num) => num % 2 === 0);
// });

// let evenArr = arr.filter((obj) => {
//   for (let arrVal of Object.values(obj)) {
//     let noEven = arrVal.every((num) => num % 2 === 0);
//     if (noEven === false) return false;
//   }
//   return true;
// });

// let evenArr = arr.filter((obj) => {
//   return Object.values(obj).every((subArr) => {
//     return subArr.every((num) => num % 2 === 0);
//   });
// });

// console.log(evenArr);

// ------------------------------------------------------------------------------------------------------------------

// let arr = [
//   ["a", 1],
//   ["b", "two"],
//   ["sea", { c: 3 }],
//   ["D", ["a", "b", "c"]],
// ];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// let obj = {};

// arr.forEach((subArr) => {
//   obj[subArr[0]] = subArr[1];
// });
// console.log(obj);

// console.log(Object.fromEntries(arr));

// ------------------------------------------------------------------------------------------------------------------

// let munsters = {
//   herman: { age: 32, gender: "male" },
//   lily: { age: 30, gender: "female" },
//   grandpa: { age: 402, gender: "male" },
//   eddie: { age: 10, gender: "male" },
//   marilyn: { age: 23, gender: "female" },
// };

// let objDeepcopy = {};

// Object.entries(munsters).forEach((val) => {
//   let key = val[0];
//   let deepVal = {};
//   Object.entries(val[1]).forEach((subVal) => {
//     deepVal[subVal[0]] = subVal[1];
//   });

//   objDeepcopy[key] = deepVal;
// });

// let objDeepcopy = JSON.parse(JSON.stringify(munsters), (munster, info) =>
//   Object.freeze(info)
// );

// munsters["herman"]["gender"] = "female";
// munsters["grandpa"]["age"] = "333";

// console.log(objDeepcopy);
// console.log(munsters);

// ------------------------------------------------------------------------------------------------------------------

// function generateUUID() {
//   let chars = "0123456789abcdef".split("");
//   let hyphens = [8, 12, 16, 20];
//   let UUID = "";
//   let UUIDLength = 32;
//   for (let i = 0; i < UUIDLength; i++) {
//     let charsIdx = Math.floor(Math.random() * chars.length);
//     if (hyphens.includes(i)) {
//       UUID += "-" + chars[charsIdx];
//     } else {
//       UUID += chars[charsIdx];
//     }
//   }
//   return UUID;
// }

// function generateUUID() {
//   let chars = "0123456789abcdef".split("");
//   let sections = [8, 4, 4, 4, 16];
//   let UUID = "";
//   sections.forEach((section, idx) => {
//     for (let i = 0; i < section; i++) {
//       let charsIdx = Math.floor(Math.random() * chars.length);
//       UUID += chars[charsIdx];
//     }

//     if (idx < sections.length - 1) UUID += "-";
//   });
//   return UUID;
// }

// function scream(message, helper) {
//   const shout = () => message.toUpperCase();

//   return helper(shout());
// }

// const exclamate = (str) => str + "!!!";

// const foo = ["heLp", "Boo", "arGH", "Oh no"];
// const FOO = foo.map((word) => scream(word, exclamate));

// console.log(FOO);

// console.log(generateUUID());

function evenValues(array) {
  let evens = [];

  array.forEach((value) => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}

console.log(evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]));

console.log(`The end`);
