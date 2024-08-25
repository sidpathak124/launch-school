"use strict";

// ----------------------------------------- OLOO Pattern --------------------------------------------

// let carPrototype = {
//   start() {
//     this.started = true;
//   },

//   stop() {
//     this.started = false;
//   },

//   // automating setting the properties
//   init(make, model, year) {
//     console.log(this);
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     return this;
//   },
// };

// let car1 = Object.create(carPrototype).init("Tata", "Rangerover", 2024);

// console.log(car1);
// car1.start();
// console.log(car1.started);
// car1.stop();
// console.log(car1.started);

// ---------------------------------- Subtyping with Constructors and Prototypes----------------------------

// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.prototype.getArea = function () {
//   return this.length * this.width;
// };

// Rectangle.prototype.toString = function () {
//   return `[Rectangle ${this.length} x ${this.width}]`;
// };

// let rect = new Rectangle(4, 5);
// console.log(rect.getArea());
// console.log(rect.toString());
// // console.log(Rectangle.prototype);

// function Square(side) {
//   Rectangle.call(this, side, side);
// }
// Square.prototype = Object.create(Rectangle.prototype);
// Square.prototype.constructor = Square;

// Square.prototype.toString = function () {
//   return `[Square ${this.length} x ${this.width}]`;
// };

// let sq = new Square(8);
// console.log(sq.getArea());
// console.log(sq.toString());
// console.log(Square.prototype);
// console.log(Square.prototype.constructor);
// console.log(Square.prototype);
// console.log(Square.prototype.constructor);

// function Human() {}
// Human.prototype.myName = function () {
//   return this.name;
// };
// Human.prototype.myAge = function () {
//   return this.age;
// };

// function Person() {}

// Person.prototype = Object.create(Human.prototype);
// Person.prototype.constructor = Person;

// Person.prototype.toString = function () {
//   return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
// };

// let will = Object.create(Person.prototype);
// will.name = "John";
// will.age = 28;

// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   myName() {
//     return this.name;
//   }
//   myAge() {
//     return this.age;
//   }
// }

// class Person extends Human {
//   constructor(name, age) {
//     super(name, age);
//   }

//   toString() {
//     return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
//   }
// }

// let will = new Person("William", 28);
// // console.log(will.toString());

// function Greeting() {}

// Greeting.prototype.greet = function (message) {
//   console.log(message);
// };

// function Hello() {}

// Hello.prototype = Object.create(Greeting.prototype);

// Hello.prototype.hi = function () {
//   this.greet("Hello!");
// };

// function Goodbye() {}

// Goodbye.prototype = Object.create(Greeting.prototype);

// Goodbye.prototype.bye = function () {
//   this.greet("Goodbye");
// };

// let hello = new Hello();
// hello.hi();
// hello.bye();
// hello.greet();
// hello.greet("Goodbye");
// Hello.hi();

// let Person = class {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayName() {
//     return `My name is ${this.name}.`;
//   }
// };

// let Student = class extends Person {
//   constructor(name, age, semester) {
//     super(name, age);
//     this.semester = semester;
//   }

//   enrollInCourse(course) {
//     return `${this.name} is enrolled in the course ${course}`;
//   }
// };

// let sid = new Student("Sid", 32, "fall");
// console.log(sid.sayName());
// console.log(sid.enrollInCourse("MLE"));
// console.log(sid.semester);

let happy = {
  name: "happy",
};

// console.log(happy.__proto__);
// console.log(Object);
// console.log(Object.constructor);
// console.log(Object.prototype);
// console.log(Object.prototype.constructor);
// console.log(Object.__proto__);
// console.log(happy.constructor);
// console.log(happy.hasOwnProperty("constructor"));
// console.log(Object.hasOwnProperty("constructor"));
// console.log(Object.prototype.hasOwnProperty("constructor"));
// console.log(Object.__proto__.hasOwnProperty("constructor"));
// console.log(Object.prototype.constructor === happy.constructor);

// function sayHi(name) {
//   console.log(name);
// }

