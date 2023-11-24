'use strict';

import rl from 'readline-sync';
import Calculator from './Calculator.js';

class App {
  start() {
    this.printWelcome();
    const [num1, num2, operator] = this.getUserOperandsAndOperator();
    const calculator = new Calculator();
    const result = calculator.calculate(num1, num2, operator);
    this.printResult(result);
  }

  prompt(message) {
    console.log(`=> ${message}`);
  }

  printWelcome() {
    this.prompt('Welcome to Calculator!');
  }

  getUserOperandsAndOperator() {
    const num1 = this.getValidNumber(1);
    const num2 = this.getValidNumber(2);
    const operator = this.getValidOperator();
    const operations = {
      1: '+',
      2: '-',
      3: '*',
      4: '/',
    };
    return [num1, num2, operations[operator]];
  }

  getValidNumber(orderNum) {
    const orderWords = {
      1: 'first',
      2: 'second',
    };
    const order = orderWords[orderNum];
    const numPrompt = `What is the ${order} number? `;
    let num;

    while (true) {
      this.prompt(numPrompt);
      num = parseFloat(rl.question());
      if (this.isValidNumber(num)) break;
      this.prompt("Hmmm...that doesn't look like a valid number.");
    }
    return num;
  }

  getValidOperator() {
    const operatorPrompt = 'What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide:';
    let operator;

    while (true) {
      this.prompt(operatorPrompt);
      operator = rl.question();
      if (this.isValidOperator(operator)) break;
      this.prompt('Must choose 1, 2, 3, or 4.');
    }
    return operator;
  }

  isValidNumber(num) {
    return !Number.isNaN(num);
  }

  isValidOperator(operatorChoice) {
    return ['1', '2', '3', '4'].includes(operatorChoice);
  }

  printResult(result) {
    this.prompt(`The result is: ${result}`);
  }
}

export default App;
