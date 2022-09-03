///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
const Person = function (firstName, age) {
  this.firstName = firstName;
  this.age = age;
};

Person.prototype.agePlus10 = function () {
  return this.age + 10;
};

const yash = new Person("yash", 22);
console.log(yash.__proto__);

// Object.prototype (top of prototype chain)
console.log(yash.__proto__.__proto__);
console.log(yash.__proto__.__proto__.__proto__);

console.dir(Person.prototype);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((x) => x + 1);
