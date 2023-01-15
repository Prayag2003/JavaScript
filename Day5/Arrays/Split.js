// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const fruits = ['orange','banana','apple','grapes','peach','papaya'];

console.log(fruits.slice(fruits));

// slices off all elements before index 2 
console.log(fruits.slice(2));

// slices off all elements before 
console.log(fruits.slice(fruits.length - 2));

// start is INCLUDED and end is EXCLUDED 
console.log(fruits.slice(0,4));

// negative indexing counts the last element as -1 , second last -2 and so on .
console.log(fruits.slice(-2));

console.log(fruits.slice(-5,4));

