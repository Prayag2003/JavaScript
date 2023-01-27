var map = new Map();

// Works like objects but maps are not objects

// KEY - VALUE PAIRS
map.set(0, "Prayag");
map.set(1, "Bhatt");
map.set(2, "Maps");
map.set(3, "Set");
map.set(4, "Get");

console.log(map);

// grabbing values from Map

// loops through all keys  m.keys()
for (let key of map.keys()) {
    console.log(`Key is ${key}`);
}

for (let values of map.values()) {
    console.log(`Value is ${values}`);
}

for (let [key, value] of map) {
    console.log(`Key is ${key} and value is ${value}`);
}

// gives the values instead keys
// reason being the loop is designed in such a way that it understands the only modifification of indexes(keys) , it gives only the values
map.forEach((key) => console.log(`Key is ${key}`));

map.forEach((v, k) => console.log(`${k} is the key and ${v} is the value`));


map.delete(3);
console.log(map);
