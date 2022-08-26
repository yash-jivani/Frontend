// Immediately Invoked Function Expression (IIFE)

// function that only execute once!
(function () {
  console.log("Regular: This will never run again!");
})();

(() => console.log("Arr: This will never run again!"))();
