let lengthArray = +prompt('Enter the number of elements in the MAIN array', '');

function createDoubleArray (length) {
    let arr = [];

    for (let i = 0; i < length; i++) {
        let subArr = [];
        arr.push(subArr);
    }

    return arr;
}

const mainArray = createDoubleArray(lengthArray);

function fillingArray (array) {
    for (let i = 0; i < array.length; i++) {
        const el = array[i];
        let elementsArray = +prompt(`Enter the number of elements in the array #${i + 1}`, '');

        for (let j = 0; j < elementsArray; j++) {

            let element = prompt(`Enter elemnt #${j + 1} of ${i + 1} array`, '');
            el.push(element);
        }
    }
}

fillingArray(mainArray);

console.log(mainArray);