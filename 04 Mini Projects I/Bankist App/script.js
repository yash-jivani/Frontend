"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const dispalyMovements = function (movements) {
  // empty all(previous) movements
  containerMovements.innerHTML = "";

  movements.forEach(function (currMovement) {
    // check if current Movement is greater thn 0 thn deposit Else withdrawal
    const movementType = currMovement > 0 ? "deposit" : "withdrawal";
    // movementRow HTML
    const movementRow = `
    <div class="movements__row">
      <div class="movements__type movements__type--${movementType}">${movementType}</div>
      <div class="movements__value">${currMovement}€</div>
    </div>
    `;
    // adding into dom with 'insertAdjacentHTML'
    containerMovements.insertAdjacentHTML("afterbegin", movementRow);
  });
};

dispalyMovements(account1.movements);

// create UserNames
const user1 = "Yash Jivani";
function createUserNames(accs) {
  accs.forEach(function (currentAccount) {
    currentAccount.username = currentAccount.owner.toLowerCase().split(" ");
    currentAccount.username = currentAccount.username
      .map((word) => word[0])
      .join("");
    // console.log(currentAccount.username);
  });
}
createUserNames(accounts);
// console.log(accounts);

const calcCurrentBalance = function (movements) {
  const totalBalance = movements.reduce((acc, currValue) => acc + currValue);
  labelBalance.textContent = `${totalBalance} €`;
};

calcCurrentBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const totalIncomes = movements
    .filter((currentMovement) => currentMovement > 0)
    .reduce((acc, curr) => acc + curr);

  const totalWithdrawals = movements
    .filter((currMovement) => currMovement < 0)
    .reduce((acc, curr) => acc + curr);

  const totalInterest = movements
    .filter((currMovement) => {
      return currMovement > 0;
    })
    .map((currMovement) => (currMovement * 1.2) / 100)
    .filter((value) => value > 1)
    .reduce((acc, curr, i, arr) => {
      // console.log(arr);
      return acc + curr;
    }, 0);
  labelSumIn.textContent = `${totalIncomes}€`;
  labelSumOut.textContent = `${Math.abs(totalWithdrawals)}€`;
  labelSumInterest.textContent = `${totalInterest}€`;
};

calcDisplaySummary(account1.movements);
