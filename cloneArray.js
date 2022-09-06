//Cloning thorug Dstructuring Method
//ES6 introduced the spread operator (...), which provides probably the easiest and most common way to create a shallow clone of an array.
const x = [1,2,3,4,5]
console.log(x, 'orginal Array')
const y = [...x]
console.log(y, 'cloned Array')


// Clonign Through Array.form
//Array.from() has a very powerful API that can be used for many different things, including creating a copy of an array.


const y1 = Array.from(x)
console.log(y1)

//Cloning Through Slice Method
//Similarly to the spread operator, Array.prototype.slice() can be used to create a shallow copy of an array.


const y2 = x.slice()
console.log(y2)


//Trough Map
//Looking into one of the more unorthodox options, Array.prototype.map() can be used to map each element of an array to itself to create a new array.


const y3 = x.map(i=> i)
console.log(y3)

//though Filter
//Similarly, Array.prototype.filter() can be used to return true for each and every element, resulting in a new array with all of the original array's elements.


const y4 = x.filter(()=> true)
console.log(y4)


