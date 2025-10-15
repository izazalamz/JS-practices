const bin = "0100101001001001010111010110101";

function count_zero(bin){
    let count = 0;
    for (const b of bin) if (b==="0") count += 1;
    return count;
}

console.log(count_zero(bin));