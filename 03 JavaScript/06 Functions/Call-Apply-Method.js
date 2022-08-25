"use strict";

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
  // bookings : [],
};

const obj3 = {
  airline: "ijk-OBJ3",
  id: 999,
  bookings: [],
};

// * CALL AND APPLY method control 'THIS'
const myArr = ["venil", "sharma"];
const bookMethod = obj1.book;

// call method : takes arguments separately
bookMethod.call(obj2, "yash", "jivani"); // call 'book' method -> set 'THIS' value as obj2 -> pass 'yash','jivani' as argument
bookMethod.call(obj3, "hello", "world"); // call 'book' method -> set 'THIS' value as obj3 -> pass 'hello','world' as argument
bookMethod.call(obj3, ...myArr); // call 'book' method -> set 'THIS' value as obj3 -> pass 'venil', <destructured Arr value> as argument

// apply method : takes arguments as an array
bookMethod.apply(obj3, ["yash", "jivani"]); // apply 'book' method -> set 'THIS' value as obj3 -> pass ['yash','jivani'] as argument
bookMethod.apply(obj2, ["hello", "world"]); // apply 'book' method -> set 'THIS' value as obj2 -> pass ['hello','world'] as argument
bookMethod.apply(obj2, myArr); // apply 'book' method -> set 'THIS' value as obj2 -> pass 'venil', myArr as argument
