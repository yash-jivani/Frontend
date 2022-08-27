// convert deposit(positive values) in USD thn calc. total

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log("arr : ", movements);

const totalDepositInUSD = movements
  .filter((currValue) => {
    return currValue > 0;
  })
  .map((currValue) => {
    return currValue * 1.1;
  })
  .reduce((acc, currValue) => {
    return acc + currValue;
  });

console.log(totalDepositInUSD);

// NOTE : Method chaining may cause performance issue in web app
