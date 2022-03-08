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
            if (operandA.length > 3) {
                operandA.substring(3);
            }
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
        if (e.target.textContent === '.' && numberStore.includes('.')) return;

        if (numberStore.charAt(0) === '0') {
            numberStore = numberStore.substring(1);
        }
        numberStore += e.target.textContent;
        display.textContent = numberStore;
    });
})

const clear = document.querySelector('.button.clear');
clear.addEventListener('click', clearDisplay);

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', () => {

    numberStore = numberStore.substring(0, numberStore.length - 1)
    display.textContent = numberStore || 0;
});

function add(operandA, numberStore) {
    operandA = Math.round((Number(operandA) + Number(numberStore)) * 10000000000000) / 10000000000000;
    return operandA;
}

function subtract(operandA, numberStore) {
    operandA = Math.round((Number(operandA) - Number(numberStore)) * 10000000000000) / 10000000000000;
    return operandA;
}

function multiply(operandA, numberStore) {
    operandA = Math.round((Number(operandA) * Number(numberStore)) * 10000000000000) / 10000000000000;
    return operandA;
}

function divide(operandA, numberStore) {
    if (numberStore == 0) {
        return "hey wtf";
    } else {
        operandA = Math.round((Number(operandA) / Number(numberStore)) * 10000000000000) / 10000000000000;
        return operandA;
    }
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
//add keyboard support