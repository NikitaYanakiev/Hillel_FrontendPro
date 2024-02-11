// 1. Дан масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
// 2. Знайти мінімальний елемент масиву та його порядковий номер.
// 3. Знайти максимальний елемент масиву та його порядковий номер.
// 4. Визначити кількість негативних елементів.
// 5. Знайти кількість непарних позитивних елементів.
// 6. Знайти кількість парних позитивних елементів.
// 7. Знайти суму парних позитивних елементів.
// 8. Знайти суму непарних позитивних елементів.
// 9. Знайти добуток позитивних елементів.
// 10. Знайти найбільший серед елементів масиву, ост альні обнулити.

let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1 Task) 

let sumArray = 0,
    newArray = [],
    quantityArray = 0;

for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element > 0) {
        sumArray += element;

        newArray.push(element);
        quantityArray = newArray.length;
    }
}

console.log(`Задание 1) Сумма положительных элементов: ${sumArray}, их количество: ${quantityArray}`);


// 2 Task)

let minNum = 0,
    MinNumIndex = 0;

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    if (minNum > element){
        minNum = array[i];
        MinNumIndex = i;
    }
}

console.log(`Задание 2) минимальное число в массиве: ${minNum}, его номер: ${MinNumIndex}`);

// 3 Task)

let maxNum = 0,
    MaxNumIndex = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if (maxNum < element){
            maxNum = array[i];
            MaxNumIndex = i;
        }
    }

console.log(`Задание 3) максимальное число в массиве: ${maxNum}, его номер: ${MaxNumIndex}`);

// 4 Task

let quantityNegativeElement = 0,
    arrayNegativesElement = [];


for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    if (element < 0) {
        arrayNegativesElement.push(element);
        quantityNegativeElement = arrayNegativesElement.length;
    }
}

console.log(`Задание 4) количество отрицательных элементов в масиве: ${quantityNegativeElement}`);

// 5 Task

let quantityOddElemets = 0,
    oddElements = [];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    if ( element > 0 && (element % 2 === 1)) {
        oddElements.push(element);
        quantityOddElemets = oddElements.length;
    }
}

console.log(`Задание 5) количество нечетных положительных элементов в масиве: ${quantityOddElemets}`);

// 6 Task

let quantityEvenElemets = 0,
    evenElements = [];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    if ( element > 0 && (element % 2 === 0)) {
        evenElements.push(element);
        quantityEvenElemets = evenElements.length;
    }
}

console.log(`Задание 6) количество четных положительных элементов в масиве: ${quantityEvenElemets}`);

// 7 Task

let sumEvenElements = 0;

for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element > 0 && (element % 2 === 0)) {
        sumEvenElements += element;
    }
}

console.log(`Задание 7) сумма четных положительных элементов в масиве: ${sumEvenElements}`);

// 8 Task

let sumOddElements = 0;

for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element > 0 && (element % 2 === 1)) {
        sumOddElements += element;
    }
}

console.log(`Задание 8) сумма нечетных положительных элементов в масиве: ${sumOddElements}`);

// 9 Task

let productElement = 1;

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    if (element > 0) {
        productElement = productElement * element;
    }
}

console.log(`Задание 9) произведение положительных элементов в масиве: ${productElement}`);

// 10 Task

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    if ( element < maxNum) {
        array[i] = 0;
    } 
}

console.log(`Задание 10) самое большое число в масиве: ${maxNum}; масив обнулен: ${array}`);

