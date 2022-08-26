// forEach Method :
// Loop over the array and in each iteration it will execute callback function

/*
fundamental diff.
we can not break forEach loop + continue & break will not work !
we can break for of loop + continue & break works!
*/

// forEach method with arrays >>>>>>>>>>>>>>>>>.....
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// with for of loop
console.log("--- FOR OF LOOP ---");
for (let [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${index}: Deposite ${movement}`);
  } else {
    console.log(`${index}: Withdrew ${Math.abs(movement)}`);
  }
}

// with forEach method
console.log("--- FOREACH LOOP ---");
movements.forEach(function (movement, index, currentArr) {
  if (movement > 0) {
    console.log(`${index}: Deposite ${movement}`);
  } else {
    console.log(`${index}: Withdrew ${Math.abs(movement)}`);
  }
});


// forEach method with Maps & Sets >>>>>>>>>>>>>>>>>.....
console.log("\n<<<<<<< MAPS >>>>>>>");
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

console.log("\n<<<<<<< SET >>>>>>>");
const uniqueCurrencies = new Set(["EUR", "USD", "EUR", "GBP", "INR", "USD"]);
uniqueCurrencies.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});
