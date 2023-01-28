// Spread Operators

// Challenge :
// Multiple args passed 
var returnMaxVal = Math.max(2, 3, 6, 78, 9, 500);
console.log(returnMaxVal);

var myObj = [];
Object.assign(myObj, { a: 1, b: 2, c: 4, d: 5, z: 2 });
console.log(myObj);

function sumOne(a, b) {
    return a + b;
}

var myA = [5, 4];
console.log(sumOne(10, -1));
// extra '2' argument will be ignored since it is not used / understand by the function
console.log(sumOne(10, -1, 2));
// 5,4 Undefined happens when type of data doesnt match
console.log(sumOne(myA));


// ************* SPREAD OPERATOR ************
// Takes the group and tries to spread into multiple grps
console.log(sumOne(...myA));

// ************* REST OPERATOR ************
// no of args isnt known , put three dots with var name
// args below is an array
function sumTwo(...args) {
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sumTwo(2, 3));
console.log(sumTwo(2, 4, 3));
console.log(sumTwo(2, 5, 4, 3));

// REST --> args convert individual elements to array

// while spread does the opposite 


// First Two args considered seperately
function sumThree(a, b, ...args) {
    console.log(args);
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return [multi, sum];
}

console.log(sumThree(2, 3, 5, 4, 4, 4, 4));
