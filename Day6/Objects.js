// Key Value Pairs
var user = {
    firstName: "Prayag",
    lastName: "Bhatt",
    numberOfLogins: 30,
    isLoggedFromGoogle : true,
    followers : 10000000
};

console.log(user);
console.table(user);

// Objects Properties can be accessed via " . " or by passing the required argument as a string inside the object

console.log(user.firstName);
console.log(user["lastName"]);

// Properties can be changed just as well
user.isLoggedFromGoogle =  false;
console.log(user.isLoggedFromGoogle);