// Map returns a new array containing the results of applying an operation on all original array elements.

/*

📝 NOTE :  
The map method returns a new array by applying the callback function on each element of an array,
...while the forEach method doesn't return anything. 

*/

const eurToUSD = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsUSD = movements.map(function (currentMovement) {
  // return 23;
  return currentMovement * eurToUSD;
});

console.log(movements);
console.log(movementsUSD);

// with arrow funciton
const movementsINR = movements.map((currValue) => {
  return currValue * 1.3;
});
console.log(movementsINR);

// with for of loop
const movementsUSD2 = [];
for (let i = 0; i < movements.length; i++) {
  movementsUSD2.push(movements[i] * 1.1);
}
console.log(movementsUSD2);

// Example 
const movementDescription = movements.map((currentValue, index, currentArr) => {
  if (currentValue > 0) {
    return `${index + 1}: ${currentValue} Deposit`;
  } else {
    return `${index}: ${currentValue} withdrawal`;
  }
});

console.log(movementDescription);
