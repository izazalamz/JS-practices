const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(arr){
    let nameLength = arr[0].length;
    let pos = 0;
    for (let i=0; i<arr.length;i++){
        if(arr[i].length<nameLength) {
            nameLength = arr[i].length;
            pos = i;
        }
    }
    return arr[pos];
}
console.log(smallestName(heights2));