"use strict";

console.log("\n<<< With Normal function >>>");
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

const greeterHey = greet("hey");
greeterHey("yash");
greeterHey("xyz");
greet("hello")("abc");


console.log("\n<<< With Arrow function >>>");
const greet2 = (greeting) => {
  return (name) => {
    console.log(`${greeting}, ${name}`);
  };
};

const greeterHey2 = greet2("hey");
greeterHey2("yash");
greeterHey2("xyz");
greet2("hello")("abc");
