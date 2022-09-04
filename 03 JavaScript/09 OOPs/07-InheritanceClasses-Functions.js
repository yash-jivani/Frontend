"use strict";

const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const Student = function (firstName, lastName, course) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;

  // inherit Person's constructor
  Person.call(this, firstName, lastName); // inheritance
  this.course = course;
};

// join prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.getCourseName = function () {
  return `Course : ${this.course}`;
};

const yash = new Student("yash", "jivani", "BE");
console.log(yash);
console.log(yash.fullName());
console.log(yash.getCourseName());

console.dir(yash.__proto__);
console.dir(yash.__proto__.__proto__);
console.log(yash.__proto__ === Student.prototype);
console.dir(Student.__proto__);
console.dir(Student.prototype);
