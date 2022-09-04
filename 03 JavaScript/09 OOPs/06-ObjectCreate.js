// set proto type manually to the object
// no contructor

// Object.create creates a new object and the prototype of that object will be the object that we passed in
const Person = {
  add10() {
    return this.age + 10;
  },
  // NOT A CONSTRUCTOR
  initValues(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  },
};

const yash = Object.create(Person); // create yash object and set proto type => Person object
yash.initValues("<YASH>", 22);
console.log(yash);
console.log(yash.__proto__); // Person
console.log(yash.add10()); // 22 + 10 = 32
