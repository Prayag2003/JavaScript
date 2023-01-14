// Create an application with following roles :
// admin - gets full access
// subadmin - gets access to create/delete course
// testprep - gets access to create / delete tests
// user - gets access to consume the content

var user = "admin";

switch (user) {
    case "admin":
        console.log("\nGets Full Access\n");
        break;

    case "subadmin":
        console.log("\nCreate/Delete courses\n");
        break;

    case "testprep":
        console.log("\nCreate/Delete test\n");
        break;

    default:
        console.log("\nConsume Content\n");
        break;
}

