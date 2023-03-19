

// destructuring with array
console.log("#".repeat(80));
console.log("with array:");

let arr = [1, 2, 3];
var [one, two, three] = arr; // destruct
console.log(one);
console.log(two);
console.log(three);

console.log("#".repeat(80));
console.log("skiping");
var [one, , two] = arr; //skip item
console.log(one);
console.log(two);

console.log("#".repeat(80));


// destructuring with object
console.log("#".repeat(80));
console.log("with object:");

let obj = {name: "abdo", age: 19, address: "eygpt/elezandray"};
var {name, age, address} = obj; // destruct
console.log(name);
console.log(age);
console.log(address);

console.log("#".repeat(80));
console.log("rename key");
var {name: username, age, address} = obj; //rename item
console.log(username);
console.log(age);
console.log(address);


console.log("#".repeat(80));