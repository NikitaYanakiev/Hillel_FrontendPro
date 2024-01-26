let action = prompt('What do you want to do? (add, sub, mult, div)', '');
let firstNum = +prompt('First number', '');
let secondNum = +prompt('Second number', '');
let result = 0;

if (action === 'add') {
    result = firstNum + secondNum;
    alert(`${firstNum} + ${secondNum} = ${result}`);
} else if (action === 'sub') {
    result = firstNum - secondNum;
    alert(`${firstNum} - ${secondNum} = ${result}`);
} else if (action === 'mult') {
    result = firstNum * secondNum;
    alert(`${firstNum} * ${secondNum} = ${result}`);
}  else if (action === 'div') {
    result = firstNum / secondNum;
    alert(`${firstNum} / ${secondNum} = ${result}`);
} else {
    alert("You've made a mistake somewhere");
}
