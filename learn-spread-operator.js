
// spread with Array
let oldArray = [1, 2, 3];
console.log(oldArray);

let newArray = [...oldArray, 4, 5, 6];
console.log(newArray);

// spread with Object
let oldObject = {id: 1, name: "abdo"};
console.log(oldObject);

let newObject = {...oldObject, age: 19};
console.log(newObject);

/// spread with function
const getOnesOnly = (...numbers) => numbers.filter(e => e === 1);

console.log(getOnesOnly(10, 1 ,2, 1, 5, 3));

