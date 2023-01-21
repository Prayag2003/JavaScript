const target = {a:1 , b:2};
const source  = {b:4 , c:5};

// Object.assign() copies all the enumerable own properties from one or more sources to a target object

console.log(target);
const returnedObj = Object.assign(target,source);
console.log(returnedObj);

