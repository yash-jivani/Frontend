// flating array
const arr = [1, 2, [3, 4, 5], 6, [7, 8, 9], 10];
console.log(arr.flat()); // default arg : 1 => 1 lev. deep
const arrDeep = [[1, [2, 3], 4], 5, 6, [7, [8, 9, 10]]];
console.log(arrDeep.flat(2)); // arg : 2 => 2 lev. deep

// Example | calc. all movements
const account1 = {
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
};
const account2 = {
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
};
const account3 = {
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
};
const account4 = {
  movements: [430, 1000, 700, 50, 90],
};
const accounts = [account1, account2, account3, account4];
// flat
const overAllbalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, curr) => acc + curr, 0);
console.log(overAllbalance);

// flatMap | map + flat => flatMap | one lev. deep flating
const overAllbalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, curr) => acc + curr, 0);
console.log(overAllbalance2);
