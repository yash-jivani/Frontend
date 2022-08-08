// type conversion #########################
console.log('\n-- TYPE CONVERSION --\n');
const value = '21';
const value2 = 'Yash';

console.log(typeof value);
console.log(value + 8);
console.log(typeof Number(value));
console.log(Number(value) + 8);     // to string to number

console.log(Number(value2));
console.log(value2 + value);

// NOTE ::
console.log(typeof NaN);        // type of NaN => Number
console.log(typeof Number(value2));



// type coercion #########################
console.log('\n-- TYPE COERCION --\n');

const adding = 21 + '5';
console.log(adding);
console.log(typeof adding);     // 21 convert in string

const add2 = '21' - 5;
console.log(add2);
console.log(typeof add2);     // 21 convert in number

/*

:: NOTE ::

minus(-) operator chnage into number 
plus(+) operator chnage into string (if there is any string present in expression)

*/  

console.log('2'+2+'1');
console.log('2'-2-'1');
console.log('5'-6+10-1+'100');
console.log('yash'-2);
console.log('yash'-'2');
