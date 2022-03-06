const display = document.querySelector('.display');
display.textContent = '0';

let result = 0;
let numberStore = '';
let currentOperator = 'add';
let operandA = 0;
const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (result !== 0) {
            numberStore = result;
        }

        if (numberStore != '') {
            operandA = operate(currentOperator, operandA, numberStore);
            display.textContent = operandA;
        }

        currentOperator = e.target.id;
        numberStore = '';
    });
})

const equals = document.querySelector('#equals');
equals.addEventListener('click', (e) => {

    if (numberStore != '') {
        operandA = operate(currentOperator, operandA, numberStore);
        result = operandA;
        display.textContent = result;
    }

    display.textContent = result;
    currentOperator = 'add'
    numberStore = '';
    operandA = 0;
});

const numberClicks = document.querySelectorAll('.number');
numberClicks.forEach(numberClick => {
    numberClick.addEventListener('click', (e) => {
        result = 0;
        if (numberStore.charAt(0) === '0') {
            numberStore = numberStore.substring(1);
        }
        numberStore += e.target.textContent;
        display.textContent = numberStore;
    });
})

const clear = document.querySelector('.button.clear');
clear.addEventListener('click', clearDisplay);

function add(operandA, numberStore) {
    operandA = Number(operandA) + Number(numberStore);
    return operandA;
}

function subtract(operandA, numberStore) {
    console.log(operandA);
    console.log(numberStore);
    operandA = Number(operandA) - Number(numberStore);
    return operandA;
}

function multiply(operandA, numberStore) {
    operandA = Number(operandA) * Number(numberStore);
    return operandA;
}

function divide(operandA, numberStore) {
    operandA = Number(operandA) / Number(numberStore);
    return operandA;
}

function operate(operator, operandA, numberStore) {
    if (operator === 'add') {
        return add(operandA, numberStore);
    } else if (operator === 'subtract') {
        return subtract(operandA, numberStore);
    } else if (operator === 'multiply') {
        return multiply(operandA, numberStore);
    } else if (operator === 'divide') {
        return divide(operandA, numberStore);
    }
}

function clearDisplay() {
    numberStore = '';
    display.textContent = '0';
    operandA = 0;
    currentOperator = 'add';
    result = 0;
}