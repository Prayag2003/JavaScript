// SCOPE CHAINING

// NICELY EXPLAINED via an ICE CREAM STORY @ https://www.youtube.com/watch?v=vGGOOYOXoQ4&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=18

// This is a Scope 
// Curly Braces  == SCOPE
{

}

var name = "Global";
console.log(name);

function call() {
    console.log("Today is 14/1/23 , Uttarayan");
    name = "prayag";
    console.log(name);
}

call();
console.log(name);
call2();

function call2() {
    name = call2;
    console.log(name);
}
// name ="Hero";
console.log(name);
function ca112() {
    let name = ca112;
    console.log(name);
}
ca112();