const limit = 100;
let i = 1;
let sum = 0;
while (i>0){
    if (i==limit) break; //includes 100 but does not add to sum
    sum += i

    i++;
}
console.log(i, sum);