// setTimeout | clearTimeout >>>>>>>>>>>>>>>
const arr = ["one", 2, "three"];
const timer = setTimeout(
  (arg1, arg2) => {
    return console.log("Timer function call", arg1, arg2);
  },
  3000,
  // pass arguments...
  "hello",
  "yash"
);

console.log("Hello world...");
if (arr.includes(2)) {
  //   clearTimeout(timer);   // clear timer(setTimeout function)
}

// setInterval >>>>>>>>>>>>>>>
setInterval(() => {
  // console.log(new Date().getMinutes(), new Date().getSeconds());
}, 1000);
