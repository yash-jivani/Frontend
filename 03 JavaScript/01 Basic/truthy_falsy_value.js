// falsy value #########################
// 0, undefined, null, NaN, '', false
console.log('\nFALSY VALUE ::\n')

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(''))

// other method : value into boolean
console.log(!!(NaN))
console.log(!!(''))


// truthy value #########################
// except falsy value all other values are truthy 
console.log('\nTRUTHY VALUE ::\n')

console.log(!!([]))
console.log(!!({}))
console.log(!!('a'))
console.log(!!(1))
console.log(!!(-77))
