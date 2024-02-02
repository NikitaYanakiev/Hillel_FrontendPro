// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let sum = 0;
let firstNum = 1;
let lastNum = 500;

for (let i = firstNum; i <= lastNum; i++) {
    sum += i;
}

let averageNum = sum / ((lastNum + 1) - firstNum);

console.log(averageNum);
