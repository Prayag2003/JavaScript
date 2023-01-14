https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Collection of same or different data types( although for diff data types , using OBJECT is preferred ).

// 1 ) JS Arrays are resizable

// 2 ) copy Operations of the arrays creates a SHALLOW COPY ( copy and the original array store the same references or memory locations , thus change in either of them will change that particular object)

// 3 ) Array Objects cannot use Arbitary Strings as element indexes ( examples "02" instead "2" or simply 2 ); 
var countries = ["India", "Singapore", "Switzerland", "UK"];

// preferred method
var states = new Array('Gujarat', 'Maharashtra', 'Karnataka');

states[2] = 'Telangana';
console.log(states);

// not so good practice 
var userInfo = ['Prayag','prayagbhatt2003@gmail.com',100,22];

// deletes an element from the back
userInfo.pop();
console.log(userInfo);

// inserts an element at the front and shifts the rest ( Costly operation )
states.unshift('Delhi');
console.log(states);

// deletes the front element
states.shift();
console.log(states);

// .indexOf returns the index of the input value 
console.log(states.indexOf('Gujarat'));
console.log(countries.indexOf('Singapore'));

// if the value is not present , it returns -1
console.log(countries.indexOf('SSingapore'));


// converting a string/set to an array

// PRAYAG --->  ['P','R','A','Y','A',G];

console.log(Array.from("PRAYAG"));
// doesnt work for integer 
console.log(Array.from(2003));



console.log(states[00002] );
console.log(states[000020] );

// Type Coercion (automatic conversion) holds
console.log(states[2] === states['2']);

// initiating empty array
const fruits = [];
fruits.push('Apple','Banana','peach');
console.log(fruits.length);

// initiating the i = 5th element and JS automatic create 2 empty elements in between
fruits[5] = "Watermelon";
console.log(fruits);
// prints the keys
console.log(Object.keys(fruits));