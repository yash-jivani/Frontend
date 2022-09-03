///////////////////////////////////////
// Prototypes
// every object has prototype | functions, arrays etc... are also objects

const Person = function (firstName, age) {
  this.firstName = firstName;
  this.age = age;
};

Person.prototype.agePlus10 = function () {
  return this.age + 10;
};

const yash = new Person("yash", 22);
console.log(yash.agePlus10());

console.log(yash.__proto__); // Person
console.log(yash.__proto__ === Person.prototype); // true
// NOTE
console.log(Person.prototype.isPrototypeOf(yash)); // true
console.log(Person.__proto__ === yash.__proto__); // false

Person.prototype.species = "Homo Sapiens";
console.log(yash.species);
console.log(yash.hasOwnProperty("firstName")); // true (own property)
console.log(yash.hasOwnProperty("species")); // false (inheritaed property)
