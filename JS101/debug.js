// let counter = 1;

// while (counter <= 5) {
//   console.log(counter);
//   debugger;
//   counter += 1;
// }

// const ip = "this is not JSON";

// function parseData(data) {
//   let result;

//   try {
//     result = JSON.parse(data);
//   } catch (e) {
//     console.log(`There was a ${e.name} while parsing JSON data: ${e.message}`);

//     result = null;
//   } finally {
//     console.log(`Finished parsing data.`);
//   }

//   return result;
// }

// parseData(ip);

// let dinoError = Error(`Oh no! A dino error`);

// dinoError.name = `DinoError`;
// console.log(`dinoError name: `, dinoError.name);

// console.log(`dinoError message: `, dinoError.message);

// debug.js

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter += 1;
}
