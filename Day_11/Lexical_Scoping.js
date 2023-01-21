// LEXICAL SCOPING

// Classical JavaScript 

function init()
{
    let firstName = "Prayag";
    function sayFirstName()
    {
        console.log(this.firstName);
    }
    sayFirstName();
}

console.log(init());
// console.log(firstName);

