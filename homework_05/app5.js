// 5. Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?

let digit = +prompt('Write the some Two-digit number ', '');
let firstDigit = 0;
let lastDigit = digit % 10;

if (digit > 9) {
    firstDigit = digit / 10;
    firstDigit = Math.floor(firstDigit);
} else {
    firstDigit = digit;
}

if (firstDigit > lastDigit) {
    alert(`The first digit ${firstDigit} is larger`)
} else if (lastDigit > firstDigit) {
    alert(`The last digit ${lastDigit} is larger`)
} else {
    alert('The digits are equal')
}
