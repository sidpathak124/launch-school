"use strict";

// class myClass {
//   local = "local value";

//   constructor(property) {
//     this.property = property;
//   }
// }

// myClass.prototype.sharedProperty = "shared property";

// let inst1 = new myClass("property");
// let inst2 = new myClass("property");

// console.log(inst1.property);
// console.log(inst2.property);
// console.log(myClass.prototype.property);

// console.log(inst1.local);
// console.log(inst2.local);
// console.log(myClass.prototype.local);

// console.log(inst1.sharedProperty);
// console.log(inst2.sharedProperty);
// console.log(myClass.prototype.sharedProperty);

// console.log(inst1);
// console.log(inst2);

// function carMonitor() {
//   var speed = 0;

//   return {
//     accelerate: function () {
//       return speed++;
//     },
//   };
// }

// var car = new carMonitor();
// var redCar = new carMonitor();

// console.log(car.accelerate());
// console.log(car.accelerate());
// console.log(redCar.accelerate());
// console.log(redCar.accelerate());
// console.log(car.accelerate());
// console.log(redCar.accelerate());
// console.log(speed);

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Pet {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }

//   info() {
//     return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`;
//   }
// }

// function objectsEqual(obj1, obj2) {
//   if (obj1.length !== obj2.length) return false;
//   let objKeys1 = Object.keys(obj1);
//   let objKeys2 = Object.keys(obj2);

//   for (let i = 0; i < objKeys1.length; i++) {
//     let currProp = objKeys1[i];
//     if (obj1[currProp] instanceof Object) {
//       if (!objectsEqual(obj1[currProp], obj2[currProp])) return false;
//       continue;
//     }
//     if (!objKeys2.includes(currProp) || obj1[currProp] !== obj2[currProp])
//       return false;
//   }
//   return true;
// }

// function objectsEqual(obj1, obj2) {
//   if (obj1 === obj2) {
//     return true;
//   }

//   return keysMatch(obj1, obj2) && valuesMatch(obj1, obj2);
// }

// function keysMatch(obj1, obj2) {
//   let keysObj1 = Object.getOwnPropertyNames(obj1).sort();
//   let keysObj2 = Object.getOwnPropertyNames(obj2).sort();

//   if (keysObj1.length !== keysObj2.length) {
//     return false;
//   }

//   return keysObj1.every((key, index) => {
//     return key === keysObj2[index];
//   });
// }

// function valuesMatch(obj1, obj2) {
//   let objKeys1 = Object.getOwnPropertyNames(obj1);
//   return objKeys1.every((key) => {
//     return obj1[key] === obj2[key];
//   });
// }

// console.log(objectsEqual({ a: "foo" }, { a: "foo" })); // true
// console.log(objectsEqual({ a: "foo", b: "bar" }, { a: "foo" })); // false
// console.log(objectsEqual({ a: "foo", b: "bar" }, { b: "bar", a: "foo" })); // true
// console.log(
//   objectsEqual(
//     { a: "foo", b: { c: "ham", d: "bam" } },
//     { b: { c: "ham", d: "bam" }, a: "foo" }
//   )
// ); // true
// console.log(objectsEqual({}, {})); // true
// console.log(objectsEqual({ a: "foo", b: undefined }, { a: "foo", c: 1 })); // false

function createStudent(name, year) {
  return {
    name,
    year,
    allCourses: [],

    info() {
      console.log(`${this.name} is a ${year} year student`);
    },

    addCourse(courseObj) {
      this.allCourses.push(courseObj);
    },

    listCourses() {
      console.log(this.allCourses);
    },

    // addNote(code, note) {
    //   this.allCourses.forEach((courseObj) => {
    //     if (courseObj["code"] === code) {
    //       courseObj["notes"]
    //         ? courseObj["notes"].push(note)
    //         : (courseObj["notes"] = [note]);
    //     }
    //   });
    // },

    addNote(code, note) {
      let course = this.allCourses.find((courseObj) => courseObj.code === code);
      course.notes ? course.notes.push(note) : (course.notes = [note]);
    },

    viewNotes() {
      this.allCourses.forEach((courseObj) => {
        if (courseObj["notes"]) {
          console.log(`${courseObj["name"]}: ${courseObj["notes"].join("; ")}`);
        }
      });
    },

    updateNote(code, newNote) {
      this.allCourses.forEach((courseObj) => {
        if (courseObj["code"] === code) {
          courseObj["notes"] = [newNote];
        }
      });
    },
  };
}

