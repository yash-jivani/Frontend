// we need to write exact property name here to new extract variables from this object

"use strict";

const restaurant = {
  name: "Classico Italiano",
  address: "Via Angelo Tavanti 23, Firenze, Italy",
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

  // destruction...
  orderDelivery: function (obj) {
    console.log("\nprinting object >>>");
    console.log(obj);
  },
  orderDeliveryDestruct: function ({time = "00:00",address: adrs,mainIndex: menuIndex = [],other = "Default value",}) { // object destruction 
    console.log("\ndirect destructuring in arguments >>>");
    // NOTE : if we want to use object's property thn we have to use 'THIS' keyword
    console.log(`time : ${time}\nAddress : ${adrs}\nMainIndex : ${menuIndex}\nObjectValue-Name : ${this.starterMenu[menuIndex]}`);  
  },
};

console.log("\n<< name,openingHours and categories from object >>");
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// give your own variables names
console.log("\n<< with own variables name >>");
const {
  name: restroName,
  openingHours: restroOpenHours,
  categories: restroCategories,
} = restaurant;
console.log(restroName, restroOpenHours, restroCategories);

// set default values
console.log("\n<< setting default values >>");
const { menu = [], address } = restaurant; // if menu property not exist in obbject thn set -> []
console.log(menu, address);

// own variable name + default values
console.log("\n<< own variable names + default values >>");
const { menu: myMenu = [], address: restroAdrs = [] } = restaurant;
console.log(myMenu, restroAdrs);

// Mutating a variables | NOTE : parenthesis "()" is MUST
console.log("\n<< mutating values >>");
let a = 111;
let b = 222;
let myObj = { a: "aaa", b: "bbb", c: "ccc" };
// {a,b} = myObj;       // Error
({ a, b } = myObj);
console.log(a, b);

// Nested destructuring | use sytx -> { propertyName:{ nestedPropertyName } }
console.log("\n<< nested destructuring >>");
const {
  thu: { open: thuOpen, close: thuClose },
} = restaurant.openingHours;
const {
  openingHours: {
    fri: { open, close },
  },
} = restaurant;
console.log(open, close);
console.log(thuOpen, thuClose);

// pass object as paramenter and destruction in function argument
restaurant.orderDelivery({
  time: "22:30",
  address: "this is address",
  mainIndex: "011",
});
restaurant.orderDeliveryDestruct({
  time: "22:30",
  address: "this is address",
  mainIndex: 2,
});
