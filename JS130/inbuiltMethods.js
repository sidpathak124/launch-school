"use strict";

// Array.prototype.myForEach = function (func, context = this) {
//   let modifiedArr = [];

//   for (let i = 0; i < this.length; i++) {
//     modifiedArr.push(func.call(context, this[i]));
//   }

//   return modifiedArr;
// };
// let expt = [1, 2, 3, 4].myForEach((ele) => ele + 1);
// console.log(expt);

// function myForEach(arr, func, context) {
//   for (let i = 0; i < arr.length; i++) {
//     func.call(context, arr[i], i, arr);
//   }
// }

// class Foo {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   showItem(item) {
//     console.log(this.prefix, item);
//   }
// }
// let foo = new Foo("Item: ");
// let arr = [1, 2, 3, 4];
// myForEach([1, 2, 3], foo.showItem, foo);
// myForEach(["a", "b", "c"], (val, idx, arr) => {
//   console.log(`After ${val} comes ${arr[idx + 1]}`);
// });

// function filter(arr, func, context) {
//   let filteredArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (func.call(context, arr[i], i, arr)) filteredArr.push(arr[i]);
//   }

//   return filteredArr;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, (number) => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, (number) => number < 0)); // => []
// console.log(filter(numbers, () => true)); // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, (value) => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

// function map(arr, func, thisArg) {
//   let mappedArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     mappedArr.push(func.call(thisArg, arr[i], i, arr));
//   }

//   return mappedArr;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, (number) => number * 3)); // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, (number) => number + 1)); // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, (value) => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// function reduce(arr, func, init, thisArg) {
//   let acc = init;
//   let index = 0;

//   if (acc === undefined) {
//     acc = arr[0];
//     index = 1;
//   }

//   while (index < arr.length) {
//     acc = func(acc, arr[index], index, arr);
//     index++;
//   }

//   return acc;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number)); // => 15
// console.log(reduce(numbers, (prod, number) => prod * number)); // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3)); // => 360
// console.log(reduce([], (accum, number) => accum + number, 10)); // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(
//   reduce(
//     stooges,
//     (reversedStooges, stooge) => {
//       reversedStooges.unshift(stooge);
//       return reversedStooges;
//     },
//     []
//   )
// );
// // => ["Curly", "Larry", "Mo"]

// implementing filter with reduce

// function filter(arr, func, thisArg) {
//   return arr.reduce((acc, curr, i, arr) => {
//     if (func.call(thisArg, curr, i, arr)) {
//       acc.push(curr);
//     }
//     return acc;
//   }, []);
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, (number) => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, (number) => number < 0)); // => []
// console.log(filter(numbers, () => true)); // => [ 1, 2, 3, 4, 5 ]

// implementing map with reduce

// function map(arr, func, thisArg) {
//   return arr.reduce((acc, curr, i, arr) => {
//     acc.push(func.call(thisArg, curr, i, arr));
//     return acc;
//   }, []);
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, (number) => number * 3)); // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, (number) => number + 1)); // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, (value) => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// ---------------------------------------------------------------------------------------------
// Emulating array methods for objects

// function objForEach(obj, func) {
//   for (let prop of Object.keys(obj)) {
//     func(prop, obj[prop]);
//   }
// }

// function objForEach(obj, func) {
//   for (let prop in obj) {
//     if (obj.hasOwnProperty(prop)) {
//       func(prop, obj[prop]);
//     }
//   }
// }

let obj = { foo: 1, bar: 2, qux: 3 };
// objForEach(obj, (property, value) => {
//   console.log(`the value of ${property} is ${value}`);
// });

// function objFilter(obj, func) {
//   let filteredObj = {};
//   for (let arr of Object.entries(obj)) {
//     if (func(...arr)) {
//       filteredObj[arr[0]] = arr[1];
//     }
//   }

//   return filteredObj;
// }

// console.log(
//   objFilter(obj, (key, val) => {
//     return val > 1;
//   })
// );

// function objMap(obj, func) {
//   let mappedObj = {};

//   for (let arr of Object.entries(obj)) {
//     mappedObj[arr[0]] = func(arr[0], arr[1]);
//   }

//   return mappedObj;
// }

// console.log(
//   objMap(obj, (key, val) => {
//     return obj[key] + 2;
//   })
// );

console.log(`\nthe end`);
