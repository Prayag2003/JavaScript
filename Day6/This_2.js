// TODO: For all regular function calls , THIS points to the Global / Window Object
// In case of Node --> {}

// Empty Object
console.log(this);

var user = {
    firstName: "Prayag",
    courseCount: 4,
    getCourseCount: function () {
        console.log("Line 12 ", this);
        return this.courseCount;
    }
}
console.log(user.getCourseCount());

//  user.getCourseCount isn't counted as regular function call
// since it is called through an object and not purely in its entirity 

function sayHello() {
    console.log("Hello");
}
// regular function call
sayHello();

var curr_user = {
    userName: "Mr Stark",
    networth: "$3Billion",
    assets: "$45Million",
    cars: "20",
    incomeSource: function () {
        console.log("LINE 35");
        function hello() {
            console.log("Hello World", this);
        }
        hello();
        console.log("LINE 41", this);
    }
};

curr_user.incomeSource();