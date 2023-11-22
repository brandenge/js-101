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

    do {
      this.prompt(numPrompt);
      num = parseFloat(rl.question());
      if (this.isInvalidNumber(num)) {
        this.prompt("Hmmm...that doesn't look like a valid number.");
      } else {
        break;
      }
    } while (true);
    return num;
  }

  getValidOperator() {
    const operatorPrompt = 'What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide:';
    let operator;

    do {
      this.prompt(operatorPrompt);
      operator = rl.question();
      if (this.isInvalidOperator(operator)) {
        this.prompt('Must choose 1, 2, 3, or 4.');
      } else {
        break;
      }
    } while (true);
    return operator;
  }

  isInvalidNumber(num) {
    return Number.isNaN(num);
  }

  isInvalidOperator(operatorChoice) {
    return !['1', '2', '3', '4'].includes(operatorChoice);
  }

  printResult(result) {
    this.prompt(`The result is: ${result}`);
  }
}

const app = new App();
app.start();