// console.log(sayHi.prototype);
// console.log(sayHi.prototype.hasOwnProperty("constructor"));
// console.log(Object.getOwnPropertyNames(sayHi));
// console.log(Object.getOwnPropertyNames(sayHi.prototype));

// ---------------------------------------------- Mix ins ------------------------------------------------

// let swimmingBird = {
//   swim() {},
// };

// class Bird {}

// class FlyingBird extends Bird {
//   fly() {}
// }

// class Stork extends FlyingBird {}

// class Parrot extends FlyingBird {}

// class Penguin extends Bird {}
// Object.assign(Penguin.prototype, swimmingBird);

// class Ostrich extends Bird {}
// Object.assign(Ostrich.prototype, swimmingBird);

// class Duck extends FlyingBird {}
// Object.assign(Ostrich.prototype, swimmingBird);

// class Goose extends FlyingBird {}
// Object.assign(Ostrich.prototype, swimmingBird);

// ------OR------ We could remove the class aspect for inheritance as:

// let SwimmingBird = {
//   swim() {},
// };

// let FlyingBird = {
//   fly() {},
// };

// class Stork {}
// Object.assign(Stork.prototype, FlyingBird);

// class Parrot {}
// Object.assign(Stork.prototype, FlyingBird);

// class Penguin {}
// Object.assign(Penguin.prototype, SwimmingBird);

// class Ostrich {}
// Object.assign(Ostrich.prototype, SwimmingBird);

// class Duck {}
// Object.assign(Ostrich.prototype, SwimmingBird, FlyingBird);

// class Goose {}
// Object.assign(Ostrich.prototype, SwimmingBird, FlyingBird);

// console.log(SwimmingBird);
// console.log(SwimmingBird.prototype);
// console.log(SwimmingBird.__proto__);

// console.log(Bird);
// console.log(Bird.prototype);
// console.log(Bird.__proto__);
// console.log(Bird.__proto__.constructor);

// let Swimmable = {
//   swim() {},
// };
// let Flyable = {
//   fly() {},
// };
// function createFlyingBird() {
//   return Object.assign({}, Flyable);
// }
// function createSwimmingBird() {
//   return Object.assign({}, Swimmable);
// }
// function createTalentedBird() {
//   return Object.assign({}, Flyable, Swimmable);
// }
// function Stork() {
//   return createFlyingBird();
// }
// function Parrot() {
//   return createFlyingBird();
// }
// function Penguin() {
//   return createSwimmingBird();
// }
// function Ostrich() {
//   return createSwimmingBird();
// }
// function Duck() {
//   return createTalentedBird();
// }
// function Goose() {
//   return createTalentedBird();
// }

// let target = { a: 1, c: 3 };
// let source1 = { c: 5, e: 7 };
// let source2 = { f: 15 };

// let returnedTarget = Object.assign(target, source1, source2);

// console.log(target === returnedTarget);
// console.log(returnedTarget);
// console.log(source1);
// returnedTarget["c"] = 55;
// returnedTarget["a"] = 20;
// console.log(returnedTarget);
// console.log(target);
// console.log(source1);

const Speed = {
  goFast() {
    // console.log(this);
    // console.log(this.__proto__);
    // console.log(this.__proto__.constructor);
    // console.log(this.constructor);
    // console.log(this.constructor.length);
    // console.log(this.constructor.name);
    // console.log(this.constructor.prototype);
    // console.log(Object.getOwnPropertyNames(this.constructor));
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  },
};

// class Car {
//   goSlow() {
//     console.log(`I'm safe and driving slow.`);
//   }
// }
// Object.assign(Car.prototype, Speed);

// class Truck {
//   goVerySlow() {
//     console.log(`I'm a heavy truck and like going very slow.`);
//   }
// }
// Object.assign(Truck.prototype, Speed);

// let car = new Car();
// let truck = new Truck();

// car.goSlow();
// truck.goVerySlow();

// car.goFast();
// // truck.goFast();

// console.log("goFast" in car); // check whether a method is accessible by an object

