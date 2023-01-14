// FILL is used to change the elements to a certain provided entity by the user 
// Default start and end points are 0 and arr.length

var arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.fill('prayag', 0));

// Starting is INCULDED and ending is EXCLUDED
// start from 2nd pos and end at 4th pos
console.log(arr.fill('abc', 1, 4));
console.log(arr.fill('empty'));

// Using FILTER gets you a new Array

const myNumber = [10, 20, 40, 43, 55, 66, 77, 88, 99, 101];
console.log(myNumber);
const res = myNumber.filter((num) => (num != 101));
console.log(res);

const lessthan55 = myNumber.filter((num) => (num < 55));

console.log(lessthan55);