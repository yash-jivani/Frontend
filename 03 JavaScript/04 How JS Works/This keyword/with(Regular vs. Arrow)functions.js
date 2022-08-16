// ! FOR ALL REGULAR FUNCTION CALLS, THIS POINTS TO ("use strict"===true ? undefined : Window Object)
// For Arrow function THIS keyword Points => outer THIS (lexical THIS)
// For Method -> depends on who is calling (invoking the method)

"use strict";


// EXAMPLE :: 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log("\n\n\n:::::::::: Example 1 ::::::::::");
var firstName = "Hello world ( IN global scope )"; // same as this.firstName | (bcoz var creates property in global object)
console.log(this.firstName);

const info1 = {
  firstName: "YASH",
  lastName: "JIVANI",
  num: 111,

  // withh regular function
  age: function () {
    console.log("\n\n<< With REGULAR function >>");
    console.log(this); // points to curret (who is calling) Object
    console.log(this.firstName); // YASH
  },

  // with arrow function
  ageArrow: () => {
    console.log("\n\n<< With ARROW function >>");
    console.log(this); // parent's THIS (which is currently Window object)
    console.log(this.firstName); // Hello world ( IN global scope )
  },
};

info1.age();
info1.ageArrow();


// EXAMPLE :: 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log("\n\n\n:::::::::: Example 2 ::::::::::");
var firstName = "Hello world ( IN global scope )"; // same as this.firstName | (bcoz var creates property in global object)
console.log(this.firstName);

const info3 = {
  firstName: "Yash",
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2030 - this.year);

    // arrow function inside regular function
    const isMillenial = () => {
      console.log(this); // outer (parent's) THIS
      console.log(this.year); // 2000
    };
    isMillenial(); // regular function call
  },
};

info3.calcAge();



// EXAMPLE :: 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log("\n\n\n:::::::::: Example 3 ::::::::::");
const obj  = {
    firstName : 'yash',
    lastName : 'jivani',
    age : function(){
        console.log("<<<< Age function called! >>>>")
        console.log(this)
    }
}

/*
Assign object method as a normal function expression 
..that means now if will call the function 
...then it will work as regular function
*/

const f = obj.age;  
// invoke as normal function 
f();        // undefined (with strict Mode) | Window (wihtout strict Mode)
