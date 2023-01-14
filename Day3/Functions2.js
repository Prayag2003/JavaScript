function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} has Full Access`;
        case "subadmin":
            return `${name} has access to create and delete courses`;
        case "testprep":
            return `${name}Access to create/delete tests `;
        case "user":
            return `${name}Consume Content`;
    }
}


var getRoleee = (name, role) => {
    //  ARROW FUNCTION
}

var getRolee = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} has Full Access`;
        case "subadmin":
            return `${name} has access to create and delete courses`;
        case "testprep":
            return `${name}Access to create/delete tests `;
        case "user":
            return `${name}Consume Content`;
    }
}

var getRole = getUserRole("Prayag", "admin");
console.log(getRole);
console.log(getRolee("Aniket", "subadmin"));
