// "use strict";

// let Cat = {
//   purr() {
//     console.log(`purr.....`);
//   },

//   eat() {
//     console.log(`I am eating....`);
//   },
// };

// let cheddar = Object.assign({}, Cat);
// let cocoa = Object.assign({}, Cat);

// cheddar.name = "Cheddar";
// cheddar.color = "Orange";
// cheddar.gender = "male";

// console.log(cheddar);

let Cessna152 = {
  fuelCapacityInGallons: 24.5,
  cruisingSpeedInKnots: 111,

  takeOff() {
    console.log(`Aircraft taking off....`);
  },

  landing() {
    console.log(`Aircraft landing....`);
  },
};

// console.log(Cessna152);
// Cessna152.takeOff();
// Cessna152.landing();
// console.log(Cessna152.fuelCapacityInGallons);
// console.log(Cessna152.cruisingSpeedInKnots);

// function Book(title, author, yearPublished) {
//   console.log(this, typeof this);
//   this.title = title;
//   this.author = author;
//   this.yearPublished = yearPublished;
// }
// console.log(Book("Neuromancer", `William Gibson`, 1984));
// let neuromancer = new Book("Neuromancer", `William Gibson`, 1984);
// let doomsdayBook = new Book("Doomsday Book", `Connie Willis`, 1992);

// console.log(neuromancer);
// console.log(doomsdayBook);

function MusicAlbum(title, artist, releaseYear) {
  console.log(this, typeof this);
  this.title = title;
  this.artist = artist;
  this.releaseYear = releaseYear;
}
// console.log(MusicAlbum("Thriller", `Michael Jackson`, 1982));
// let thriller = new MusicAlbum("Thriller", `Michael Jackson`, 1982);
// let theDarkSideOfTheMoon = new MusicAlbum(
//   "The Dark Side of The Moon",
//   `Pink Floyd`,
//   1973
// );

// console.log(thriller);
// console.log(theDarkSideOfTheMoon);

function SmartPhone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;

  this.checkBatteryLevel = function () {
    console.log(`${this.brand} ${this.model} has 75% battery remaining`);
  };

  this.displayInfo = function () {
    console.log(`${this.brand} ${this.model} ${this.releaseYear}`);
  };
}

// let apple = new SmartPhone("Apple", "iPhone 12", 2020);
// let samsung = new SmartPhone("Samsung", "Galaxy S21", 2021);

// apple.checkBatteryLevel();
// apple.displayInfo();
// samsung.checkBatteryLevel();
// samsung.displayInfo();

// ---------------------------------------------The Object Model--------------------------------------------

// let cat = {
//   move() {
//     console.log("The cat is walking");
//   },
// };

// let planet = {
//   move() {
//     console.log("The planet is revolving around the sun");
//   },
// };

// for (let item of [cat, planet]) {
//   item.move();
// }

// function foo() {
//   this.foo = 42;
// }

// let obj = new foo();
// console.log(obj instanceof foo); // true
// console.log(obj.constructor); // [Function: foo]

// function Foo() {
//   return {
//     foo: 42,
//   };
// }

// let Obj = Foo();
// console.log(Obj instanceof Foo); // false
// console.log(Obj.constructor); // [Function: Object]

function Fruit(name, color) {
  return {
    name,
    color,

    isRipe() {
      return `This ${this.name} is ripe.`;
    },

    describe() {
      return `This ${this.name} is ${this.color}.`;
    },
  };
}

// let apple = Fruit("Apple", "Red");
// let banana = Fruit("Banana", "Yellow");
// let blackBerry = Fruit("Black Berry", "Black");

// console.log(apple.isRipe());
// console.log(banana.describe());
// console.log(blackBerry.isRipe());

// function Phone(brand, model, releaseYear) {
//   return {
//     brand,
//     model,
//     releaseYear,

//     checkBatteryLevel() {
//       console.log(`${this.brand} ${this.model} has 75% battery remaining`);
//     },

