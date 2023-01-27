// var let const

// Why LET keyword introduced ??

// JS was getting used at places where it was never used first , such as in Mobile Dev backend routing , and it is good to have errors instead undefined

// Scope Issue in JS

// empty Scope ( if-else , for loop)
{

}

// JS consider Functions as scope 
// Let Keyword is much more utilised

// gives Undefined which is good for FrontEnd but BackEnd needs errors
console.log(name);
var name = 'Prayag';

// console.log(myname);
let myname = 'Prayag';

if (true) {
    // seems as a scope 
    var lastName = 'Bhatt';
    console.log(lastName);
}

// Technically it is not a scope since it is not a method
console.log(lastName); // OP : Bhatt
if (true) {
    let lastName = 'Bhatt';
    console.log(lastName);
}
console.log(lastName);


// Using Let helps in overcoming this problem since after the scope is over , the variables are gone 
