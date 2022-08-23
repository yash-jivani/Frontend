"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  // 3. expression in property name
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 1}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // 1. object inside object
  //   openingHours: openingHours, // old method
  openingHours, // ES6

  // 2. With methods (functions)

  orderDelivery: function (obj) {
    // old method
    return obj;
  },

  orderDelivery(obj) {
    // ES6
    return obj;
  },
};

console.log(restaurant);
console.log(restaurant.orderDelivery({ name: "yash" }));
