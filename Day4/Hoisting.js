// Hoisting is JavaScript's default behavior of moving declarations to the top.
tip("20");
function tip(b) {
    var bill = parseInt(b);
    console.log(bill + 5);
}

tip(100);
tip("a");

// bigTipper(100);
// function bigTipper(a)
// {
//     var bill = parseInt(a);
//     console.log(bill + 20);
// }


// TODO:
// here bigTipper is a variable and it is scanned and made undefined whereas functions are scanned and made available .... 

var bigTipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 20);
};

bigTipper(120);

// global context collects all the information and we are trying to access first and declare laer on ...
// Hence UNDEFINED

console.log(temp);
var temp = "Prayag";

