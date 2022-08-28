console.log([1, 2, 3, 5, 4]);
console.log(new Array(1, 2, 3, 4, 5));

//  empty arrays
const x = new Array(7); // passing only one value => create array with given value length
console.log(x); // 7 empty memory block
console.log(x.map(() => 5)); // we can not fill empty array with map method

// * fill method
// x.fill(1); // fill all array wtih 1
// console.log(x); // [1,1,1,1,1,1,1]

// x.fill(1,3) // fill with 1, start from 3rd index
x.fill(1, 3, 5); // fill with 1, start from 3rd index, till 5th index(excluding)
x.fill(23, 0, 3); // fill with 23, start from 0 index, till 3rd index(excluding)
x.fill(33, 5); // fill with 33, start from 5th index, till end
console.log(x); // [23, 23, 23, 1, 1, 33, 33]

// * Array.from() | recreating array from existing array
const y = Array.from({ length: 7 }, () => 1);
console.log(y); //[1, 1, 1, 1, 1, 1, 1]
const z = Array.from({ length: 7 }, (_, i) => i + 1); // _ => throw away | ignore
console.log(z); // [1, 2, 3, 4, 5, 6, 7]
const yy = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6) + 1);
console.log(yy);
