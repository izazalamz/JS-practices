const statement = 'I am a hard working person'

let words = statement.split(" ");
let rev = [];

for (let word of words){
    rev.unshift(word);
}

let rev_statement = rev.join(" ");
console.log(rev_statement);