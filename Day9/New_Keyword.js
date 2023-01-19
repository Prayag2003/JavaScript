// N E W   K E Y W O R D

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

// New Keyword is used to create an instance of the user-defined object type 

//  When a function is called with the new keyword, the function will be used as a constructor

// Invokes the CONSTRUCTOR creating a unique instance every time

// creates a copy of the function and moves "this keyword" from global context to inside of the function

var user = function (userName, courseCount) {
    this.userName = userName;
    this.courseCount = courseCount;
    this.getCourseCount = function (userName) {
        console.log(`Course Count is ${this.courseCount}`);
    }
}

// var name = user("ABC",1);
// console.log(name);
// UNDEFINED
// Reason being that in a regular function call , this points to the window object ( Empty Object in NODE )

// Creating an instance ( or Copy ) using NEW Keyword
var prayag = new user("Prayag", 10);
var bhatt = new user("Bhatt", 5);

console.log(prayag);
console.log(bhatt);

