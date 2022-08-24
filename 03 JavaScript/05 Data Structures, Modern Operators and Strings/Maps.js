// Maps : store the data in the form of pairs.

/*

:: Map vs object ::
object -> key type 👉 String or Symbol
Map -> key type 👉  any value (including functions, objects, or any primitive)

*/

// creation
const myMap = new Map();
const xMap = new Map([
  ["key1", "valu1"],
  ["key2", "value2"],
  [true, "value3"],
  [false, "value4"],
  [5, "value5"],
]);
console.log(xMap);


// set/insert values | set method also returns updated map
console.log("-- set values --");
myMap.set("key1", "value1");
myMap.set("key2", "value2");
console.log(myMap.set("key3", "value3")); // return updated map
myMap.set("open", 11);
myMap.set("close", 23);
myMap.set(true, "we are open"); // set boolean as key
myMap.set(false, "we are closed");


// chaining with set method
myMap
  .set("chainKey1", "chainValue1")
  .set("chainKey2", "chainKey2")
  .set("chainKey3", "chainValue3");
// console.log(myMap);


// Get values | get method
console.log("-- Get method --");
console.log(myMap.get(true));
console.log(myMap.get("key1"));
console.log(myMap.get("open"));


// delete method | will return true OR false
myMap.delete("key1");


// has method | will return true OR false
console.log("-- has method --");
console.log(myMap.has("key2"));
console.log(myMap.has("key1"));


// length/size of map
console.log("-- length --");
console.log(myMap.size);

// example
console.log("-- Example --");
const time = 12;
console.log(
  "Ans :: ",
  myMap.get(time > myMap.get("open") && time < myMap.get("close"))
);


// clear method | remove all ele. from map
console.log("-- clear method --");
myMap.clear();
console.log(myMap);


// setting diff. types of keys | TAKE CARE WHEN YOU ARE USING REFERENCE DATA TYPES
console.log("-- With diff. types of keys --");
myMap.set([1, 2], "<Hello World>");
console.log(myMap.get([1, 2])); // undefined | diff. memory location

const myArr = [1, 2];
myMap.set(myArr, "This is myAarr value"); // NOTE : same memory location
console.log(myMap.get(myArr)); // [1,2] | NOTE : same memory location
const myObj = { k1: "v1", k2: "v2", k3: "v3" };
myMap.set(myObj, "This is myObj value"); // same memory location
console.log(myMap.get(myObj)); // same memory location


// PART-2 >>>>>>>>>>>>>>>
console.log("\n\n:: Maps Pt2 :: \n");
const openingHours = {
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
};
// converting objects to maps
console.log("-- Obj to Map --");
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);


// converting map to array
console.log("-- Map to Arr --");
console.log([...xMap]);
console.log([...xMap.entries()]);
console.log([...xMap.keys()]);
console.log([...xMap.values()]);

// looping
console.log("-- loop --");
for (let [key, { open, close }] of hoursMap) {
  console.log(key, open, close);
}
