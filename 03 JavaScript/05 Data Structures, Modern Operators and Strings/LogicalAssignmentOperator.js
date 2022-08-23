"use strict";

const obj1 = {
  firstName: "yash",
  lastName: "jivani",
  guest: 56,
};

const obj2 = {
  firstName: "xyz",
  age: 45,
};

// * ||= (OR Assignment)  | if not exist thn apply
// obj1.age = obj1.age || 10;
obj1.age ||= 10;
console.log(obj1);

//  * ??= (Nullish Assignment) | if not exist thn apply
// obj2.lastName = obj2.lastName ?? "Default LastName";
obj2.lastName ??= "Default LastName";
console.log(obj2);

//  * &&= (AND Assignment) | if exist thn apply
// obj1.guest = obj1.guest && "<HIDE>";
// obj2.guest = obj2.guest && "<HIDE>";
obj1.guest &&= "<HIDE>";
obj2.guest &&= "<HIDE>";
console.log(obj1, obj2);
