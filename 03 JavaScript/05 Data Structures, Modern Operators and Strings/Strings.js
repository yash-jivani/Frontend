// ! STRINGS ARE Immutable

/*

NOTE::
    string is primitive data type BUT when we call method on string
    ... JS converts it into object 
    ... after operation it will automatically converted into string again!

*/

// * creating string

// normal method
let str11x = "yash";
console.log(str11x);
console.log(typeof str11x); // String

// wtih constructor
let str2 = new String("jivani");
console.log(str2);
console.log(typeof str2); // Object

// ?? NOTE ::
console.log("\n:: Obj to string AUTO ::\n");
console.log(typeof new String("xyz"));
console.log(typeof new String("xyz").slice(1));
console.log(typeof "abc");
console.log(typeof "abc".slice(1));

// * Indexing
console.log("\n:: Indexing ::\n");
let myStr1111 = "abc xyz ijk pqr";
console.log(myStr1111[0]);
console.log(myStr1111[5]);

// * string with `backticks`
console.log("\n:: with backticks ::\n");
let str3 = `yash jivani`;
console.log(`hello world ${str3}`);

// * string concatenation
let string1 = "yash";
let string2 = "jivani";
console.log("\n:: string concatenation ::\n");
console.log(string1 + string2); //  with "+" operator
console.log(string1, string2); // with ',' (comma)
console.log(`${string1} ${string2}`); // with backticks(``);
console.log(string1.concat(string2, "other")); // with concate method



// METHODS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log("\n\n<<< String METHODS >>>\n\n");

// * length ::
let str = "Hello World";
console.log("length -> ", str.length);

// * charCodeAt()
// use : print char code (ascii)
console.log("\n:: charCodeAt ::\n");
console.log(str.charCodeAt(0));
console.log(str.charCodeAt(3));
console.log(str.charCodeAt(5));

// * toUpperCase() | toLowerCase()
console.log("\n:: toUpperCase & toLowerCase ::\n");
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// * trim method
// use : remove white space from both side
console.log("\n:: trim ::\n");
console.log("  Hello world with trim method   ".trim());

// * replace method
// use : replace value (only first) | case sensitive
console.log("\n:: replace ::\n");
console.log(str.replace("Hello", "bye!"));
console.log("one one one two one".replace("one", 1)); // replace only 1st value

// * replaceAll method
// use : replace all value
console.log("\n:: replaceAll ::\n");
console.log("one one one two one".replaceAll("one", 1)); // replace all

// * split method
// use : break (separate) string with given delimeter and return array
console.log("\n:: split ::\n");
console.log(str.split(" "));
console.log(str.split(""));
console.log("hello | world | yash | jivani".split("|"));

// * indexOf() method
// use : find first occurrence of given string | can't use regex
// sytx : string_name.indexOf(<substring>,<index>)
console.log("\n:: indexOf ::\n");
console.log(str.indexOf("llo"));
console.log("ho1 world hello hello bye".indexOf("hello")); // return only first occurance index

// * lastIndexOf() method
// use : find last occurrence of given string | can't use regex
// sytx : string_name.lastIndexOf(<substring>,<index>)
console.log("\n:: lastIndexOf ::\n");
console.log(str.lastIndexOf("o"));
console.log("ho1 world hello hello bye".lastIndexOf("hello"));

// * search method
// use : find given string end return position | can use regex
// sytx : string_name.search(<string>)
console.log("\n:: search ::\n");
console.log(str.search("llo"));
console.log("ho1 world hello hello bye".search("hello")); // return only first occurance index

// * slice method
// access part of string
console.log("\n:: slice ::\n");
console.log("hello world one".slice(1, 6)); // index 0 to 5
console.log("yash jivani".slice(-6)); // -6 to end
console.log("yash jivani".slice(-3, -1)); // -3 to -2 (-1 exclude)

// * substr method
// simmliar to slice ...
// sytx :  string_name.substring(startingIndex,endIndex)
console.log("\n:: substr ::\n");
console.log("yash-jivani".substring(2, 7)); // startfrom index 2 and go upto 6th index

// * Padding
console.log("\n:: padStart - padEnd ::\n");
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard("334859493847755774747"));

// * Repeat
console.log("\n:: Repeat ::\n");
const message2 = "Bad waether... All Departues Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛸".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
