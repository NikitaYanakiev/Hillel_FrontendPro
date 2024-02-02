// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.

let str = ""
let lastNum = 20

for (let i = 10; i <= lastNum ; i++) {
    if (i === lastNum) {
        str += i 
    } else {
        str += i + ", "
    }
}

console.log(str);