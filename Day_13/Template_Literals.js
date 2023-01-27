let name = "Prayag";

// can also do via BackTicks ( also known as String Literals)
let lastName = `Bhatt`;

// Single and Double Quotes need to be escaped via \'  ||  \"

var hello = `Hello """ `;
console.log(hello);

// escaping the single and double quotes
var hello2 = "Hello \"\"\" ";
console.log(hello2);

let fullName = `${name} ${lastName}`;

// returns the charachter present at ith pos
console.log(fullName.charAt(4));
console.log(fullName.charAt(0));

// boolean for last letter is equal to input or not
console.log(fullName.endsWith("t"));

// bool whether the string includes the checker string
console.log(fullName.includes("Prayag"));

console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

