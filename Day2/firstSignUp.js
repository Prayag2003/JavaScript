const uid = "abc123";

// Gives TypeError
// uid = "abc1234";

var fullName = "Prayag Ravi Bhatt";
var email = "prayagbhatt2003@gmail.com";

var password = "123456";
var confirmPassword = "123456";

var courseCount = 0;
var isLoggedInFromGoogle = false;

// fullName = prompt("Enter Your Name");

// use , or  + for concatenation
console.log("Full Name is  :", fullName);
console.log("Full Name is  :" + fullName);
console.log(email);
console.log(uid);
console.log(password);


//  ( INTERPOLATION )
// Using BACK TICKS --> much efficient method

console.log
(
    `With Unique ID : ${uid}
     User is : ${fullName}
     and his Email is : ${email}
     and uses the password : ${password}
    `
);



