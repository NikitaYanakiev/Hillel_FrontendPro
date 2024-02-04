// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. 
//   (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let num = +prompt('Enter any number', '');
let i = 1;

while (i < num) {
    i *= 3;
}

if (i === num) {
    alert(`true, because you can obtain the number ${num} by raising 3 to power`)
} else {
    alert(`false, you can't obtain the number ${num} by raising 3 to power`);
}