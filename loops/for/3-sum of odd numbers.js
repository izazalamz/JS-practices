let oddSum = 0;
let evenSum = 0;

for (let i = 91; i<=129; i++){
    i % 2 == 1 && (oddSum += i);
}
for (let i = 51; i<=85; i++){
    i % 2 == 0 && (evenSum += i);
}

console.log("Odd Sum:", oddSum);
console.log("Even Sum:", evenSum);
