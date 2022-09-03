class Student {
  // data property
  constructor(firstName) {
    this.firstName = firstName;
  }

  // accessor property(getter)
  get getName() {
    return this.firstName;
  }

  set changeName(newName) {
    this.firstName = newName;
  }

  static hey() {
    console.log("Hey there 👋");
    console.log("THIS VALUE >>>> ", this);
  }
}

const s1 = new Student("Monica");
console.log(s1.firstName); // Monica
console.log(s1.getName); // Monica
// console.log(s1.getName()); // error
s1.changeName = "Sarah";
console.log(s1.firstName); // Sarah
Student.hey();
// s1.hey(); // Eroor
