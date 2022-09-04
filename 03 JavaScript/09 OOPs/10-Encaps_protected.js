class BankAccount {
  constructor(
    owner,
    currency,
    pin,
    locale = navigator.language,
    movements = []
  ) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.locale = locale;
    this.movements = movements;

    console.log("Thanks for opening account");
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.movements.push(-val);
  }

  approvalLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approvalLoan(val)) {
      this.deposit(val);
      console.log("Loan approved");
    }
  }
}

console.log(`\n<<<<< 1st Account >>>>>\n`);
const acc1 = new BankAccount("Yash", "INR", 1767);

acc1.deposit(200);
acc1.withdraw(120);
acc1.requestLoan(1000);
console.log(acc1);

// Privacy problems
// sensitive fields/methods/properties should not be access by the user directly!!
console.log(`----- sensitive info/data ------`);
console.log(acc1.movements);
console.log(acc1.movements.push(9999999999)); //
console.log(acc1.approvalLoan(true));
console.log(acc1.pin);

// solution >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// use _ (underscore) for protected data

class BankAccount2 {
  constructor(
    owner,
    currency,
    pin,
    locale = navigator.language,
    movements = []
  ) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this.locale = locale;
    this._movements = movements;

    console.log("Thanks for opening account");
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this._movements.push(-val);
  }

  _approvalLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approvalLoan(val)) {
      this.deposit(val);
      console.log("Loan approved");
    }
  }
}

console.log(`\n<<<<< 2nd Account >>>>>\n`);
const acc2 = new BankAccount("Yash", "INR", 1767);

acc2.deposit(200);
acc2.withdraw(120);
acc2.requestLoan(1000);
console.log(acc2);

// Privacy problems resolved
// sensitive fields/methods/properties should not be access by the user directly!!
console.log(`----- sensitive info/data ------`);
console.log(acc2._movements); // undefined
// console.log(acc2._movements.push(9999999999)); // error
// console.log(acc2._approvalLoan(true)); // error
console.log(acc2._pin); // undefined
