function isEven(element) {
    // if(element & 1)
    // {
    //     return false;
    // }
    // return true;
    return (element % 2 === 0);
}

console.log(isEven(10));

// ARROW FUNCTION
var isEven = (element) => {
    console.log("Inside Arrow Fn");
    return element % 2 === 0;
}
console.log(isEven(101));

// passing the function by reference
// .every() takes upto 3 args and runs and checks those arguments on all the elements of that array

var res = [2, 4, 6, 8].every(isEven);
console.log(res);
var res2 = [2, 3, 5, 8].every(isEven);
console.log(res2);


// CALLBACK Functions
var ans = [2, 4, 6, 8].every((e) => {
    return e % 2 === 0;
});
console.log(ans);

// () => ()  --> when not using return keyword
var ans2 = [2, 4, 6, 8, 10].every((e) => (e % 2 === 0));
console.log(ans2);