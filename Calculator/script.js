let expression = '';
let result = document.getElementById('result');

function insertDigit(digit) {
  expression += digit;
  result.value = expression;
}

function insertOperator(operator) {
  expression += operator;
  result.value = expression;
}

function insertDecimal() {
  if (!expression.includes('.')) {
    expression += '.';
    result.value = expression;
  }
}

function clearDisplay() {
  expression = '';
  result.value = expression;
}

function deleteDigit() {
  expression = expression.slice(0, -1);
  result.value = expression;
}

function calculate() {
  try {
    const value = eval(expression);
    result.value = value;
    expression = value.toString();
  } catch (error) {
    result.value = 'Error';
    expression = '';
  }
}