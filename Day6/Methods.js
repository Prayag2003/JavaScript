// to access a property inside an object we use THIS , as this points / references to the current object

var user = {
    firstName: "Prayag",
    lastName: "Bhatt",
    numberOfLogins: 30,
    isLoggedFromGoogle: true,

    // new user hasn't bought any courses yet , hence empty list

    courseList: [],
    buyCourse: function (courseName) {
        if (courseName === null || courseName === " ") {
            return `Invalid Course`;
        }
        if (this.courseList.indexOf(courseName) !== -1) {
            return `You Have Already Purchased ${courseName} Course , Try Out a Different Course`;
        }
        this.courseList.push(courseName);
        return `${this.firstName} has bought ${courseName}`;
    },
    getCourseCount: function () {
        return `Number of Course bought is ${this.courseList.length} `;
    },

    getInfo : function()
    {
        return `User Name is ${this.firstName} ${this.lastName} . 
        The number of times the user logged in is ${this.numberOfLogins} . User Logged in thorugh Google ?  ${this.isLoggedFromGoogle} . Purchased Courses list includes ${this.courseList}`;
    }
};

console.log(user.buyCourse("React JS"));
console.log(user.buyCourse("React JS"));
console.log(user.buyCourse("Angular JS"));
console.log(user.getCourseCount());

console.log(user.getInfo());