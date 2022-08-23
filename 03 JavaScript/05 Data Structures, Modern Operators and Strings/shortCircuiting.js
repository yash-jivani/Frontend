"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ingre1, ingre2, ingre3) {
    console.log(
      `Here is the pasta with i1 : ${ingre1}, i2 : ${ingre2}, i3 : ${ingre3}`
    );
  },
};

// * || , && operator

console.log("--- OR ---");
console.log(3 || "Yash");
console.log(0 || "xyz");
console.log("first" || 0);
console.log(undefined || null);
console.log(undefined || null || "Yash Jivani" || "" || 23 || 0);

// example::
// restaurant.guests = 23;
const guests = restaurant.guests ? restaurant.guests : 10;
console.log(guests);

const guest2 = restaurant.guests || 10;
console.log(guest2);

console.log("--- AND ---");
console.log(3 && "Yash");
console.log(0 && "xyz");
console.log("first" && 0);
console.log(undefined && null);
console.log(undefined && null && "Yash Jivani" && "" && 23 && 0);

// example::
if (restaurant.orderPasta) {
  console.log("order pasta Exists! (inside if block)");
}

restaurant.orderPasta && console.log("order pasta Exists!");