// let FuelStats = {
//   range() {
//     return this.fuelCap * this.fuelEfficiency;
//   },
// };

// class WheeledVehicle {
//   constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
//     this.tires = tirePressure;
//     this.fuelEfficiency = kmTravelledPerLiter;
//     this.fuelCap = fuelCapInLiter;
//   }

//   tirePressure(tireIdx) {
//     return this.tires[tireIdx];
//   }

//   inflateTire(tireIdx, pressure) {
//     this.tires[tireIdx] = pressure;
//   }
// }
// Object.assign(WheeledVehicle.prototype, FuelStats);

// class Auto extends WheeledVehicle {
//   constructor() {
//     // the array represents tire pressure for four tires
//     super([30, 30, 32, 32], 50, 25.0);
//   }
// }

// class Motorcycle extends WheeledVehicle {
//   constructor() {
//     // array represents tire pressure for two tires
//     super([20, 20], 80, 8.0);
//   }
// }

// class Catamaran {
//   constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
//     // catamaran specific logic
//     this.propellerCount = propellerCount;
//     this.hullCount = hullCount;
//     this.fuelEfficiency = kmTravelledPerLiter;
//     this.fuelCap = fuelCapInLiter;
//   }
// }
// Object.assign(Catamaran.prototype, FuelStats);

// let catamaran = new Catamaran(2, 2, 3, 250);
// console.log(catamaran.range());

// class Animal {
//   move() {}
// }

// class Fish extends Animal {
//   move() {
//     console.log(`swimming`);
//   }
// }

// class Cat extends Animal {
//   move() {
//     console.log(`running`);
//   }
// }

// class Coral extends Animal {}
// class Sponge extends Animal {}

// let animals = [new Fish(), new Cat(), new Coral(), new Sponge()];

// animals.forEach((animal) => animal.move());

// class Chef {
//   prepare(wedding) {
//     this.prepareFood(wedding.guests);
//   }
//   prepareFood(guests) {}
// }

// class Decorator {
//   prepare(wedding) {
//     this.decoratePlace(wedding.flowers);
//   }
//   decoratePlace(flowers) {}
// }

// class Musician {
//   prepare(wedding) {
//     this.preparePerformance(wedding.songs);
//   }
//   preparePerformance(songs) {}
// }

// class Wedding {
//   constructor(guests, flowers, songs) {
//     this.guests = guests;
//     this.flowers = flowers;
//     this.songs = songs;
//   }

//   prepare(preparers) {
//     preparers.forEach((preparer) => {
//       preparer.prepare(this);
//     });
//   }
// }
function Person(name) {
  this.name = name;
  this.school = undefined;
}

Person.prototype.speak = function () {
  return `Hello, my name is ${this.name}.`;
};

// missing code
function Child(name, school) {
  Person.call(this, name);
  this.school = school;
}

Child.prototype = Object.create(Person);
Child.prototype.constructor = Child;

Child.prototype.learn = function () {
  return "I'm going to school!";
};

let child = new Child("Suzy", "PS 33");
console.log(Person.prototype);
console.log(Object.assign({}, Person.prototype));
console.log(Object.assign(Person.prototype));
console.log(child instanceof Child); // true
console.log(child instanceof Person); // true
console.log(Object.getPrototypeOf(child) === Child.prototype); // true
console.log(Object.getPrototypeOf(child).constructor === Child); // true
console.log(child.school === "PS 33"); // true
console.log(child.learn() === "I'm going to school!"); // true
console.log(child.speak() === "Hello, my name is Suzy."); // true
console.log();

let person = new Person("Pete");
console.log(person instanceof Child === false); // true
console.log(person instanceof Person); // true
console.log(Object.getPrototypeOf(person) === Person.prototype); // true
console.log(Object.getPrototypeOf(person).constructor === Person); // true
console.log(person.school === undefined); // true
console.log(person.speak() === "Hello, my name is Pete."); // true
console.log(person.learn === undefined); // true
// console.log(`the end`);
