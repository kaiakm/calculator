let firstNumber = null;
let operator = null;
let displayValue = '';

const formerNumber = document.querySelector('.former-number');
const currentNumber = document.querySelector('.current-number');
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
    a = Number(a);
    b = Number(b);
    if (operator === '+') {
      return (a + b).toFixed(5);
    } else if (operator === '-') {
      return (a - b).toFixed(5);
    } else if (operator === 'x') {
      return (a * b).toFixed(5);
    } else if (operator === '/') {
      if (b === 0) {
        return 'error';
      } else {
        return (a / b).toFixed(5);
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
})