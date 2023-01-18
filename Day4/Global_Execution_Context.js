console.log(name);
function abc() {
    console.log("Hello");
}

// Global context collects all the information of the functions and variables (  E V E R Y T H I N G )

// Window Object tied majorly with the browser....
var name;
abc();
// execution context
// --> run a block of code or functions

// Execution contexts keep on stacking on the global context

//  TODO:
// -------------- CONSISTS OF 3 MAIN PARTS

// 1 ) VARIABLE Object
// 2 ) SCOPE CHAINING
// 3 ) THIS


//// TODO: I M P   R U L E S
// Functions are scanned and made available
// Variables declaration are scanned and made undefined....