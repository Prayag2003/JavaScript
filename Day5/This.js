//  THIS is sued to access the global context ...
//  In NODE , its gives empty scope {} .
//  In Browser , it shows the window object.

var name = "Prayag";

function sayHello() 
{
    console.log(this);
}
sayHello();
