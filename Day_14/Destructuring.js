// DeStructuring 
// Data Type on LHS should be same as Data Type on RHS

const user = ["Prayag", "Bhatt", 10, "admin"];

// var role = user[3];
// var name = user[0];

// destructing data of array
// var [name, lastname, courseCount, role] = user;

// console.log(role);

const MyUser = {
    name: "Prayag",
    last: "Bhatt",
    courseCount: 5,
    role: "admin",
};

console.log(MyUser.courseCount);

// Destructured , should have same names as of object keys
const { name, last, courseCount, role } = MyUser;

console.log(courseCount);