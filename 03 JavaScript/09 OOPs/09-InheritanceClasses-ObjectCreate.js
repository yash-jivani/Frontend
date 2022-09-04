const Person = {
  add10() {
    return this.age + 10;
  },
  initValues(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  },
};

const yash = Object.create(Person); // create yash object and set proto type => Person object

yash.initValues = function (firstName, age, lastName) {
  Person.initValues.call(this, firstName, age);
  this.lastName = lastName;
};

yash.introduce = function () {
  return `My name is ${this.firstName} and i am ${this.age} years old`;
};

const yash2 = Object.create(yash);

yash2.initValues("YASH", 23, "JIVANI");
console.log(yash2.introduce());
