// prints all arguments
// will not work with arrow function

function func1(a, b, c) {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[2]);
  // console.log(arguments[99]);
}
func1(1, 2, 3);

const func2 = function (a1, a2, a3) {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[2]);
  // console.log(arguments[99]);
};
func2("A", "B", "C", "D");

//  error
const funcArr = (a, b, c, d) => {
  console.log(arguments);
};

// funcArr(1,2,3,4)
