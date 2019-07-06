let a = parseFloat(prompt('Enter a'));
let b = parseFloat(prompt('Enter b'));
let c = parseFloat(prompt('Enter c'));

if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    if (a <= 0 || b <= 0 || c <= 0) {
        console.log('Triangle doesn’t exist');
    } else if (a === b && b === c) {
        console.log('Eequivalent triangle');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}