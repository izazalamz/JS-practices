const arr = [1,2,3,4,5,6,7,8,9,10];

function make_avg(nums, len){
    let sum = 0;
    for (const num of nums) sum += num 
    return sum/len.toFixed(2);       
}
console.log(make_avg(arr, arr.length));