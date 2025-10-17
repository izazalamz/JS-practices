function validProposal(p1, p2){
    if (typeof p1 != "object" || typeof p2 != "object") return "Invalid";
    if (p1.gender != p2.gender && Math.abs(p1.age-p2.age)<=7) return true;
    return false;
}
console.log(validProposal({ name: "toya", gender: "female", age: 24 },
{ name: "bjoy", gender: "male", age: 32 }

));