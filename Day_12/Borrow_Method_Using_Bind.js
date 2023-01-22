// The Prototype or some properties is associated with the OBJECT and some with the methods inside the OBJECT...

// Bind is a keyword 

// creating an object
const prayag =
{
    firstName: "Prayag",
    lastName: "Bhatt",
    courseCount: 10,
    numberOfLogins: 23,
    getInfo: function () {
        console.log(`UserName is ${this.firstName} ${this.lastName} Number of Courses brought is ${this.courseCount} Number of Logins till yet ${this.numberOfLogins}.`);
    },
};

let PrayagInfo = prayag.getInfo();
console.log(PrayagInfo);

// inside stark getInfo method is not available ... 
const stark = {
    firstName: "Tony",
    lastName: "Stark",
    courseCount: 3,
    numberOfLogins: 10,
}

// gives an error
// stark.getInfo();

// Thus we need to BORROW THE METHOD ... Binding the method ...

// currently this keyword points to prayag , what if we change thr pointer and it points to Stark ?

// BIND binds the object , it gives us reference...


// ******  making this pointer point towards stark and not to prayag  *****
prayag.getInfo.bind(stark);

// Two Methods of running this ...

// 1 )  Add  '()' at the back
// 2 ) or storing that into variable also does the same job...

// getInfo;
// is a reference to that method while
// getInfo() is when we call that method

prayag.getInfo.bind(stark)();

let starkInfo = prayag.getInfo.bind(stark);
starkInfo();

// CALL :- directly calls it and gives the output
prayag.getInfo.call(stark);
