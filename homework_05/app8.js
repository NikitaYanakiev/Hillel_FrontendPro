let digit = +prompt('Write the some Six-digit number ', '');

let firstPartDigits = Math.floor(digit / 1000);
let secondPartDigits = digit - firstPartDigits * 1000;


let firstDigit = Math.floor(firstPartDigits / 10 / 10);
let secondDigit = Math.floor(firstPartDigits / 10) % 10;
let thirdDigit = firstPartDigits % 10;

let firstPartDigitsReversed = `${thirdDigit}${secondDigit}${firstDigit}`;
    firstPartDigitsReversed = parseInt(firstPartDigitsReversed);

if (firstPartDigitsReversed === secondPartDigits) {
    alert('The specified six-digit number is a mirror number');
} else {
    alert('The specified six-digit number is not a mirror number');
}