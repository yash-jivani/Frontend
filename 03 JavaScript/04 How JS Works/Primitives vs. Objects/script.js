// primitive example
let x = 11;
let y = x;
x = 22;

console.log(x, y);

// reference type
const info1 = {
  firstName: "yash",
  lastName: "jivani",
  age: 18,
};

const info2 = info1;
info2["age"] = 20; // change in  info2 object
console.log("info1 : ", info1); // age : 20
console.log("info2 : ", info2); // age : 20

// Example 2:

const x1 = {
  firstName: "yash",
  movies: [1, 2, 3, 4],
};

const x2 = Object.assign({}, x1); // shallow copy
x2["new"] = 111; // will not change in x1 object
x2["movies"][0] = "zero"; // will change in both (object inside object / nested) |
x2["movies"].push(55); // will change in both (object inside object / nested) |
console.log("x1 : ", x1);
console.log("x2 : ", x2);