//     displayInfo() {
//       console.log(`${this.brand} ${this.model} ${this.releaseYear}`);
//     },
//   };
// }

// let apple = Phone("Apple", "iPhone 12", 2020);
// let samsung = Phone("Samsung", "Galaxy S21", 2021);

// apple.checkBatteryLevel();
// samsung.displayInfo();

function createInstrument(instrument, instrumentType) {
  return {
    instrument,
    instrumentType,

    play() {
      console.log(`We are playing a tune on this ${this.instrument}`);
    },

    showType() {
      console.log(
        `This ${this.instrument} is a ${this.instrumentType} instrument`
      );
    },
  };
}

// let violin = createInstrument("violin", "string");
// violin.play(); // We are playing a tune on this violin
// violin.showType(); // This violin is a string instrument

// let flute = createInstrument("flute", "wind");
// flute.play(); // We are playing a tune on this flute
// flute.showType(); // This flute is a wind instrument

// let drum = createInstrument("drum", "percussion");
// drum.play(); // We are playing a tune on this drum
// drum.showType(); // This drum is a percussion instrument
// // console.log("the end");

// class Cat {
//   constructor(name, age, color) {
//     this.name = name;
//     this.age = age;
//     this.color = color;
//   }

//   speak() {
//     console.log(
//       `Meow. I am ${this.name}. ` +
//         `I am a ${this.age}-year-old ${this.color} cat.`
//     );
//   }
// }

// let cocoa = new Cat("Cocoa", 3, "Brown");

