// 7.  Дано трехзначное число. 
//     a. Верно ли, что все его цифры одинаковые? 
//     b. Есть ли среди его цифр одинаковые?

let digit = +prompt('Write the some Two-digit number ', '');

let firstDigit = Math.floor(digit / 10 / 10);
let secondDigit = Math.floor(digit / 10) % 10;
let lastDigit = digit % 10;

if (firstDigit === secondDigit && firstDigit === lastDigit) {
    alert('The numbers are the same');
} else {
    alert('The numbers are not the same');
}

if (firstDigit === secondDigit || firstDigit === lastDigit || lastDigit === secondDigit) {
    alert('it has the same numbers');
} else {
    alert('it has not the same numbers');
}