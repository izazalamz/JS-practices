const colors = ['red', 'blue', 'green', 'yellow', 'orange']
let rev_colors = [];

for (let color of colors){
    rev_colors.unshift(color);
}

console.log(rev_colors);