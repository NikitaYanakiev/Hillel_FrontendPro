// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let num = +prompt('Enter any integer', '');

if (num > 0) {
    for (let i = 1; i < 100; i++) {
        if (i ** 2 < num) {
            console.log(i);
        }
    }
} else {
    console.log('Number must be more than 0');
}