// cocoa.speak();
// console.log(cocoa);
// console.log(cocoa instanceof Cat);
// console.log(cocoa.constructor);

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   area() {
//     return this.height * this.width;
//   }
// }

// let rect = new Rectangle(3, 5);
// console.log(rect.area());

// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//     // this.side = side;
//   }
// }

// let sq = new Square(3);
// console.log(sq.area());
// console.log(sq.side);

// class Phone {
//   constructor(brand, model, releaseYear) {
//     this.brand = brand;
//     this.model = model;
//     this.releaseYear = releaseYear;
//   }

//   checkBatteryLevel() {
//     console.log(`${this.brand} ${this.model} has 75% battery remaining`);
//   }

//   displayInfo() {
//     console.log(`${this.brand} ${this.model} ${this.releaseYear}`);
//   }
// }

// let apple = new Phone("Apple", `iPhone 12`, 2012);
// apple.checkBatteryLevel();

// class Vehicle {
//   constructor(color, weight) {
//     this.color = color;
//     this.weight = weight;
//   }

//   accelerate() {
//     return `The vehicle is speeding up`;
//   }

//   decelerate() {
//     return `The vehicle is slowing down`;
//   }
// }

// class Car extends Vehicle {
//   constructor(color, weight, licenseNumber) {
//     super(color, weight);
//     this.licenseNumber = licenseNumber;
//   }

//   honk() {
//     return `Beep....Beep !!`;
//   }
// }

// class Boat extends Vehicle {
//   constructor(color, weight, homePort) {
//     super(color, weight);
//     this.homePort = homePort;
//   }

//   dropAnchor() {
//     console.log(`Anchor coming down........Thud!!`);
//   }
// }

// class Plane extends Vehicle {
//   constructor(color, weight, airline) {
//     super(color, weight);
//     this.airline = airline;
//   }

//   takeOff() {
//     return `Plani is ready for takeoff. Hooo...`;
//   }

//   land() {
//     return `Plani is ready for landing. Zooo...`;
//   }
// }

// let car = new Car("red", 3300, "BXY334");
// console.log(car.accelerate()); // Accelerate
// console.log(car.honk()); // Honk
// console.log(car.decelerate()); // Decelerate
// console.log(car.color, car.weight, car.licenseNumber);
// // red 3300 BXY334

// let boat = new Boat("yellow", 12000, "Bahamas");
// console.log(boat.accelerate()); // Accelerate
// console.log(boat.decelerate()); // Decelerate
// console.log(boat.dropAnchor()); // Drop anchor
// console.log(boat.color, boat.weight, boat.homePort);
// // yellow 12000 Bahamas

// let plane = new Plane("blue", 83000, "Southwest");
// console.log(plane.accelerate()); // Accelerate
// console.log(plane.takeOff()); // Take off
// console.log(plane.land()); // Land
// console.log(plane.decelerate()); // Decelerate
// console.log(plane.color, plane.weight, plane.airline);
// // blue 83000 Southwest

// console.log(car instanceof Vehicle);
// console.log(boat instanceof Vehicle);

// console.log(car instanceof Car);
// console.log(boat instanceof Car);

// class Lion extends Cat {
//   constructor(name, age, color, kills) {
//     super(name, age, color);
//     this.kills = kills;
//   }

//   roar() {
//     console.log(`RAWWRRRRR.........`);
//   }
// }

// let mufasa = new Lion("Mufasa", 19, "deep-brown", 1);

// mufasa.roar();
// console.log(mufasa.kills);
// console.log(mufasa);

// let database = {
//   getStudentID(name) {
//     return 123123131211;
//   },
// };
// class Student {
//   #firstName;
//   #lastName;
//   #track;

//   constructor(firstName, lastName, track) {
//     this.#firstName = firstName;
//     this.#lastName = lastName;
//     this.track = track;
//   }

//   get name() {
//     return [this.firstName, this.lastName];
//   }

//   get firstName() {
//     return this.#firstName;
//   }

//   get lastName() {
//     return this.#lastName;
//   }

//   get track() {
//     return this.#track;
//   }

//   set track(newTrack) {
//     switch (newTrack.toLowerCase()) {
//       case "python":
//       case "ruby":
//       case "javascript":
//         this.#track = newTrack;
//         break;
//       default:
//         throw new Error(`Invalid track: ${newTrack}`);
//     }
//   }

//   #revealStudentID() {
//     let StudentID = database.getStudentID(this.name);
//     return StudentID;
//   }

//   exctractSecretStudentID() {
//     return this.#revealStudentID();
//   }
// }

// let student = new Student("Sid", "Pathak", "JavaScript");
// console.log(
//   `The student ${student.name.join(" ")} is in ${student.track} track.`
// );
// console.log(student.exctractSecretStudentID());
// // console.log(student.#revealStudentID()); // throws error

// let student2 = new Student("Kay", "Oakley", "JavaScript");
// console.log(`${student2.name.join(" ")} ${student2.track}`);
// // Kay Oakley JavaScript

// let student3 = new Student("Bill", "Wisner", "Python");
// console.log(`${student3.name.join(" ")} ${student3.track}`);
// // Bill Wisner Python

// student3.track = "ruby";
// console.log(`${student3.name.join(" ")} ${student3.track}`);
// let student4 = new Student("Kim", "Serkes", "Gnome");
// console.log(`${student4.name.join(" ")} ${student4.track}`);
// Invalid track: 'Gnome'

// class MyClass {
//   static staticMethod() {
//     console.log(`This is a static method`);
//   }

//   instanceMethod() {
//     console.log(`This is an instance method`);
//   }
// }

// MyClass.staticMethod();

// let inst = new MyClass();
// inst.instanceMethod();
// inst.staticMethod(); // error

class Student {
  static counter = 0;

  static showCounter() {
    console.log(`We have created ${Student.counter} students`);
  }

  constructor(name) {
    this.name = name;
    Student.counter += 1;
  }
}

// let ken = new Student("Ken");
// let lynn = new Student("Lynn");
// Student.showCounter(); // We have created 2 students!

class Person {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  showAge() {
    console.log(this.#age);
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this.#age = newAge;
    } else {
      throw new Error(`Age must be a positive number.`);
    }
  }
}

// let person = new Person("John", 30);
// person.showAge(); // 30
// person.age = 31;
// person.showAge(); // 31

// try {
//   // This line should raise a RangeError,
//   // but does not.
//   person.age = -5;
//   person.showAge(); // -5
// } catch (e) {
//   // The following line should run, but won't
//   console.log("RangeError: Age must be positive");
// }

class Book {
  // your code here
  static leastYear = 1900;
  #title;
  #author;
  #year;

  constructor(title, author, year) {
    this.#title = title;
    this.#author = author;
    this.#year = year;
  }

  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get year() {
    return this.#year;
  }

  set year(newYear) {
    if (newYear < Book.leastYear)
      throw new RangeError(`Year must be after ${Book.leastYear}`);
    this.#year = newYear;
  }
}

// let book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
// console.log(book.title); // The Great Gatsby
// console.log(book.author); // F. Scott Fitzgerald
// console.log(book.year); // 1925

// book.year = 1932; // Changing year
// console.log(book.year); // 1932

// try {
//   book.year = 1825;
// } catch (e) {
//   console.log(e); // RangeError: Invalid year
// }

// try {
//   let book2 = new Book("A Tale of Two Cities", "Charles Dickents", 1859);
// } catch (e) {
//   console.log(e); // RangeError: Invalid year
// }

class BankAccount {
  // your code here
  #balance;

  constructor() {
    this.#balance = 0;
  }

  #checkBalance() {
    console.log(`Current Balance: $${this.#balance}`);
  }

  deposit(amt) {
    this.#balance += amt;
    this.#checkBalance();
  }

  withdraw(amt) {
    if (this.#balance - amt >= 0) {
      this.#balance -= amt;
    } else {
      throw new RangeError(`Insufficient Funds`);
    }
    this.#checkBalance();
  }
}

