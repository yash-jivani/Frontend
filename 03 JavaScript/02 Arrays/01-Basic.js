// declare with array literal
const arr = [];

// declare with array constructor
const arr2 = new Array(); // will create empty array

// print array
console.log(arr);
console.log(arr2);

// arrays are object in javascript
console.log(typeof arr);
console.log(typeof arr2);

// init values in array
arr[0] = "yash"; // at 0 index
arr[1] = 17; // at 1st index
arr[5] = 55; // at 5th index | (insert value with unserialize manner) | also valid but not recommended
console.log(arr);


// ! Note | single value with new Operator | treated as array length
const myVar = 2;
const arrWithNewOperator = new Array(5);        // ? it will generate empty array with 5 memory block
const arrWithNewOperator2 = new Array(myVar);   // ? it will generate empty array with 2 memory block
console.log(arrWithNewOperator)
console.log(arrWithNewOperator2)


// decalre and init value in array
const myArr = [14, 62, 23, 40, 95, "yash", 22];
console.log(myArr);
const myArr2 = [, , ,]; // also valid 
console.log(myArr2);
const myArr3 = new Array(1, 2, 3, 4); // note
const myArr4 = new Array([1, 2, 3, 4]); // note
console.log(myArr3);
console.log(myArr4);
// with variables
let a=7,b=3,c=8;
const myArr7 = [a,b,c]
console.log(myArr7)
// with object
const myObj = {
  one: "yash",
  two: "jivani",
};
const myArr5 = new Array(myObj);
console.log(myArr5);

// indexing | starts from 0 index
const myArr6 = [11,22,33,44,55,66,77];
console.log(myArr6[0])
console.log(myArr6[5])



