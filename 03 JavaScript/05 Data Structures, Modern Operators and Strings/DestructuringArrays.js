"use strict";

// destructuring with simple example
const [x, y, z] = [1, 2, 3];
console.log(x, y, z);

// with object of arrays
let myObj = {
  nums: [1, 2, 3, 4, 5, 6],
  movies: ["m1", "m2", "m3"],
  abc: ["a", "b", "c", "d", "e"],
  hobbies: ["h1", "h2", "h3", "h4"],

  order: function (abcIndex, numIndex) {
    return [this.abc[abcIndex], this.nums[numIndex], this.movies[2]]; // return 2 value inside array
  },
};
// console.log(myObj.movies);
console.log("<< Movies from object >>");
let [firstMovie, secondMovie] = myObj.movies;
console.log(firstMovie, secondMovie);

// skip value
console.log("<< hobbies from object (skip value) >>");
let [hobby1, , hobby3] = myObj.hobbies;
console.log(hobby1, hobby3);

// getting value from method
console.log("<< function return value >>");
let [value1, value2, value3] = myObj.order(0, 2);
console.log(value1, value2, value3);

// swap variables
console.log("<< swap variables >>");
let p = 11;
let q = 22;
// console.log(p,q);
[p, q] = [q, p];
console.log(p, q);

// nested destructuring
console.log("<< nested destructuring >>");
let nestedArr = [1, 2, 3, [4, 5, 6]];
let [i, , k] = nestedArr;
console.log(i, k);
let [i1, j1, , [k11, k12]] = nestedArr;
console.log(i1, j1, k11, k12);

// default values
console.log("<< default values >>");
const [p1 = 1, p2 = 1, p3 = "defaultValue", p4 = "xyz1"] = [1, 3];
console.log(p1, p2, p3, p4);