// let account = new BankAccount();
// account.deposit(100);
// account.withdraw(50);
// account.withdraw(100); // RangeError: Insufficient funds

// class Rectangle {
//   // your code here
//   #width;
//   #height;

//   constructor(width, height) {
//     this.#width = width;
//     this.#height = height;
//   }

//   get width() {
//     return this.#width;
//   }

//   get height() {
//     return this.#height;
//   }

//   get area() {
//     return this.#width * this.#height;
//   }

//   set width(size) {
//     if (size <= 0) throw new RangeError(`width must be positive`);
//     this.#width = size;
//   }

//   set height(size) {
//     if (size <= 0) throw new RangeError(`height must be positive`);
//     this.#height = size;
//   }
// }

// let rect = new Rectangle(10, 5);
// console.log(rect.area); // 50

// rect.width = 20;
// console.log(rect.area); // 100

// rect.height = 12;
// console.log(rect.area); // 240

// try {
//   rect.width = 0;
// } catch (e) {
//   console.log(e); // RangeError: width must be positive
// }

// try {
//   rect.height = -10;
// } catch (e) {
//   console.log(e); // RangeError: height must be positive
// }

class MathUtils {
  // your code here
  static add(num1, num2) {
    return num1 + num2;
  }

  static subtract(num1, num2) {
    return num1 - num2;
  }

  static multiply(num1, num2) {
    return num1 * num2;
  }

  static divide(num1, num2) {
    if (num2 === 0) throw new RangeError(`Division by Zero`);
    return num1 / num2;
  }
}

// console.log(MathUtils.add(5, 3)); // 8
// console.log(MathUtils.subtract(10, 4)); // 6
// console.log(MathUtils.multiply(6, 7)); // 42
// console.log(MathUtils.divide(20, 5)); // 4
// console.log(MathUtils.divide(10, 0)); // RangeError: Division by zero

// class Cat {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   whoAmI() {
//     console.log(`My name is ${this.name}. I am a ${this.color} cat.`);
//   }
// }

// let cheddar = new Cat("Cheddar", "ginger");

// let cheddar_proto = Object.getPrototypeOf(cheddar);
// console.log(cheddar_proto);
// console.log(Object.getOwnPropertyNames(cheddar_proto));
// // ['constructor', 'whoAmI'];
// cheddar.whoAmI();
// My name is Cheddar. I am a ginger cat.
// console.log(Cat.prototype);
// console.log(new Cat("a", "b"));

