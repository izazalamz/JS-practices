// for (let i = 61; i<=100; i++){
//     i % 2 == 1 && console.log(i, "odd");
// }
// for (let i = 78; i<=98; i++){
//     i % 2 == 0 && console.log(i, "even");
// }

let even = [];
let odd = [];

let oddStart = 61;
while (oddStart < 101){
    oddStart % 2 == 1 && odd.push(oddStart);
    oddStart++;
}

let evenStart = 78;
while (evenStart < 99){
    evenStart % 2 == 0 && even.push(evenStart);
    evenStart++;
}

console.log(odd);
console.log(even);