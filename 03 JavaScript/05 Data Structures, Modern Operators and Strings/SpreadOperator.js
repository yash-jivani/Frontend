// spread operator works on all iterables.
// Iterables : Arrays, Strings, Maps, Sets BUT NOT OBJECTs

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


// Basic
console.log("\n<< Basic >>");
const exampleArr = [7, 8, 3];
const myArr1 = [1, exampleArr];
const myArr2 = [1, ...exampleArr]; // with spread operator | shallow copy
console.log(myArr1);
console.log(myArr2);
console.log(...exampleArr);

// copy array
console.log("\n<< copy Array >>");
const newMenu = [...restaurant.mainMenu]; // shallow copy
console.log(newMenu);

// merge (join) 2 arrays
console.log("\n<< join Arrays >>");
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// with strings
console.log("\n<< with strings >>");
const str = "YASH";
const letters = [...str, " ", "7"];
console.log(...str);
console.log(letters);
// console.log(`${...str} Jivani`); // *NOTE : Error | 'cause "${}" is not the place that expects multiple values separated by a comma.

// with parameters | real world example
console.log("\n<< real world example >>");
const ingredients = [
  //   prompt("ingredient 1:"),
  //   prompt("ingredient 2:"),
  //   prompt("ingredient 3:"),
];
restaurant.orderPasta(...ingredients);

// with objects
const newRestro = { founderId: 278, ...restaurant, founderName: "xyz" };
console.log(newRestro);

// copy objects | shallow copy
console.log("\n<< copy object >>");
const myObj = { ...restaurant }; // same as Object.assign({},restaurant)
myObj.name = "HELLO WORLD"; // will chnage in myObj only
myObj.categories[2] = "HELLO WORLD"; // will change in both | 'cause it is nested object
console.log(myObj.name);
console.log(restaurant.name);
console.log(myObj.categories);
console.log(restaurant.categories);
