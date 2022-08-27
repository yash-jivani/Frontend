const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter((movement, index, arr) => {
//   console.log(index, arr);
  return movement > 0;
});
console.log(deposits);

const withdrawals = movements.filter((movement) => movement < 0);
console.log(withdrawals);
