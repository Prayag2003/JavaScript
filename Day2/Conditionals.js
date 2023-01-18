
// SHORT CIRCUITING :- which means that the second condition of the 'if' will only be evaluated if the outcome is not determined by the first condition.

// a && (b+c)
// if a is false then (b+c) will not get executed and hence '&&' get short circuited

console.log(3 + (4 * 5));
console.log(4 * 3 ** 2);
console.log(typeof null);
console.log(typeof Object);
console.log(typeof undefined);

console.log(2 && 3);
console.log(2 & 3);
console.log(0 && 3);
console.log(0 | 3);