// class Animal {}
// class Lion extends Animal {}
// let simba = new Lion();
// console.log(Object.getPrototypeOf(simba) === Lion.prototype);

// let myProto = {
//   roar() {
//     console.log(`ROAARRR....`);
//   },
// };

// Object.setPrototypeOf(simba, myProto);
// console.log(Object.getPrototypeOf(simba) === Lion.prototype);
// console.log(Object.getPrototypeOf(simba));

class Foo {
  static identity() {
    console.log("This is Foo.identity()");
  }
}

class Bar {
  static whoAmI() {
    console.log("This is Bar.whoAmI()");
  }
}

// Foo and Bar initially have Function.prototype as their
// object prototypes.
// console.log(Object.getPrototypeOf(Foo)); // true
// console.log(Object.getPrototypeOf(Bar)); // true

// // This changes Bar's object prototype to Foo, which lets
// // Bar inherit Foo's static methods. However, Bar does *not*
// // inherit Foo's instance methods.
// Object.setPrototypeOf(Bar, Foo);
// console.log(Bar.__proto__);
// console.log(Bar.__proto__.__proto__);
// console.log(Bar.__proto__.__proto__.__proto__);

// // Bar can access both Bar.whoAmI and Foo.identity
// Bar.whoAmI(); // This is Bar.whoAmI()
// Bar.identity(); // This is Foo.identity()

// let foo = () => console.log("foo");
// console.log(foo.prototype);
// console.log(Object.getPrototypeOf(foo));
// console.log(foo.__proto__);
// console.log(foo.__proto__.__proto__);
// console.log(foo.__proto__.__proto__.__proto__);

// class Animal {}

// Animal.prototype.foo = function () {
//   console.log(`This is foo`);
// };

// Animal.prototype.bar = function () {
//   console.log(`This is bar`);
// };

// let cocoa = new Animal();

// console.log(Animal.prototype);
// console.log(Animal.prototype.prototype);
// console.log(Animal);
// console.log(Object.getPrototypeOf(Animal));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Animal)));
// console.log(Animal.__proto__);
// console.log(Animal.__proto__.__proto__);
// console.log(Animal.__proto__.__proto__.__proto__);

// console.log(cocoa);
// console.log(Object.getPrototypeOf(cocoa));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(cocoa)));

// class Mammal {
//   foo() {
//     console.log("Mammal.foo");
//   }
// }

// class Whale extends Mammal {
//   foo() {
//     console.log("Whale.foo");
//   }
// }

// class Beluga extends Whale {}

// let beluga = new Beluga();
// beluga.foo(); // Whale.foo
// beluga.bar();       // TypeError: beluga.bar is not a function

// console.log(Object.getPrototypeOf(beluga));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(beluga)));
// console.log(
//   Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(beluga)))
// );
// console.log(
//   Object.getPrototypeOf(
//     Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(beluga)))
//   )
// );

