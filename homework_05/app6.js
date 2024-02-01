// 6. Дано трехзначное число. 
//     a. Определить является ли четной сумма его цифр. 
//     b. Определить, кратна ли сумма его цифр пяти. 
//     c. Определить является ли произведение его цифр больше 100. 

let digit = +prompt('Write the some Three-digit number ', '');

let firstDigit = Math.floor(digit / 10 / 10);
let secondDigit = Math.floor(digit / 10) % 10;
let lastDigit = digit % 10;

const sum = firstDigit + secondDigit + lastDigit;

if (sum % 2 === 0) {
    alert(`Sum it's even - ${sum}`);
} else {
    alert(`Sum it's odd - ${sum}`);
}

if (sum % 5 === 0) {
    alert("Sum is a multiple of five");
} else {
    alert("Sum isn't a multiple of five");
}

const mult = firstDigit * secondDigit * lastDigit;

if (mult > 100) {
    alert(`multiplication ${mult} more than 100`);
} else {
    alert(`multiplication ${mult} not more than 100`);
}
