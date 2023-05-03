let firstNumber = '';
let secondNumber = '';
let operator = '';
let displayValue = '0';

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
    } else if (operator === '*') {
        return multiply(a, b) ;
    } else if (operator === '/') {
        return divide(a, b);
    };
};

const display = document.querySelector('.display');

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clear')) {
            displayValue = '0';
        } else if (button.classList.contains('delete')) {
            displayValue = displayValue.slice(0, -1);
            if (displayValue === '') {
                displayValue = '0';
            };
        } else if (button.classList.contains('equal')) {
            if (operator && secondNumber) {
                displayValue = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber)).toString();
                firstNumber = displayValue;
                secondNumber = '';
                operator = '';
            };
        } else if (button.classList.contains('add') || button.classList.contains('subtract') || button.classList.contains('multiply') || button.classList.contains('divide')) {
            if (firstNumber && operator && secondNumber) {
                displayValue = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber)).toString();
                firstNumber = displayValue;
                secondNumber = '';
            };
            operator = button.textContent;
        } else {
            if (operator) {
                secondNumber += button.textContent;
                displayValue = secondNumber;
            } else {
                firstNumber += button.textContent;
                displayValue = firstNumber;
            };
        };
        display.innerHTML = displayValue;
    });
});
