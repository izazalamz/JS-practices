const numbers = [12, 98, 5, 41, 23, 78, 46];

let output = [];

for (let num of numbers){
    if (num%2==0) output.push(num);
}

console.log(output);