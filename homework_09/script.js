let arr = [];

let length = +prompt('Enter length of array', '');

if (length) {
    for (let i = 1; i <= length; i++) {
        let el = prompt(`Enter element #${i}`);
        arr.push(el);
    }
    document.write(`<p>${arr}</p> <br>`);

    arr.sort();

    document.write(`<p>${arr}</p> <br>`);

    arr.splice(1, 3);

    document.write(`<p>${arr}</p> <br>`);

} else {
    alert('Its not a number, try again');
}

