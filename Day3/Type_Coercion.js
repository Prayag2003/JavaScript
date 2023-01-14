// Coercion & Falsy Values

// TODO: All are Falsy Values
// undefined
// null
// 0
// ''
// NaN  // not a number

// Anything except the above ones are truthy values...

var user = ""; // undefined

// null --> empty

if (user) {
    console.log("Condition is true");
}


console.log(2 + 2);

// TYPE COERCION :-  js doesn't know how to add a string and number  , so it assumes both as strings
// JS assumes a lot of things on its own and hence tricky languague...


console.log(2 + "2");
console.log("2" + "2");
console.log("2" + 2);

user = "2";
if (2 == user) {
    console.log("Its true");
}
//  == loosely holds , that is independent of the data type 

// ===  --> STRICT CHECKING


console.log(true + false);
console.log(true - false);
console.log(true * false);
console.log(true / false);

console.log(true == true);
console.log(true === true);
console.log(15 + 3 + 'number');
console.log(12 / '6');