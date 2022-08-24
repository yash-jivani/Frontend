// Set is a collection of unique values | apply on all iterables

// creation
const mySet = new Set([1, 2, 2, 3, 4, 1, 3]);
const mySet2 = new Set("yaashh");
console.log(mySet);
console.log(mySet2);

// insert value/data
mySet.add("<NEW>");
console.log(mySet);

// remove value/data
mySet.delete(1);
console.log(mySet);

// length
console.log(mySet.size);

// has method
console.log(mySet.has(2));
console.log(mySet.has(10));

// looping
for (let i of mySet) {
  console.log(i);
}

// Note : we can not access values with index
for (let i = 0; i < mySet.size; i++) {
  //   console.log(mySet[i]); // undefined
}

// Real world example ::
// remove all duplicates | find how many unique positions are available
const myArr = ["Manager", "SDE", "FEE", "SDE", "FEE"];
const x = new Set(myArr);
// const y = [...new Set(myArr)]; // converting into array
console.log(y);
console.log(`Total Positions : ${x.size}`);
console.log(new Set(["Manager", "SDE", "FEE", "SDE", "FEE"]).size); // total poisition : 3
console.log([...new Set(["Manager", "SDE", "FEE", "SDE", "FEE"])].length); // total poisition : 3
