// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let num = +prompt('Enter any number');
let isPrime = true;

if (num === NaN || num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            isPrime = false;
        }
    }
}

if (isPrime) {
    console.log(`${num} is a prime number.`);
} else {
    console.log(`${num} is not a prime number`);
}
