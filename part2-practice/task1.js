const heights2 = [167, 190, 120, 165, 137];

function checkLowest(array){
    let lowest = array[0];
    for (const item of array){
        if (lowest > item) {
            lowest = item;
        }
    }
    return lowest;
}

console.log(checkLowest(heights2));