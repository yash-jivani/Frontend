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
  orderDelivery(one, ...two) {
    console.log(one);
    console.log(two);
  },
};

// properties(keys)
console.log("--- KEY ---");
console.log(Object.keys(restaurant.openingHours)); // Array
for (let day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}

// property values
console.log("--- VALUE ---");
console.log(Object.values(restaurant.openingHours.thu));
for (let day of Object.values(restaurant.openingHours.thu)) {
  console.log(day);
}

// entries object | key, value
console.log("--- KEY, VALUE ---");
const entries = Object.entries(restaurant.openingHours);
// console.log(entries);    // in Each Array -> 0th index : keys, 1st index : values
for (const x of entries) {
  console.log(`KEY : ${x[0]}, VALUE : ${x[1]}`);
}
for (const [key, { open, close }] of entries) {     // Destructuring
  console.log(`KEY 👉 ${key}, VALUE 👉 Open:${open} Close:${close}`);
}
