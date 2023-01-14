function sayHello(name) {
    console.log("hello", name);
    console.log(`hello there, ${name}`);
}

// calling a function
sayHello();

// referring a function
sayHello;

sayHello("Prayag");

function namaste() {
    return "Hello in INDIA is Namaste";
}
console.log(namaste());