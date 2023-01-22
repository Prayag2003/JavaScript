// Curring :- 
// It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence. 
function init() {
    var firstName = "Prayag";
    console.log("Inside INIT");
    function sayFirstName() {
        console.log(firstName);
    }
    return sayFirstName;
}

// console.log( init()());

// val is holding a reference of the above init function and hence it is not completely erased after the function is executed since it stores the reference of the function

var val = init();
val();

function addition(num1) {
    return function adding(num2)
    {
        return num1 + num2;
    }
}

let ptr = addition(10);
// ptr holds the reference of the adding function since are returning it and hence it cannot just disappear off the memory stack after being executed , also addition function also doesnt disappear ...

console.log(ptr(10));

// another way of writing it , all possible due to Closure
console.log(addition(10)(10));

