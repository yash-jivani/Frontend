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
};

// 1) Destructuring

// Spread, because right side
const arr = [1, 2, ...[3, 4, 5]];
console.log(arr);

// REST, because left side
const [a, , b, ...others] = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(a, b, others);

// Objects
const { sat, ...otherdays } = restaurant.openingHours;
console.log(sat, otherdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  console.log(numbers)
  for(let i=0;i<numbers.length;i++){
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 1);
add(5, 1, 4, 2);
add(6, 5, 8, 7, 4, 5, 8, 2, 3);
const x = [1,2,3,4,5];
add(...x);
