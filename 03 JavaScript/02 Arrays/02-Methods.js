// * length ::

const arr =[11,22,99,66,55,33];
console.log(arr.length);

// ################# Insertion #################

// * unshift method ::
// insert element at beginning | also returns new array's length
console.log('\n:: unshift method ::\n')
const example = [1,2,3,4,5,6,7,8,9];
example.unshift('yash','jivani');  // console.log -> return new array's length
console.log(example);

// * push method ::
// insert element at end | also returns new array's length
console.log('\n:: push method ::\n')
const example2 = [1,2,3,4];
example2.push('value1','value2');    // console.log -> return new array's length
console.log(example2);

// ################# Deletion #################

// * shift method ::
// remove first element of array | returns removed element
console.log('\n:: shift method ::\n')
const example3 = [1,2,3,4];
let deletedItem = example3.shift();    
console.log(example3,deletedItem);

// * pop method ::
// remove last element of array | returns removed element
console.log('\n:: pop method ::\n')
const example4 = [1,2,3,4];
let deletedItem2 = example4.pop();    
console.log(example4,deletedItem2);

// * with delete keyword 
// NOTE : issse given position ki value undefine hoti hai | array ki size same rehti hai
console.log('\n:: delete keyword ::\n');
const arrx = [1,2,3,4];
console.log(arrx)
delete arrx[0];
console.log(arrx);

// ################# Other useful methods #################

// * concate method ::
// use : merge array | return new array
console.log('\n:: Concate method ::\n')
const arr1 = [1,2,3,'jivani'];
const arr2 = [3,5,'yash'];
const myArr = arr1.concat(arr2,'hello world');
const myArr2 = arr1.concat("value");
const myArr3 = arr1.concat(arr2,arr,'otherValues');
console.log(myArr);
console.log(myArr2);
console.log(myArr3);

// * join method ::
// use : join element of array into string | return new array
// sytx :   array_name.join("<separator>");
console.log('\n:: Join method ::\n')
console.log(arr1.join("*"))   // join arr1 element into string
console.log(arr1.join(" | "))   // join arr1 element into string

// * reverse method ::
// will change in original array
console.log('\n:: Reverse method ::\n');
arr1.reverse();
console.log(arr1);
console.log(arr2.reverse());

// * slice method ::
// returns portion of an array | shallow copy 
// sytx :   array_name.slice(begin,end) 
console.log('\n:: Slice method ::\n');
console.log(arr.slice(1,3))  // 1 to 2nd element (end - excluded)
console.log(arr.slice(-4,-1))  // start from last 4th value to end (end will not included)
console.log(arr.slice(-2))  // last 2 element
console.log(arr.slice(1))   // 1 index to end  
console.log(arr.slice())   // 0 to length  

// * splice method ::
// for delete - insert(replace) item in array | will change in original array
// sytx -   array_name.splice(index,delete,replace)
console.log('\n:: Splice method ::\n');
const myArray = [11,22,33,44,55,66,77,88,99];
myArray.splice(2,2);        // start from 2nd index delete and delete 2 ele. from array
console.log(myArray);
const myArray2 = [11,22,33,44,55,66,77,88,99]
myArray2.splice(5,0,"value1","value2",'value3');
console.log(myArray2);      // start from 5th index, delete nothing, add given values in array
const myArray3 = [11,22,33,44,55,66,77,88,99];
myArray3.splice(3,4,'myValue1','myValue2');     // start from 3rd index, delete 4 element, and add given value
console.log(myArray3);

// * toString() ::
// print array all items as string 
console.log('\n:: toString method ::\n');
console.log(arr1.toString());

// * Array.isArray() method ::
// check whether a value is array or not
console.log('\n:: Array.isArray() method ::\n');
console.log(Array.isArray(['hello','world']))
console.log(Array.isArray('hello'))
console.log(Array.isArray(55,46))

// * indexOf method ::
// use : find given first ele. from array
// synx -   array_name(item,startFrom);
console.log('\n:: indexOf() method ::\n');
const myArrL = ['yash','jivani',6,8,'yash',9,'firstname','jaymin'];
console.log(myArrL.indexOf('yash'))     
console.log(myArrL.indexOf('yash',1))   // startFrom 1st index
console.log(myArrL.indexOf('jaymin'))
console.log(myArrL.indexOf('jay'))
