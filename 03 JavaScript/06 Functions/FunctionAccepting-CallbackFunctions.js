"use strict";

function changeToLower(str) {
  return str.toLowerCase();
}

function changeToUpper(str) {
  return str.toUpperCase();
}

function transformer(str, func) {
  console.log(`\nOriginal String : ${str}`);
  console.log(`after funciton call: ${func(str)}`);
  console.log(`transformed by : ${func.name}`);
}

transformer("HelLo wOrld", changeToLower);
transformer("hELlo wOrld", changeToUpper);

function high5() {
  console.log("👋");
}
document.body.addEventListener("click", high5);
