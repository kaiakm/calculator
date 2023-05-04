let firstNumber = null;
let operator = null;
let displayValue = '';

const formerNumber = document.querySelector('.former-number');
const currentNumber = document.querySelector('.current-number');
const numberBtns = document.querySelectorAll('.number');
const operateBtns = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    if (operator === '+') {
        return a + b;
    } else if (operator === '-') {
        return a - b;
    } else if (operator === 'x') {
        return a * b;
    } else if (operator === '/') {
        if (b === 0) {
            return 'error';
        } else {
            const result = a / b;
            return result % 1 !== 0 ? result.toFixed(5) : result;
        }
    }
};

numberBtns.forEach(function(numberBtn) {
    numberBtn.addEventListener('click', function() {
        const number = numberBtn.textContent;
        displayValue += number;
        currentNumber.textContent = displayValue;
    });
});

operateBtns.forEach(function(operateBtn) {
    operateBtn.addEventListener('click', function() {
        if (firstNumber === null) {
            firstNumber = Number(displayValue);
        } else {
            const secondNumber = Number(displayValue);
            const result = operate(operator, firstNumber, secondNumber);
            currentNumber.textContent = result;
        };
        operator = operateBtn.textContent;
        displayValue = '';
        formerNumber.textContent = `${firstNumber} ${operator}`;
    });
});
    
document.querySelector('.equals').addEventListener('click', function() {
    if (firstNumber !== null && operator !== null) {
        const secondNumber = Number(displayValue);
        const result = operate(operator, firstNumber, secondNumber);
        currentNumber.textContent = result;
        formerNumber.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
        firstNumber = result;
        operator = null;
        displayValue = '';
    };
});

clearBtn.addEventListener('click', function() {
    firstNumber = null;
    operator = null;
    displayValue = '';
    formerNumber.textContent = '';
    currentNumber.textContent = '0';
});

deleteBtn.addEventListener('click', function() {
    displayValue = displayValue.slice(0, -1);
    currentNumber.textContent = displayValue;
});