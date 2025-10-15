const murgi = "ami murgi khamu na, deshi hoile khaite pari";

function checkVowel(line){
    let count = 0;
    for (const letter of line) if (["a","e","i","o","u"].includes(letter.toLowerCase())) count += 1;
    return count;
}

console.log(checkVowel(murgi));