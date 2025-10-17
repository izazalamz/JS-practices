function validContact(input){
    if (typeof input !== "string") return "Invalid";
    else if (input.length == 11 && input.slice(0,2) == "01" && input.split(" ").length == 1) return true;
    else return false;
}

console.log(validContact("01345678392"));