let oddSum = 0;
let evenSum = 0;

let oddStart = 81;
let oddEnd = 131;
let evenStart = 206;
let evenEnd = 311;

while(oddStart<=oddEnd){
    oddStart % 2 == 1 && (oddSum += oddStart);
    oddStart++;
}
while(evenStart<=evenEnd){
    evenStart % 2 == 0 && (evenSum += evenStart);
    evenStart++
}


console.log("Odd Sum:", oddSum);
console.log("Even Sum:", evenSum);
