// 9.  Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// 10. Визначити кількість його парних дільників.
// 11. Знайти суму його парних дільників.

let naturalNumber = +prompt('Enter any natural number', '');
let divisors = '';
let countEvenDivisors = 0;
let sumEvenDivisors = 0;

for (let i = 0; i <= naturalNumber; i++) {
    if (naturalNumber % i === 0) {
        if (i === naturalNumber) {
            divisors += i 
        } else {
            divisors += i + ", "
        }

        if (i % 2 === 0) {
            countEvenDivisors++;
            sumEvenDivisors += i;
        }
    }
}

if (!naturalNumber) {
    alert(`Its not natural number, try again`)
} else if (naturalNumber < 1) {
    alert('Natural number must be more than 0')
} else {
    alert(`its divisors: ${divisors} it has ${countEvenDivisors} even divisors and sum of them ${sumEvenDivisors}`);
}