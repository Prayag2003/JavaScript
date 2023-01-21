var User = {
    name : "",
    getUserName : function()
    {
        console.log(`User Name is ${this.name} `);
    }
}

var prayag = Object.create(User);
console.log(prayag);  // returns empty obj

prayag.name = "Prayag";
prayag.getUserName();

var prag = Object.create(User, {

    name : {value : "Prayag"},
    department : {value :"Computer Science and Engineering"},
});

prag.getUserName();