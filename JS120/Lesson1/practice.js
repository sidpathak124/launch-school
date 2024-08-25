"use strict";

let raceCar = {
  make: "rangerover",
  fuelLevel: 0.5,
  engineOn: false,

  startEngine: function () {
    this.engineOn = true;
  },

  drive: function () {
    this.fuelLevel -= 0.1;
  },

  stopEngine: function () {
    this.engineOn = false;
  },

  refuel: function (percent) {
    let totalFuel = this.fuelLevel + percent / 100;
    if (totalFuel < 1) {
      this.fuelLevel = totalFuel;
    } else {
      this.fuelLevel = 1;
    }
  },
};

let pete = {
  heroes: ["Superman", "Spiderman", "Hanuman"],
  cash: { ones: 2, fives: 0, tens: 2, twenties: 0, fifties: 2, hundreds: 5 },

  allHeroes() {
    return this.heroes.join(", ");
  },

  cashOnHand() {
    let total = 0;
    Object.entries(this.cash).forEach((arr) => {
      switch (arr[0]) {
        case "ones":
          total += arr[1];
          break;
        case "fives":
          total += arr[1] * 5;
          break;
        case "tens":
          total += arr[1] * 10;
          break;
        case "twenties":
          total += arr[1] * 20;
          break;
        case "fifties":
          total += arr[1] * 50;
          break;
        case "hundreds":
          total += arr[1] * 100;
          break;
      }
    });
    return total;
  },
};

// Automated Object creation (using Object)
function createCar(make, fuelLevel, engineOn) {
  let raceCar = {
    make: make,
    fuelLevel: fuelLevel,
    engineOn: engineOn,

    startEngine() {
      this.engineOn = true;
      console.log("Vroom..vroom....");
    },

    stopEngine() {
      this.engineOn = false;
      console.log("Engine stopped!");
    },

    drive() {
      this.fuelLevel -= 0.1;
      console.log(`Going wee..weeee`);
    },

    refuel(percent) {
      let total = Number(this.fuelLevel) + percent / 100;
      if (total > 1) {
        this.fuelLevel = 1;
      } else {
        this.fuelLevel = total;
      }
      console.log(`Current fuel level is ${total * 100}%`);
    },
  };
  return raceCar;
}

// let raceCar1 = createCar("BMW", 0.5, false);
// raceCar1.drive();
// let raceCar2 = createCar("Ferrari", 0.7, true);
// raceCar2.stopEngine();
// let raceCar3 = createCar("Jaguar", 0.4, false);
// raceCar3.refuel(40);

function book(title, author, read = false) {
  return {
    title,
    author,
    read,

    description() {
      return `${this.title} was written by ${this.author}. I ${
        this.read ? "have" : "haven't"
      } read it.`;
    },

    readBook() {
      this.read = true;
    },
  };
}

let book1 = book("Mythos", "Stephen Fry");
let book2 = book("Me Talk Pretty One Day", "David Sedaris");
let book3 = book("Aunts aren't Gentlemen", "PG Wodehouse");

console.log(book2.description());
console.log(book3.description());
book1.readBook();
console.log(book1.description());
