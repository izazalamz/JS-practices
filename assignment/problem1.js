function calculateVat(amount){
    if (typeof amount !== "number") return "Invalid";
    return amount*.075;
}
console.log(calculateVat(123));