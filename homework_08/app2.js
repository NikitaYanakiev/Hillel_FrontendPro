// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let courseDollar = 27;

for (let i = 10; i <= 100; i += 10) {
    let result = i * courseDollar;

    console.log(`${i}$ its ${result} uah`);
}