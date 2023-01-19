// INJECTING our own Functions / Methods from anywhere since the CODEBASE maybe having thousands of lines and it is not optimal  to find and add the properties if the instance field of that property exists ... 

var userDetails = function (userName, courseCount) {
    this.userName = userName;
    this.courseCount = courseCount;
    this.getCourseCount = function (userName) {
        console.log(`Course Count is ${this.courseCount}`);
    }
}

// OBJECT_NAME.prototype.userDefinedMethod 
userDetails.prototype.getMyName = function () {
    console.log(`User Name is ${this.userName}`);
}

console.log(prayag.getMyName());
