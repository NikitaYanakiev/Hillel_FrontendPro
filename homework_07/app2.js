// 2. Вивести квадрати чисел від 10 до 20.

let str = ""
let lastNum = 20

for (let i = 10; i <= lastNum ; i++) {
    let value = i ** 2;
    if (i === lastNum) {
        str += value;
    } else {
        str += value + ", ";
    }
}

console.log(str);