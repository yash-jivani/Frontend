const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// * include method | equality
console.log("Include Method : ",movements.includes(-400));

// * some method | Conditional | returns false only if All ELE. fail test (provided as a callback function).
console.log("Some : ",movements.some((currValue)=>{return currValue>2500}));
console.log("Some : ",movements.some((currValue)=>{return currValue>5000}));

// * every | (if ALL the ELEMENT in an array pass a test[(provided as a callback function)]) ? true : false
console.log("Every: ",movements.every((value) => value>0));
console.log("Every: ",movements.every((value) => value%2===0));