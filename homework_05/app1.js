// 1. Даны два различных числа. Определить какое из них больше, а какое меньше.
let a = +prompt('Write the first number', '');
let b = +prompt('Write the second number', '');

if (a > b) {
    alert(`${a} more than ${b}`);   
} else if (a < b) {
    alert(`${b} more than ${a}`);   
} else {
    alert('numbers are equal');   
}