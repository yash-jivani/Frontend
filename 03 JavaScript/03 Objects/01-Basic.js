// * s################# Creation #################

// normal method
console.log("\n:: Object creation ::  \n");
let obj1 = {};
console.log(obj1);
// with constructor
let myObj = new Object();
console.log(myObj);



// * ################# Insert value #################

console.log("\n:: insert values ::  \n");
// method 1 :
obj1["fname"] = "yash";
obj1["lname"] = "jivani";
obj1["total"] = function () {
  return 1 + 2 + 3;
};
// ? usage
let fromUserKey1 = "key1";
obj1[fromUserKey1] = "value1"; // can evaluate variable value | { key1 : "value1" }
// method 2 :
obj1.phone = 12354654;
obj1.adrs = "home";
obj1.totalSum = function () {
  return 2 + 3 + 1;
};
let fromUserKey2 = "key2";
obj1.fromUserKey2 = "value2"; // can not evaluate variable value | { formUserKey2 : "value2" }

console.log(obj1);



// * ################# Access value #################

console.log("\n:: Access values ::  \n");

// Method 1: with []
console.log(obj1["fname"]);
console.log(obj1["totalSum"]());

let fromUser = "lname";
console.log(obj1[fromUser]); // can evaluate variable value

// Method 2: with dot (.) operator
console.log(obj1.phone);
console.log(obj1.total());

let fromUser2 = "adrs";
console.log(obj1.fromUser2); // can not evaluate variable value



// * ################# Delete/remove value #################

console.log("\n:: Delete values ::  \n");
delete obj1["fname"];
delete obj1["adrs"];
delete obj1["total"];
console.log(obj1);
