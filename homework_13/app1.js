const arr = [10, 'word', true, 22, [], 'next word', 30, {}, 44];

function calculateArithmeticAverage (array) {
    let sum = 0,
        amount = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (typeof element === 'number') {
            sum += element;
            amount++;
        }
    }
    let result = sum / amount;
    return result;
}

console.log(calculateArithmeticAverage(arr));