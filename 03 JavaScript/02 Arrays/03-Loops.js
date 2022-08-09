const arr = [11,22,44,55,66,'yash','jivani'];

// for loop 
for(let i = 0;i<arr.length;i++){
    console.log(arr[i])
}
console.log('\n\n')

// forEach loop | it will not return new array (use for print-data)
arr.forEach(function (value,index,arr){      // value, index, arr => default params
    console.log(value,index,arr);
});
console.log('\n\n')

// for of loop | value
for(let value of arr){
    console.log(value)
}
console.log('\n\n')

// for in loop | index
for(let index in arr){
    console.log(index)
}