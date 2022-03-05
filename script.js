const display = document.querySelector('.display');
display.textContent = '0';

let numberStore = '';

const numberClicks = document.querySelectorAll('.number');
numberClicks.forEach(numberClick => {
    numberClick.addEventListener('click', (e) => {
        if (numberStore.charAt(0) === '0') {
            numberStore = numberStore.substring(1);
        }
        numberStore += e.target.textContent;
        display.textContent = numberStore;
    });
})

const clear = document.querySelector('.button.clear');
clear.addEventListener('click', clearDisplay);

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === 'add') {
        return add(a, b);
    } else if (operator === 'subtract') {
        return subtract(a, b);
    } else if (operator === 'multiply') {
        return multiply(a, b);
    } else if (operator === 'divide') {
        return divide(a, b);
    }
}

function clearDisplay() {
    numberStore = '';
    display.textContent = '0';
}