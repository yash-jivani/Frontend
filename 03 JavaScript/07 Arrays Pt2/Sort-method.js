// sort acc. to strings (by default) | will change original arrray
// sort method takes callback function in argument

// with strings
const names = ["a", "abc", "bac", "xyz", "yash"];
console.log(names.sort());
console.log(names);

// with numbers
const amount = [10, 2, 3, 20, 35, 4, 45];
console.log(amount.sort());
console.log(amount);

/*
-> with callback functions
return < 0 => A, B (keep order)
return > 0 => B, A (switch order)
*/
const exp1 = [105, -2, 355, 20, -35, 24, 405];
console.log(
  exp1.sort(function (a, b) {
    return a - b; // sort in ascending order
  })
);
