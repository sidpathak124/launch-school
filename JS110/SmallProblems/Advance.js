"use strict";

// function madLibs(template) {
//   let rlSync = require("readline-sync");

//   let nouns = ["fox", "dog", "head", "leg", "tail", "cat"];
//   let verbs = ["jumps", "lifts", "bites", "licks", "pats"];
//   let adverbs = ["easily", "lazily", "noisily", "excitedly"];
//   let adjectives = ["quick", "lazy", "sleepy", "noisy", "hungry"];

//   let randomIndices = [];
//   for (let i = 0; i <= 3; i++) {
//     randomIndices.push(Math.floor(Math.random() * 4));
//   }

//   template = template.replace(/\bnoun/gi, nouns[randomIndices[0]]);
//   template = template.replace(/\bverb/gi, verbs[randomIndices[1]]);
//   template = template.replace(/\badverb/gi, adverbs[randomIndices[2]]);
//   template = template.replace(/\badjective/gi, adjectives[randomIndices[3]]);

//   return template;
// }

// let template1 = `The adjective brown noun adverb verb the adjective yellow noun, who adverb verb his noun, and looks around.`;

// console.log(madLibs(template1));

// --------------------------------------------------------------------------------------------------------

// let matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];
// console.log(matrix);
// let newMatrix = transpose(matrix);

// function transpose(matrix) {
//   return matrix.map((_, idx) => [
//     matrix[0][idx],
//     matrix[1][idx],
//     matrix[2][idx],
//   ]);
// }

// function transpose(matrix) {
//   let transpose = [];
//   matrix.forEach((row) => transpose.push([]));

//   for (let row = 0; row < matrix.length; row++) {
//     for (let column = 0; column < matrix.length; column++) {
//       transpose[column].push(matrix[row][column]);
//     }
//   }
//   return transpose;
// }

// function transposeInPlace() {
//   let transpose = [];
//   matrix.forEach((row) => transpose.push([]));

//   for (let row = 0; row < matrix.length; row++) {
//     for (let column = 0; column < matrix.length; column++) {
//       transpose[column].push(matrix[row][column]);
//     }
//   }

//   matrix = matrix.map((_, idx) => transpose[idx]);
//   return matrix;
// }
// transposeInPlace(matrix);

// // console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// --------------------------------------------------------------------------------------------------------

// const matrix = [
//   [1, 5, 8, 5],
//   [4, 7, 2, 0],
//   [3, 9, 6, 1],
// ];

// function transpose(matrix) {
//   let transpose = [];
//   // Must have as many rows in transpose as columns in original
//   matrix[0].forEach((col) => transpose.push([]));

//   for (let row = 0; row < matrix.length; row++) {
//     for (let column = 0; column < matrix[0].length; column++) {
//       transpose[column].push(matrix[row][column]);
//     }
//   }
//   console.log(transpose);
//   return transpose;
// }

// let newMatrix = transpose(matrix);

// console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
// console.log(matrix); // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

// transpose([[1, 2, 3, 4]]); // [[1], [2], [3], [4]]
// transpose([[1], [2], [3], [4]]); // [[1, 2, 3, 4]]
// transpose([[1]]); // [[1]]

// transpose([
//   [1, 2, 3, 4, 5],
//   [4, 3, 2, 1, 0],
//   [3, 7, 8, 6, 2],
// ]);
// // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

// --------------------------------------------------------------------------------------------------------

// let matrix1 = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// let matrix2 = [
//   [3, 7, 4, 2],
//   [5, 1, 0, 8],
// ];

// function rotate90(matrix, AnticlockWise = true) {
//   let rotated = matrix[0].map((_, idx) => []);

//   if (AnticlockWise) {
//     for (let row = matrix.length - 1; row >= 0; row--) {
//       for (let col = 0; col < matrix[0].length; col++) {
//         rotated[col].push(matrix[row][col]);
//       }
//     }
//   } else {
//     let colLength = matrix[0].length - 1;
//     for (let row = 0; row < matrix.length; row++) {
//       for (let col = colLength; col >= 0; col--) {
//         rotated[colLength - col].push(matrix[row][col]);
//       }
//     }
//   }
//   return rotated;
// }

// let newMatrix1 = rotate90(matrix1);
// let newMatrix2 = rotate90(matrix2);
// let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

// console.log(newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
// console.log(newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(newMatrix3); // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

// let newMatrix4 = rotate90(matrix1, false);
// let newMatrix5 = rotate90(matrix2, false);
// let newMatrix6 = rotate90(
//   rotate90(rotate90(rotate90(matrix2, false), false), false),
//   false
// );

// console.log(newMatrix4); // [[ 8, 2, 6 ], [ 5, 7, 9 ], [ 1, 4, 3 ] ]
// console.log(newMatrix5); // [[ 2, 8 ], [ 4, 0 ], [ 7, 1 ], [ 3, 5 ]]
// console.log(newMatrix6); // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

// --------------------------------------------------------------------------------------------------------