// console.log(Beluga.prototype);
// console.log(Whale.prototype);

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.eat = function () {
//   console.log(`${this.name} is eating`);
// };

// function Mammal(name, hasFur) {
//   Animal.call(this, name);
//   this.hasFur = hasFur;
// }
// Mammal.prototype = Object.create(Animal.prototype);
// // resetting the Mammal.prototype.constructor property
// Mammal.prototype.constructor = Mammal;

// Mammal.prototype.sleep = function () {
//   console.log(`${this.name} is sleeping`);
// };

// function Dog(name, hasFur, breed) {
//   Mammal.call(this, name, hasFur);
//   this.breed = breed;
// }

// Dog.prototype = Object.create(Mammal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function () {
//   console.log(`${this.name} the ${this.breed} is barking`);
// };

// let dingo = new Dog("Dingo", true, "German Shephard");

// dingo.eat();
// dingo.sleep();
// dingo.bark();

// let obj = Object.create({
//   foo() {},
//   bar() {},
// });

// console.log(Object.getPrototypeOf(obj));

// function Phone(brand, model, year) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
// }

// Phone.prototype.checkBatteryLevel = function () {
//   console.log(`${this.brand} ${this.model} has 75% battery remaining`);
// };

// Phone.prototype.displayInfo = function () {
//   console.log(`${this.brand} ${this.model} ${this.year}`);
// };

// let apple = new Phone("Apple", "iPhone 12", 2012);
// console.log(apple);
// apple.checkBatteryLevel();
// apple.displayInfo();

// console.log(Phone.prototype);

// function Vehicle(color, weight) {
//   this.color = color;
//   this.weight = weight;
// }

// Vehicle.prototype.accelerate = function () {
//   return `accelerate`;
// };
// Vehicle.prototype.decelerate = function () {
//   return `decelerate`;
// };

// function Car(color, weight, licenseNumber) {
//   Vehicle.call(this, color, weight);
//   this.licenseNumber = licenseNumber;
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// Car.prototype.honk = function () {
//   return `honk!!!`;
// };

// function Boat(color, weight, homePort) {
//   Vehicle.call(this, color, weight);
//   this.homePort = homePort;
// }
// Boat.prototype = Object.create(Vehicle.prototype);
// Boat.prototype.constructor = Boat;

// Boat.prototype.dropAnchor = function () {
//   return `Drop ANCHOR!!!`;
// };

// function Airplane(color, weight, airline) {
//   Vehicle.call(this, color, weight);
//   this.airline = airline;
// }
// Airplane.prototype = Object.create(Vehicle.prototype);
// Airplane.prototype.constructor = Airplane;

// Airplane.prototype.landing = function () {
//   return `Plane Landing`;
// };

// Airplane.prototype.takeoff = function () {
//   return `Plane taking off`;
// };

// let car = new Car("red", 1000, "MK62255");
// console.log(car.accelerate());
// console.log(car.honk());

// let boat = new Boat("white", 50000, "Daman");
// console.log(boat.decelerate());
// console.log(boat.dropAnchor());

// let airplane = new Airplane("white", 20000, "Air Canada");
// console.log(airplane.accelerate());
// console.log(airplane.takeoff());

class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  whoAmI() {
    console.log(`My name is ${this.name}. I am a ${this.color} cat.`);
  }
}

// let cheddar = new Cat("Cheddar", "ginger");

// console.log(Object.getPrototypeOf(Cat)); // function prototype
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Cat)));
// console.log(Object.getPrototypeOf(cheddar)); // object prototype
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(cheddar)));
// console.log(Cat.prototype); // o
// console.log(Cat.__proto__);

// console.log(Function.prototype);

// console.log(Object.getOwnPropertyNames(cheddar_proto));
// ['constructor', 'whoAmI'];

// cheddar.whoAmI();
// // My name is Cheddar. I am a ginger cat.

// console.log(Object.getPrototypeOf(Foo) === Function.prototype); // true
// console.log(Object.getPrototypeOf(Bar) === Function.prototype); // true
// // This changes Bar's object prototype to Foo, which lets
// // Bar inherit Foo's static methods. However, Bar does *not*
// // inherit Foo's instance methods.
// Object.setPrototypeOf(Bar, Foo);

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};

function Mammal(name, hasFur) {
  Animal.call(this, name);
  this.hasFur = hasFur;
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

Mammal.prototype.sleep = function () {
  console.log(`${this.name} is sleeping.`);
};

function Dog(name, hasFur, breed) {
  Mammal.call(this, name, hasFur);
  this.breed = breed;
}

Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} the ${this.breed} is barking.`);
};

let myDog = new Dog("Rex", true, "German Shepherd");
myDog.eat(); // Rex is eating.
myDog.sleep(); // Rex is sleeping.
myDog.bark(); // Rex the German Shepherd is barking.

// console.log("the end");
