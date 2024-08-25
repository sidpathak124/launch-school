// "use strict";

// function createInvoice(services) {
//   // implement the factory function here
//   // let phoneCharge = services?.phone || 3000;
//   // let internetCharge = services?.internet || 5500;
//   return {
//     phone: services?.phone || 3000,
//     internet: services?.internet || 5500,
//     payments: [],

//     total() {
//       return this.phone + this.internet;
//     },

//     addPayment(payment) {
//       this.payments.push(payment);
//     },

//     addPayments(payments) {
//       console.log(this);
//       payments.forEach(this.addPayment, this);
//     },

//     paymentTotal() {
//       return this.payments.reduce((sum, payment) => sum + payment.total(), 0);
//     },

//     amountDue() {
//       return this.total() - this.paymentTotal();
//     },
//   };
// }

// function invoiceTotal(invoices) {
//   let total = 0;

//   for (let index = 0; index < invoices.length; index += 1) {
//     total += invoices[index].total();
//   }

//   return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({ internet: 6500 }));
// invoices.push(createInvoice({ phone: 2000 }));
// invoices.push(
//   createInvoice({
//     phone: 1000,
//     internet: 4500,
//   })
// );
// console.log(invoiceTotal(invoices)); // 31000

function createPayment(services) {
  // implement the factory function here
  return {
    phone: services?.phone || 0,
    internet: services?.internet || 0,
    amount: services?.amount || 0,

    total() {
      return this.phone + this.internet + this.amount;
    },
  };
}

// function paymentTotal(payments) {
//   return payments.reduce((sum, payment) => sum + payment.total(), 0);
// }

// let payments = [];
// payments.push(createPayment());
// payments.push(
//   createPayment({
//     internet: 6500,
//   })
// );

// payments.push(
//   createPayment({
//     phone: 2000,
//   })
// );

// payments.push(
//   createPayment({
//     phone: 1000,
//     internet: 4500,
//   })
// );

// payments.push(
//   createPayment({
//     amount: 10000,
//   })
// );

// console.log(paymentTotal(payments)); // => 24000

// let invoice = createInvoice({
//   phone: 1200,
//   internet: 4000,
// });

// let payment1 = createPayment({ amount: 2000 });
// let payment2 = createPayment({
//   phone: 1000,
//   internet: 1200,
// });

// let payment3 = createPayment({ phone: 1000 });

// invoice.addPayment(payment1);
// invoice.addPayments([payment2, payment3]);
// console.log(invoice.amountDue()); // this should return 0

// ---------------------------- Object Oriented Inventory Management System ----------------------------------------

// function Inventory(id, name, stock, price) {
//   return {
//     id,
//     name,
//     stock,
//     price,

//     setPrice(newPrice) {
//       if (newPrice < 0) {
//         console.log(`Price cannot be less than 0`);
//         return;
//       }
//       this.price = newPrice;
//     },

//     describeProduct() {
//       console.log(`=> Name: ${this.name}`);
//       console.log(`=> ID: ${this.id}`);
//       console.log(`=> Price: $${this.price}`);
//       console.log(`=> Stock: ${this.stock}`);
//     },
//   };
// }

// let scissors = Inventory(0, "Scissors", 8, 10);
// let drill = Inventory(1, "Cordless Drill", 15, 45);
// let hammer = Inventory(2, "War Hammer", 3, 22);
// let saw = Inventory(3, "Table Saw", 8, 19);

// console.log(scissors);
// drill.setPrice(65);
// console.log(drill);
// hammer.describeProduct();
// saw.describeProduct();

// ------------------------------------------------- Constructor ---------------------------------------------------

// function Car(make, model, year) {
//   this.make = make;
// this.model = model;
// this.year = year;
// this.started = false;

//   this.start = function () {
//     this.started = false;
//   };

//   this.stop = function () {
//     this.started = true;
//   };
// }

// let corolla = new Car("Toyota", "Corolla", 2016);
// let leaf = new Car("Nissan", "LEAF", 2018);
// let nova = new Car("Chevrolet", "Nova", 1974);

// console.log(Car.prototype);
// console.log(Object.getPrototypeOf(Car));
// console.log(Car.__proto__);

// console.log(corolla.prototype);
// console.log(Object.getPrototypeOf(corolla));
// console.log(corolla.__proto__);

// let Car = (make, model, year) => {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.started = false;
// };

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;

//   this.bark = function () {
//     console.log(this.weight > 20 ? "Woof!" : "Yip!");
//   };
// }

// Dog.prototype.bark = function () {
//   console.log(this.weight > 20 ? `Woof!` : `Yip!`);
// };

// function Dog(name, breed, weight) {
//   // Object.setPrototypeOf(this, Dog.myPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// let maxi = new Dog("Maxi", "German Shepherd", 32);
// let dexter = new Dog("Dexter", "Rottweiler", 50);
// let biggie = new Dog("Biggie", "Whippet", 9);

// maxi.bark(); // 'Woof!'

// console.log(maxi.hasOwnProperty("bark"));
// console.log(dexter.hasOwnProperty("bark"));
// console.log(biggie.hasOwnProperty("bark"));

// console.log(maxi.bark === dexter.bark);
// console.log(maxi.bark === biggie.bark);
// console.log(dexter.bark === biggie.bark);

