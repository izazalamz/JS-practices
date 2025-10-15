function checkNUm(arr, n){
    let count = 0
    for (const num of arr) if (num===n) count +=1
    return count
}
const arr =  [5,6,11,12,98, 5];
console.log(checkNUm(arr, 5));