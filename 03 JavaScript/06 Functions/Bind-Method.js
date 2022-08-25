"use strict";

// just like call method bind also allows us to manually set 'THIS' keyword for any function call
// ? diff : bind does not immediately call the function instead it returns a new function where 'THIS' keyword is bound

const obj1 = {
  airline: "abc-OBJ1",
  id: 111,
  bookings: [],

  book(fName, lName) {
    console.log(
      `\nAirline : ${this.airline}, firstName: ${fName}, lastName: ${lName}, id: ${this.id}`
    );
  },
};

const obj2 = {
  airline: "xyz-OBJ2",
  id: 555,
};

const obj3 = {
  airline: "ijk-OBJ3",
  id: 999,
  bookings: [],
};



// Bind method :::
const bookMethod = obj1.book;
// bookMethod.call(obj2, "yash", "jivani");    // ? with call method
const bookMethod_Obj2 = bookMethod.bind(obj2); // ? with bind method
const bookMethod_Obj3 = bookMethod.bind(obj3);
bookMethod_Obj2("yash", "jivani");
bookMethod_Obj3("hello", "world");


// example-2 | set certain arguments | partial application | preset parameters
console.log("\nExample-2 >>>>>>>>>>>");
const bookMethod_obj2Brother = bookMethod.bind(obj2, "BROTHER");
bookMethod_obj2Brother("sister1");
bookMethod_obj2Brother("sister3");


// Example-3 | with event listeners
console.log("\nExample-3 >>>>>>>>>>>");
obj1.planes = 300;
obj1.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// obj1.buyPlane();
document
  .querySelector(".buy")
  .addEventListener("click", obj1.buyPlane.bind(obj1));


// Example-4 | partial application
console.log("\nExample-4 >>>>>>>>>>>");
const addTax = function (rate, value) {
  return value + value * rate;
};
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null,0.23);
console.log(addVAT(100));
console.log(addVAT(1000));
