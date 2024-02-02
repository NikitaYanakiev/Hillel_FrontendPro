// 12. Надрукувати повну таблицю множення від 1 до 10.

for (let i = 1; i <= 10; i++) {

    for (let j = 1; j <= 10; j++) {
        let result = i * j;
        document.write(`${i} * ${j} = ${result} <br>`);
    }
    document.write(`<br>`);
}