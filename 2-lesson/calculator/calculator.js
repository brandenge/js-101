'use strict';

class Calculator {
  calculate(num1, num2, operator) {
    const operations = {
      '+': num1 + num2,
      '-': num1 - num2,
      '*': num1 * num2,
      '/': num1 / num2,
    };
    return operations[operator];
  }
}

export default Calculator;
