

// map
console.log('#'.repeat(80));
console.log('map function');

const oldArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("old:");
console.log(oldArray1);

const newArroay1 =  oldArray1.map(e => {
    return e * e;
});

console.log("new::");
console.log(newArroay1);
console.log('#'.repeat(80));


// slice
console.log('#'.repeat(80));
console.log('slice function');

const oldArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("old:");
console.log(oldArray2);

const newArroay2 =  oldArray2.slice(4,11);

console.log("new::");
console.log(newArroay2);
console.log('#'.repeat(80));

// splice
console.log('#'.repeat(80));
console.log('splice function');

const oldArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("old:");
console.log(oldArray3);

const newArroay3 =  oldArray3.splice(4, 5);

console.log("old::");
console.log(oldArray3);
console.log("new::");
console.log(newArroay3);
console.log('#'.repeat(80));

// reverse
console.log('#'.repeat(80));
console.log('reverse function');

const oldArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("old:");
console.log(oldArray4);

const newArroay4 =  oldArray4.reverse();

console.log("old::");
console.log(oldArray4);
console.log("new::");
console.log(newArroay4);
console.log('#'.repeat(80));

// concat
console.log('#'.repeat(80));
console.log('concat function');

const oldArray5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("old:");
console.log(oldArray5);

const newArroay5 =  oldArray5.concat([11, 12, 13, 14, 15]);

console.log("old::");
console.log(oldArray5);
console.log("new::");
console.log(newArroay5);
console.log('#'.repeat(80));


// join
console.log('#'.repeat(80));
console.log('join function');

const oldArray6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("old:");
console.log(oldArray6);

const newArroay6 =  oldArray6.join('-');

console.log("old::");
console.log(oldArray6);
console.log("new::");
console.log(newArroay6);
console.log('#'.repeat(80));

// filter
console.log('#'.repeat(80));
console.log('filter function');

const oldArray7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("old:");
console.log(oldArray7);

const newArroay7 =  oldArray7.filter(e => {
    return e % 2 == 0;
});

console.log("new::");
console.log(newArroay7 );
console.log('#'.repeat(80));

// reduce
console.log('#'.repeat(80));
console.log('reduce function');

const oldArray8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("old:");
console.log(oldArray8);

const newArroay8 =  oldArray8.reduce( (last, current) => {
    return last + current;
},0);

console.log("new::");
console.log(newArroay8 );
console.log('#'.repeat(80));

// find
console.log('#'.repeat(80));
console.log('find function');

const oldArray9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("old:");
console.log(oldArray9);

const newArroay9 =  oldArray9.find( e => {
    return e === 3;
},0);

console.log("new::");
console.log(newArroay9 );
console.log('#'.repeat(80));

// sort
console.log('#'.repeat(80));
console.log('sort function');

const oldArray10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("old:");
console.log(oldArray10);

const newArroay10 =  oldArray10.sort( (first , next) => {
    return first> next;
});

console.log("old::");
console.log(oldArray10);
console.log("new::");
console.log(newArroay10);
console.log('#'.repeat(80));
