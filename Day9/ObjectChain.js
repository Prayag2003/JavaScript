var userDetails = function (userName, courseCount) {
    this.userName = userName;
    this.courseCount = courseCount;
    this.getCourseCount = function (userName) {
        console.log(`Course Count is ${this.courseCount}`);
    }
}

userDetails.prototype.getMyName = function () {
    console.log(`User Name is ${this.userName}`);
}

var instance1 = new userDetails("Prayag", 10);

// obj_name.hasOwnProperty()
// Checks if the attribute is available or not

if (instance1.hasOwnProperty("userName")) {
    instance1.getMyName();
}