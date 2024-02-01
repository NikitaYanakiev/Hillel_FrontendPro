let digit = +prompt('Write the some number', '');
let lastDigit = digit % 10;

if (lastDigit % 2 === 0) {
    alert(`${lastDigit} it's even`);
} else {
    alert(`${lastDigit} it's odd`);
}
