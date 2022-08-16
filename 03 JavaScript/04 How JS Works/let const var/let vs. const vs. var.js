/*

👉VAR ::
    - var is function scoped.
    - create property on window object.
    - can be re-declared & updated.
    - hoisted => value - undefined. | No error

👉LET :: 
    - let is block scoped.
    - can not be re-declared.
    - TDZ => value - Cannot access before initialization. | error

👉CONST ::
    - const is block scoped.
    - can not be updated & re-declared.
    - TDZ => value - Cannot access before initialization. | error

*/



// <<< VAR >>>

console.log("\n<<< VAR >>>\n");
var v1 = "yash"; // same as this.v1 = 'yash' | create property in window object
console.log("Before block :: ", v1, this.v1); // v1 = yash

// with block | value overwrite!
{
  //  No error | same name
  var v1 = "Inside block - 1";
  var v1 = "Inside block - 2";
}
console.log("After block :: ", v1); // v1 = Inside block-2

// with function
function func() {
  var v1 = "inside Function"; // will not overwrite
}
console.log("After function :: ", v1); // v1 = Inside block-2

// hoisting
console.log("before declare vh1: ", vh1); // undefined
var vh1 = 999;
console.log("After declare vh1: ", vh1); // 999



// <<< Let >>>

console.log("\n<<< Let >>>\n");
let l1 = "yash"; // will not create property in window object
console.log("Before block :: ", l1); // l1 = yash

// with block value will not overwrite | new block - new scope
{
  // Error | same name
  // let l1 = "Inside block - 1";
  // let l1 = "Inside block - 2";
  l1 = "New Let Value Set Inside Block"; // Accessing global variable
}
console.log("After block :: ", l1); // l1 = New Let Value Set Inside Block

// with function
function func() {
  let l1 = "inside Function"; // will not overwrite |  scope only inside block
}
console.log("After function :: ", l1); // l1 = New Let Value Set Inside Block

// hoisting
// console.log("before declare lh1: ", lh1); //  Error -cannot access before init | in TDZ
let lh1 = 999;
console.log("After declare lh1: ", lh1); // 999



// <<< CONST >>>

console.log("\n<<< Const >>>\n");
const c1 = "yash"; // will not create property in window object
console.log("Before block :: ", c1); // c1 = yash

// with block value will not overwrite
{
  // Error
  // let l1 = "Inside block - 2";
  // c1 = "New Let Value Set Inside Block"; // Error - can not overwrite const. variables
}
console.log("After block :: ", c1); // c1 = yash

// with function
function func() {
  const c1 = "inside Function"; // will not overwrite |  scope only inside block
}
console.log("After function :: ", c1); // c1 = yash

// hoisting
// console.log("before declare ch1: ", ch1); //  Error -cannot access before init | in TDZ
const ch1 = 999;
console.log("After declare ch1: ", ch1); // 999




// Example :: (RUN this CODE inside BROWSER) | Site : https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
console.log("\n\n\nExample (var, let & const) :::\n");

let withLet = "let-Yash";
const withConst = "const-Yash";
var withVar = "var-Yash";

// check window object
console.log(this.withVar); // var-Yash 
console.log(this.withLet); // undefined
console.log(this.withConst); // undefined

function exampleFunc() {
  let funcLet = "Function-let";
  const funcConst = "Function-const";
  var funcVar = "Function-var";
  // inside block
  {
    let blockLet = "block-let"; // can accessible only inside this block
    const blockConst = "block-const"; // can accessible only inside this block
    var blockVar = "block-var"; // can accessible inside whole function
  }
  // console.log(blcokLet);  // error
  // console.log(blockConst);    // error
  console.log(blockVar); // block-var
}

exampleFunc();