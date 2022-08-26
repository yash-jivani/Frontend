// At method

const arr = [23, 11, 53];
console.log(arr[0]); // with indexing
console.log(arr.at(0)); // with at method

// use :
// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); // with at method

// also applys on strings
console.log("first".at(0));
console.log("first".at(-1));
console.log("first".at(-2));
