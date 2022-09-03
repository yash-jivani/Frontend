"use strict";

///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, age) {
  this.firstName = firstName;
  this.age = age;

  // Never do this! (it will create same method again and again!)
  //   this.hey = function () {
  //     return `Hey ${this.firstName} !!`;
  //   };
};

// it will only create method ONCE! | prototype
Person.prototype.hey = function () {
  return `Hey ${this.firstName} !!`;
};

Person.hey = function () {
  console.log(`Hello Person`);
  console.log(this);
};
Person.hey();

/*

1. new {} (Empty object) is created  
2. function is called, set this value to {} object
3. {} linked to prototype
4. function  automatically return {}

*/

const yash = new Person("yash", 20);
const jaymin = new Person("jaymin", 22);
console.log(yash);
console.log(yash.hey());
console.log(jaymin);
console.log(jaymin.hey());

console.log(yash instanceof Person);
