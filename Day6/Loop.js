const array = [1, 23, 4, 5, 9.33, "Prayag"];

// FOR Loop

console.log("\nFOR LOOP")
for (let i = 0; i < array.length; i++) {
    if (typeof (array[i]) !== "string")
        console.log(array[i]);
}
// as soon as scope is over , let i is freed 

// WHILE Loop

console.log("\nWHILE LOOP")
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}


console.log("\nDO WHILE LOOP");
// DO WHILE Loop ( atleast runs 1 time )
let j = 5;
do {
    console.log(array[j]);
    j++;
} while (j < array.length);


