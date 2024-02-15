function doMath (x, znak, y) {
    let result = 0;

    if (znak === '+') {
        result = x + y;
    } else if (znak === '-') {
        result = x - y;
    } else if (znak === '*') {
        result = x * y;
    } else if (znak === '/') {
        result = x / y;
    } else if (znak === '%') {
        result = x % y;
    } else if (znak === '^') {
        result = x ** y;
    } else {
       return alert("You've made a mistake somewhere");
    }

    return alert(`${x} ${znak} ${y} = ${result}`);
}

let x = +prompt('Enter first number', '');
let znak = prompt('Enter Math sign', '');
let y = +prompt('Enter second number', '');

doMath(x, znak, y);