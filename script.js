let firstNumber = '';
let secondNumber = '';
let operator = '';
let displayValue = '';
const display = document.querySelector('.display');
const numberBtns = document.querySelectorAll('.number');
const operateBtns = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b === 0) {
        return 'error';
    } else {
        return a / b;
    };
};

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === 'x') {
        return multiply(a, b) ;
    } else if (operator === '/') {
        return divide(a, b);
    };
};

numberBtns.forEach(function(numberBtn) {
    numberBtn.addEventListener('click', function() {
        const number = numberBtn.textContent;
        displayValue += number;
        display.textContent = displayValue;
    });
});

function updateDisplay(number) {
    displayValue += number;
    document.querySelector('.display').textContent = displayValue;
};