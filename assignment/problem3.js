function willSuccess(numbers){
    if (typeof numbers !== "object") return "Invalid";
    let pass = 0;
    let fail = 0;
    for (const number of numbers){
        if (number<50) fail++;
        else pass ++;
    }
    if (pass>fail) return true;
    return false;
}

console.log(willSuccess([8,48,50,50,51]));