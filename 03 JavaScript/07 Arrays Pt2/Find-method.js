/*
* Find vs filter ::
-------------------
Find : returns only 1st ele/value where condition match | only returns 1 value (will not returns new Array)
filter : returns all ele/value where condition match | returns multiple values with new Array

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log("arr : ", movements);

const ans1 = movements.find((currValue) => currValue < 0);
console.log(ans1);

// example 2::
const account1 = {
  owner: "Yash Jivani",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};
const accounts = [account1, account2, account3];

const ans2 = accounts.find((acc) => acc.owner === "Yash Jivani");
console.log(ans2);
