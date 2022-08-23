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
  orderDelivery(num) {
    return num;
  },
};

// * Optional chaining ( ?. )
// if a certain property does not exist, then undefined returned immediately

// without optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// with optionl chaining;
// console.log(restaurant.openingHours.mon.open);  // Error
console.log(restaurant?.openingHours?.mon?.open);

// real world example
console.log("-- Real world example ---");
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (let day of days) {
  console.log(
    `On ${day}, we open ${restaurant.openingHours?.[day]?.open ?? "<closed>"} `
  );
}

// with Methods
console.log("-- With Method --");
console.log(restaurant.orderDelivery?.(11) ?? "Method not exist");
console.log(restaurant.orderPasta?.(11) ?? "Method not exist");

// with arrays
console.log("-- With Arrays --");
let users = [{ fisrtName: "yash", lastName: "jivani", age: 20 }];
// users = [];
console.log(users[0]?.fisrtName ?? 'users Array Empty');
