let a1 = +prompt('Enter a1');
let a2 = +prompt('Enter a2');
let b1 = +prompt('Enter b1');
let b2 = +prompt('Enter b2');
let c1 = +prompt('Enter c1');
let c2 = +prompt('Enter c2');
const d = 2;

if ((b2 + a2) / d === c2 && (b1 + a1) / d === c1) {
    console.log(true);
} else {
    console.log(false);
}