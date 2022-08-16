// ! FOR ALL REGULAR FUNCTION CALLS, THIS POINTS TO ("use strict"===true ? undefined : Window Object)
// For Arrow function THIS keyword Points => outer THIS (lexical THIS)
// For Method -> depends on who is calling (invoking the method)

"use strict";

console.log(this); // outside of the function | Window Object

// with regular function call
function hello() {
  console.log(this); // undefined (with strict Mode) | Window (wihtout strict Mode)
}
hello();

// with arrow function call
const helloArrow = () => {
  console.log(this); // outer this => window
};
helloArrow();

// with method (inside object + regular function)
const info = {
  firstName: "yash",
  lastName: "jivani",
  num: 111,
  age: function () {
    console.log("<<<< Age Function called! >>>>");
    // Points to 👉 object who is calling age method
    console.log(this);
    console.log(this.num);
  },
};

const info2 = {
  num: 222,
};

info.age(); // 111 age
info2.age = info.age;
info2.age(); // 222 age
