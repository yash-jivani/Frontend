// * 1 ###################
let a = [];
let b = [];
console.log(a == b); // false
console.log(a === b); // false
// -> new array new memory location

// * 2 ###################
let a1 = [];
let b1 = a1;
console.log(a1 == b1); // true
console.log(a1 === b1); // true
// -> same memory location (diff. pointers points to same memory)

// * 3 ###################
let x = [20];
let y = [20];
console.log(x[0] == y[0]); // true
console.log(x[0] === y[0]); // true
// -> comparing values

// * 4 ###################
console.log(typeof NaN); // number
console.log(NaN === "number"); // true
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true

// * 5 ###################
let val = 10 - -10;
console.log(val); // 20

// * 6 ###################
let data = { name: "yash" };
console.log(delete data.name); // true
console.log(delete data.xyz); // true
console.log(delete data); // false

// * 7 ###################
let arr = ["yash", "jivani", 120];
let [, ans] = arr;
console.log(ans); // jivani

// * 8 ###################
let obj1 = { name: "yash", age: 22 };
let obj2 = { mail: "xyz@mail.com" };
// Question -> merge 2 objects
obj1 = { ...obj1, ...obj2 };
console.log(obj1); // {name: 'yash', age: 22, mail: 'xyz@mail.com'}

// * 9 ###################
let obj11 = { name: "yash", age: 22 };
let obj22 = { mail: "xyz@mail.com" };
let arr2 = [1, 2];
obj11 = { ...obj11, obj22, ...arr2 };
console.log(obj11); // {0: 1, 1: 2, name: 'yash', age: 22, obj22: {…}}

// * 10 ###################
let myObj = { name: "yash", age: 22 };
// let myArr = [...myObj]; // Error | myObj is not iterable
// console.log(myArr);
let myArr2 = [1, 2, 3, 4];
let myObj2 = { ...myArr2 };
console.log(myObj2); // {0: 1, 1: 2, 2: 3, 3: 4}

// * 11 ###################
const result1 = false || {} || null;
const result2 = false || "" || null;
const result3 = [] || 0 || true;
console.log(result1); // {}
console.log(result2); // null
console.log(result3); // []

// * 12 ###################
console.log(Promise.resolve(5)); // Promise{<fulfilled>: 5}

// * 13 ###################
let name = "Yash";
var varValue = 55;
function getAns() {
  //   console.log(name); // Error | IN THIS BLOCK <name = 'Hello world'> is in TDZ.
  console.log(varValue); // Undefined
  let name = "Hello world";
  var varValue = 999;
}
getAns();

// * 14 ###################
// error | 'p' has already been declared
// let p = "jivani";
let p = "yash";
// error | 'q' has already been declared
// const r = "jivani";
const r = "yash";
// No error
var q = 999;
var q = 1010;

// * 15 ###################
console.log(`${((x) => x)("I Love")} coding`); // I Love coding

// * 16 ###################
const str = "Yash Jivani";
console.log(typeof str === "object"); // false | (typeof str) === 'object'
console.log(!typeof str === "object"); // false | !(typeof str) === 'object'
console.log(!typeof str === "string"); // false | !(typeof str) === 'object'

// * 17 ###################
let nums = [1, 2, 3, 4, 5];
delete nums[2];
console.log(nums); // [1,2,<empty>,4,5]
console.log(nums.length); // 5

// * 18 ###################
let aa = 11;
setTimeout(() => {
  console.log(a); // 100
}, 0);
a = 100;

// * 19 ###################
let p1 = 1;
let q1 = 1;
let r1 = 2;
// prettier-ignore
console.log(p1 === q1 === --r1); // false | ((p1 === q1) === --r1)

// * 20 ###################
// let | i value = not overwrite
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1); // 0 1 2
}
// var | i value = overwrite
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1); // 3 3 3
}

// * 21 ###################
console.log(+true); // 1
console.log(typeof +true); // number

// * 22 ###################
let a11 = 3;
let b11 = new Number(3);
console.log(a11 == b11); // true
console.log(a11 === b11); // false
console.log(typeof a11, typeof b11); // number, object
// -> with contructor it will create object

// * 23 ###################
function xx() {
  console.log("first");
}
xx.data = "hello";
xx.prototype.data = "dd";
console.dir(xx); // check console

// * 24 ###################
function getAges(...args) {
  console.log(Array.isArray(args)); // true
  console.log(typeof args); // object
}
getAges(10, 20);
// -> [] => array type object

// * 25 ###################
console.log(eval("10*10+5")); // 105
console.log(typeof eval("10*10+5")); // number
// -> eval => convert string into expression thn exe.

// * 26 ###################
const person = { name: "yash" };
function greet(age) {
  console.log(this.name, age);
}
greet.call(person, 22); // yash 22
console.log(greet.bind(person, 22)); // return function

// * 27 ###################
console.log(typeof typeof 1); // string

// * 28 ###################
const numbers = [1, 2, 3];
numbers[5] = numbers;
console.log(numbers); // check console

// * 29 ###################
let p11 = { name: "xyz" };
const myArr11 = [p11];
p11 = null;
console.log(myArr11); // { name: "xyz" }
// -> [] creates new memory location

// * 30 ###################
let ans11 = 3 + 4 + "5";
console.log(typeof ans11); // string
console.log(typeof 3 + 4 + "5"); // number45
console.log(typeof (3 + 4 + "5")); // string
console.log(typeof (3 + 4 + +"5")); // number
console.log("2" + 2 + "1"); // 221
console.log("2" - 2 - "1"); // -1
console.log("5" - 6 + 10 - 1 + "100"); // 8100
console.log("yash" - 2); // NaN
console.log("yash" - "2"); // NaN
// -> '-' (minus) => chnage into number | '+' (plus) => chnage into string (if there is any string present in expression)

// * 31 ###################
function car() {
  this.make = "tata";
  return { make: "kia" };
}
const myCar = new car();
console.log(myCar.make);

// * 32 ###################
(() => {
  // prettier-ignore
  let xyy = yyy = 10; // let x=10, var y=10
  zzz = "zzzzzz";
})();
// console.log(xyy); // error | out of scope
console.log(typeof xyy); // undefined
console.log(yyy); // 10
console.log(typeof yyy); // number
console.log(zzz); // 'zzzzzz'
console.log(typeof zzz); // string

// * 33 ###################
console.log(!true - true); // -1    |  0-1 => -1
console.log(true + +"10"); // 11    | 1+10 => 11
