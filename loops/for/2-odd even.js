// for (let i = 61; i<=100; i++){
//     i % 2 == 1 && console.log(i, "odd");
// }
// for (let i = 78; i<=98; i++){
//     i % 2 == 0 && console.log(i, "even");
// }

let even = [];
let odd = [];
for (let i = 61; i<=100; i++){
    i % 2 == 1 && odd.push(i);
}
for (let i = 78; i<=98; i++){
    i % 2 == 0 && even.push(i);
}

console.log(odd);
console.log(even);