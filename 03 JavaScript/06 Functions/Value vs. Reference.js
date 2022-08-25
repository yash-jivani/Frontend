// ! JAVASCRIPT DOES NOT HAVE PASSING BY REFERENCE, ONLY PASSING BY VALUE

"use strict";

let myName = "Yash Jivani";
let myObj = {
    id: 7887,
    firstName: "yash",
    lastName: "jivani",
    age: 20,
};

function funChange(name, details) {     // same as name = myName , details = myObj
    name = "<XYZ>";
    details.id = 1111;
}

console.log(`Name : ${myName}`);
console.log(myObj);
funChange(myName, myObj);
console.log(`Name : ${myName}`); // not change because | string(primitive datatype) = diff. memory address
console.log(myObj); // change because | OBJ(reference datatype) = same memory address
