/*

Hoisting ==> Variables,function are magically lifted or moved to the top of their scope for example, to the top of a function.
TDZ ==> Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed.

article : https://codecrunch.org/variable-environment-in-javascript-61630b5e76a9?gi=bada397477be

var, function declaration -> Hoisting
let & const -> TDZ 

*/

console.log(var1);          // no error
// console.log(let1);       // error | in TDZ
// console.log(const1);     // error | in TDZ

var var1 = 11;
let let1 = 22;
const const1 = 33;

hello();                    // no error | hoisting
function hello() {
  console.log("tmp");
}

// behaviour like normal const variable
// hello2();                // error | TDZ (like const variables)
const hello2 = function () {
  console.log("tmp2");
};

// behaviour liike normal let variable
// hello3()                 // error | TDZ (like let variables)
let hello3 = () => {
  console.log("tmp3");
};

// behaviour like normal var variables
hello4();                   // undefined => undefined() is not a function | (hoisting)
var hello4 = function () {
  console.log("tmp4");
};

// only "var" + function dec. joined with window object
const xx = 55;
let yy = 66; 
var zz = 56;
function xyz(){
    console.log("first");
}