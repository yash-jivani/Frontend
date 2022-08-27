const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log("arr : ", movements);

// example-1 | sum
const balance = movements.reduce(function (acc, curr, index, arr) {
  console.log(index, acc);
  return acc + curr;
}, 0); // 2nd parameter => init value of accumulator(in 1st loop iteration)

console.log("Total : ", balance);

// example-2 | get max value
const maxValue = movements.reduce((acc, curr) => {
  return Math.max(acc, curr);
}, -Infinity);

console.log("Max Value : ", maxValue);