// console.log(Dog.prototype);
// console.log(Object.getPrototypeOf(Dog));
// console.log(Object.getPrototypeOf(maxi));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(maxi)));
// console.log(
//   Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(maxi)))
// );
// console.log(maxi.__proto__);
// console.log(maxi.constructor === Dog);

// maxi.bark();
// dexter.bark = function () {
//   console.log(`WOOF!`);
// };
// dexter.bark();

// console.log(Dog.prototype.constructor === maxi.constructor); // true
// console.log(maxi.constructor === Dog); // true

// Dog.prototype.constructor = function () {};

// console.log(maxi.constructor === Dog); // false
// console.log(maxi instanceof Dog); // true

// --------------------------------- Practice problems: Constructors and prototypes --------------------------------

// let RECTANGLE = {
//   area: function () {
//     return this.width * this.height;
//   },
//   perimeter: function () {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);

// console.log(rect1.area);
// console.log(rect1.perimeter);

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.area = function () {
//   return this.radius * this.radius * Math.PI;
// };

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27
// console.log(a.hasOwnProperty("area")); // => false

// function Ninja() {
//   console.log(this);
//   console.log(Object.getPrototypeOf(this));
//   this.swung = false;
// }

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object

// Ninja.prototype.swing = function () {
//   this.swung = true;
//   console.log(this);
//   return this;
// };

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// console.log(ninjaA.swing().swung); // logs `true`
// console.log(ninjaB.swing().swung); // logs `true`  this.swung = true;

// console.log(Ninja.prototype);
// console.log(Object.getOwnPropertyNames(Ninja));

// function User(first, last) {
//   // ...
//   this.name = `${first} ${last}`;

//   return this;
// }

// function User(first, last) {
//   // ...
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }
//   this.name = `${first} ${last}`;
// }

// let user1 = new User("John", "Doe");
// let user2 = User("John", "Doe");

// console.log(user1.name); // => John Doe
// console.log(user2.name); // => John Doe

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed; // instance properties
//   this.weight = weight;
//   Dog.dogCount += 1; // static property
// }

// Dog.prototype.bark = function () {
//   // instance method
//   console.log(`Woof!`);
// };

// Dog.species = "Canis Lupus"; // static property
// Dog.dogCount = 0;
// Dog.showSpecies = function () {
//   // static method
//   console.log(`Dogs belong to the species ${Dog.species}`);
// };

// let maxi = new Dog("Maxi", "German Shephard", 32);
// let rocky = new Dog("Rocky", "Rottweiler", 52);

// rocky.bark = function () {
//   // Overriding instance method
//   console.log(`WOOF!!`);
// };

// console.log(Dog.dogCount);
// maxi.bark();
// rocky.bark();
// Dog.showSpecies();

// let nums = new Array(4.0).fill("No");
// console.log(nums);

// console.log(Array.isArray([]));
// console.log(Array.isArray({}));

// console.log(Array.from({ 3: "a", 1: "b", 2: "c", length: 10 }));

let arrayFrom = (obj) => {
  let len = obj.length;
  let arr = [];

  for (let idx = 0; idx < len; idx++) {
    arr.push(obj[idx]);
  }

  return arr;
};

// console.log(arrayFrom({ 0: "a", 1: "b", 2: "c", length: 3 }));

// console.log(Object.getPrototypeOf(Array.prototype));

// console.log({ 0: "a", 1: "b", 2: "c", length: 3 }.toString());
// console.log({}.toString());
// console.log([1, 2, 3].toString());
// console.log(arrayFrom.toString());

// let now = new Date("May 1, 1993 05:23 pm");
// console.log(now);
// console.log(now.toString());
// console.log(typeof now);
// console.log(typeof now.toString());

// console.log(Date.parse(now.toString()));
// console.log(Date.parse(now));

// console.log(new Date(Date.UTC(99, 7, 12, 6, 40, 34)));

let strPrim = "xyz";
let strObj = new String("xyz");
// console.log(typeof strPrim);
// console.log(typeof strObj);

// console.log(strPrim, strObj);
// console.log(strObj.valueOf());
// console.log(typeof strObj.valueOf());
// console.log(String([1, 2, 3]));
// console.log(typeof String([1, 2, 3]));

// console.log(new Number(3));
// console.log(typeof new Number(3));

// console.log(new Boolean(1));
// console.log(typeof new Boolean(1));

// let nums = [1, 2, 3, 4];

// Array.prototype.first = function () {
//   return this[0];
// };

// console.log(nums.first());

// let strE = "EEE";

// console.log(Array.prototype.every.call(strE, (char) => char === "E"));
// console.log([].every.call(strE, (char) => char === "E"));

// console.log([].filter.call("olives", (char) => char < "m").join(""));

// function convertCase(char) {
//   if (char === char.toLowerCase()) {
//     return char.toUpperCase();
//   }
//   return char.toLowerCase();
// }
// let str = "Naveed Fida";
// // console.log([].map.call(str, convertCase).join(""));
// console.log([1, 2, 3].map.call(str, convertCase).join(""));
// console.log(Array.from(str).map(convertCase).join(""));
// console.log(str.split("").map(convertCase).join(""));
class Foo {
  constructor(parm) {
    this.parm = parm;
  }

  static bar() {
    // omitted code
  }
}

let foo = new Foo(10);
console.log(typeof Foo);
console.log(Foo.bar());
// console.log(foo.qux());

// console.log("the end");
