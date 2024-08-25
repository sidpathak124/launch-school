// "use strict";

// let myObject = {};

// myObject[false] = "one";
// myObject[7] = "two";
// myObject[[1, 2, 3]] = "three";
// myObject[(1, 2, 3)] = "three";

// console.log(myObject);
// console.log("false" in myObject);
// console.log("true" in myObject);
// console.log(myObject.hasOwnProperty("false"));
// console.log(Object.hasOwn(myObject, "false"));

// let nums = [1, 2, 3, 4];
// nums["true"] = "five";
// console.log(nums);

// console.log(Object.keys(nums));
// console.log(Object.getOwnPropertyNames(nums));

// let a = { foo: 1, bar: 2 };

// let b = {};
// Object.setPrototypeOf(b, a);
// console.log(b.foo);
// a.foo = 100;
// a.baz = 33;
// console.log(b.foo);
// console.log(Object.getPrototypeOf(b));
// let c = {};
// console.log(Object.getPrototypeOf(a));
// console.log(Object.getPrototypeOf(c));
// let d = "a";
// console.log(Object.getPrototypeOf(d));
// console.log(Object);
// console.log(Object.prototype);

let person1 = { name: "Bob", age: 30, height: "6 ft" };

let person2 = { name: "Balu", job: "engineer" };
Object.setPrototypeOf(person2, person1);

// for (let val in person2) {
//   console.log(val);
// } // name
// // engineer
// // age
// // height
// console.log(Object.keys(person2));
// console.log(Object.values(person2));
// console.log(Object.entries(person2));
// console.log(Object.assign({}, a, person1));

// let arr = [1, 2, 3];

// console.log(arr.propertyIsEnumerable("length"));
// console.log(arr.propertyIsEnumerable("2"));
// console.log(arr.propertyIsEnumerable("4"));

// function Foo() {
//   this.bar = "qux";
// }

// console.log(Foo.prototype);
// Foo.prototype.baz = function () {};
// let foo = new Foo();
// console.log(Foo.prototype);
// console.log(foo.propertyIsEnumerable("bar"));
// console.log(Object.getPrototypeOf(foo));
// console.log(Object.getPrototypeOf(foo).propertyIsEnumerable("baz"));

// console.log(person1);
// console.log(person2);
// console.log(person1.__proto__.__proto__);
// console.log(person1.__proto__);
// console.log(person2.__proto__);

// let a = Object.create(null);

// console.log(a);
// console.log(Object.getPrototypeOf(a));

// let b = { a: "foo", b: "bar" };
// Object.setPrototypeOf(b, null);
// console.log(b); // { a: "foo", b: "bar" }
// console.log(Object.getPrototypeOf(b)); // null

// console.log(b);
// console.log(Object.getPrototypeOf(b));

// let qux = { foo: 1 };
// let baz = Object.create(qux);
// console.log(baz.foo + qux.foo);

// -------------------------------------Practice Problems:Object Prototypes-------------------------------

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

// function assignProperty(obj, key, val) {
//   let currObj = obj;
//   while (currObj !== null) {
//     if (currObj.hasOwnProperty(key)) {
//       currObj[key] = val;
//       break;
//     }
//     currObj = Object.getPrototypeOf(currObj);
//   }
//   return undefined;
// }

// recursive solution
// function assignProperty(obj, key, val) {
//   if (obj === null) {
//     return;
//   } else if (obj.hasOwnProperty(key)) {
//     obj[key] = val;
//   } else {
//     assignProperty(Object.getPrototypeOf(obj), key, val);
//   }
// }

// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2

// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false

// NOTE: Run this code from a file; don't use the REPL

// function createGreeter(language) {
//   switch (language) {
//     case "en":
//       return () => console.log("Hello");
//     case "sa":
//       return () => console.log("Jay Shree Ram");
//     case "fr":
//       return () => console.log("Bonjour");
//   }
// }

// let greetSa = createGreeter("sa");
// greetSa();

// console.log(isNaN(3));
// console.log(global.age);
// console.log(global.Infinity);
// console.log(global.isNaN);

// console.log(Object.getPrototypeOf(globalThis));
// for (let prop in globalThis) {
//   console.log(prop);
// }

// console.log(Object.keys(globalThis).length);
// console.log(Object.keys(globalThis));

// let foo = {
//   bar: function () {
//     console.log(this);
//   },
// };

// console.log(foo.bar()); // {bar: function}
// let baz = foo.bar;
// console.log(baz()); // global object

// function sumNum(num1) {
//   return this.num + num1;
// }

// let obj = {
//   num: 42,
// };

// obj.sumNum = sumNum;

// console.log(obj.sumNum.call(this, 5));

// // console.log(logNum.call(obj));

// function sumNum(num1) {
//   return this.num + num1;
// }

// let obj = {
//   num: 42,
// };

// obj.sumNnum = sumNum;
// obj.num = obj.sumNum(5);
// console.log(obj.num); // 47

// let object = {
//   a: "hello",
//   b: "world",
//   foo: function () {
//     return this.a + " " + this.b;
//   },
// };

// let bar = object.foo;
// console.log(bar());

// let baz = object.foo.bind(object);
// console.log(baz());

// let obj1 = {
//   a: "This is obj1",

//   foo() {
//     let bar = () => console.log(this.a);
//     bar();
//   },
// };

// let obj2 = {
//   a: "This is obj2",
// };

// obj1.foo(); // This is obj1

// obj2.foo = obj1.foo;
// obj2.foo();

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

let john = {
  firstname: "John",
  lastname: "Doe",

  greetings: function () {
    repeatThreeTimes(function () {
      console.log(this.firstname + " " + this.lastname);
    });
  },
};

// john.greetings();

// console.log(global.console);
// console.log(global.xyz);
// console.log(global.bar);
// xyz = 3;
// let bar = 5;
// console.log(global.xyz);
// console.log(bar.xyz);
// console.log(global.global);
// console.log(global.log);

let student = {
  name: "Joanna",
  age: 27,

  study() {
    console.log(`${this.name} is studying`);
  },

  pass() {
    console.log(`${this.name} has passed this course`);
  },
};

student.study(); // Joanna is studying
student.pass(); // Joanna has passed this course

// console.log("end");
