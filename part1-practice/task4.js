const bakko = "I am learning Programming to become a programmer";
const fakko = bakko.split(" ");

function checkWord(arr){
    let biggest = 0;
    let size = 0;
    for (let i = 0; i<arr.length; i+=1){
        if (arr[i].length>= size) {
            size = arr[i].length;
            biggest = i;
        }
    }
    return arr[biggest];
}
console.log(checkWord(fakko));