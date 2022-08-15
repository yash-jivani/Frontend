const firstName = "Yash";

function calcAge(birthYear) {
  const age = birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (true) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Steven";

      // Reasssigning outer scope's variable
      output = "NEW OUTPUT!";

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      // function scope (function declaration / var)
      {
        // block-1
        {
          // block-2
          function add(a, b) {
            return a + b;
          }
          var xyz = 999;
        }
      }

      // block scope (const / let)
      const add2 = (a, b) => {
        return a + b;
      };

      // function scope (var)
      var add3 = (a, b) => {
        return a + b;
      };
    }
    // console.log(str);
    console.log(millenial);
    console.log(add(1, 1));
    // console.log(add2(10,10));   // error | out of scope
    console.log(add3(20, 20));
    console.log(xyz);
    console.log(output);
  }
  printAge();

  return age;
}

calcAge(2003);
// console.log(age);    // error
// printAge();      // error
