let a = +prompt('Write the first number', '');
let b = +prompt('Write the second number', '');

if ( b % a === 0) {
    alert(`${a} is a divisor of a ${b}`);
} else {
    alert(`${a} is not a divisor of a ${b}`);
}

if (a % b === 0) {
    alert(`${b} is a divisor of a ${a}`);
} else {
    alert(`${b} is not a divisor of a ${a}`);
}