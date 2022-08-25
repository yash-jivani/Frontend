"use strict";

const bookings = [];

function booking(name = "unknown",totalPassenger = 1,price = 10 * totalPassenger) {
    const passenger = {
        name: name, // ES5 sytx
        totalPassenger, // ES6 sytx
        price,
    };
    bookings.push(passenger);
}

booking();
booking("yash");
booking("yash", 2);
booking("yash", 2, 30);
booking("yash", undefined, 40);

console.log(bookings);