function createSchool() {
  return {
    allStudents: {},

    validateYear(year) {
      let yearsAllowed = ["1st", "2nd", "3rd", "4th", "5th"];
      if (!yearsAllowed.includes(year)) throw Error(`Invalid year`);
    },

    addStudent(studentName, year) {
      this.validateYear(year);
      this.allStudents[studentName] = createStudent(studentName, year);
    },

    enrollStudent(studentName, course, courseCode) {
      let student = this.allStudents[studentName];
      let courseObj = { name: course, code: courseCode };

      student.addCourse(courseObj);
    },

    addGrade(studentName, courseCode, grade) {
      let student = this.allStudents[studentName];
      let course = student.allCourses.find(
        (course) => course.code === courseCode
      );
      if (course) {
        course["grade"] = grade;
      }
    },

    getReportCard(studentName) {
      let studentCourses = this.allStudents[studentName].allCourses;
      studentCourses.forEach((courseObj) => {
        let grade = courseObj.grade || "In progress";
        console.log(`${courseObj.name}: ${grade}`);
      });
    },

    courseAvailable(students, courseName) {
      return students.some((student) => {
        return student.allCourses.some((course) => {
          return course.name === courseName && course.grade;
        });
      });
    },

    courseReport(courseName) {
      let students = Object.values(this.allStudents);
      if (!this.courseAvailable(students, courseName)) {
        console.log(`undefined`);
        return;
      }
      let allGrades = [];
      console.log(`=${courseName} Grades=`);
      students.forEach((student) => {
        let studentName = student.name[0].toUpperCase() + student.name.slice(1);
        let course = student.allCourses.find(
          (course) => course.name === courseName
        );
        if (course) {
          allGrades.push(course.grade);

          console.log(`${studentName}: ${course.grade}`);
        }
      });
      console.log(`---`);
      let avg =
        allGrades.reduce((acc, curr) => acc + curr, 0) / allGrades.length;
      console.log(`Course Average: ${avg}`);
    },
  };
}

// let devAshish = createSchool();

// devAshish.addStudent("paul", "3rd");
// devAshish.enrollStudent("paul", "Math", 101);
// devAshish.addGrade("paul", 101, 95);
// devAshish.enrollStudent("paul", "Advanced Math", 102);
// devAshish.addGrade("paul", 102, 90);
// devAshish.enrollStudent("paul", "Physics", 202);
// console.log(devAshish.allStudents);
// devAshish.getReportCard("paul");

// devAshish.addStudent("mary", "1st");
// devAshish.enrollStudent("mary", "Math", 101);
// devAshish.addGrade("mary", 101, 91);

// devAshish.addStudent("kim", "2nd");
// devAshish.enrollStudent("kim", "Math", 101);
// devAshish.addGrade("kim", 101, 93);
// devAshish.enrollStudent("kim", "Advanced Math", 102);
// devAshish.addGrade("kim", 102, 90);

// devAshish.courseReport("Math");
// devAshish.courseReport("Advanced Math");
// devAshish.courseReport("Physics");

// let foo = createStudent("Foo", "1st");
// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
// foo.addCourse({ name: "Math", code: 101 });
// foo.addCourse({ name: "Advanced Math", code: 102 });
// foo.listCourses();
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, "Fun course");
// foo.addNote(101, "Remember to study for algebra");
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, "Difficult subject");
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
// foo.updateNote(101, "Fun course");
// foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"

// var twoSum = function (nums, target) {
//   let pair_idx = {};

//   for (let i = 0; i < nums.length; i++) {
//     let currNum = nums[i];
//     let numRequired = target - currNum;
//     if (String(numRequired) in pair_idx) {
//       return [i, pair_idx[String(numRequired)]];
//     }
//     pair_idx[currNum] = i;
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// class Book {
//   static TITLES = [];
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//     Book.TITLES.push(this.title);
//   }

//   read() {
//     console.log(`Reading ${this.title}`);
//   }

//   allTitles() {
//     return Book.TITLES;
//   }

//   static allTitles() {
//     return Book.TITLES;
//   }
// }

// let b1 = new Book("foo", "bar");
// let b2 = new Book("faz", "rar");

// console.log(b2.allTitles()); // ['foo', 'faz']
// console.log(Book.allTitles()); // ['foo', 'faz']

// class Animal {
//   talk() {}
// }
// class Cat extends Animal {
//   meow() {
//     console.log("meow");
//   }
// }

// let cat = new Cat();
// console.log(Object.getPrototypeOf(cat)); // Animal {}
// console.log(Cat.prototype);
// console.log(Object.getPrototypeOf(cat) === Cat.prototype);

// console.log(Animal.prototype);

// function isPalindrome(num) {
//   let strNum = String(num);
//   let strNumRev = strNum.split("").reverse().join("");
//   return strNum === strNumRev;
// }

// function isPalindrome(x) {
//   if (x < 0) return false;

//   let reversed = 0;
//   let temp = x;

//   while (temp > 0) {
//     let digit = temp % 10;
//     reversed = reversed * 10 + digit;
//     temp = Math.floor(temp / 10);
//   }

//   return reversed === x;
// }

// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(10));

// function addTwoNumbers(l1, l2) {}

console.log("\nthe end");
