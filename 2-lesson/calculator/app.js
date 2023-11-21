'use strict';

const readline = require('readline-sync');
const Calculator = require('./calculator');

class App {
  start() {
    this.printWelcome();
    const [num1, num2, operator] = this.getUserOperandsAndOperator();
    const calculator = new Calculator();
    const result = calculator.calculate(num1, num2, operator);
    this.printResult(result);
  }

  printWelcome() {
    console.log('Welcome to Calculator!');
  }

  getUserOperandsAndOperator() {
    const num1 = parseFloat(readline.question("What's the first number? "));
    const num2 = parseFloat(readline.question("What's the second number? "));
    const operator = readline.question("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide: ");

    const operations = {
      1: '+',
      2: '-',
      3: '*',
      4: '/',
    };

    return [num1, num2, operations[operator]];
  }

  printResult(result) {
    console.log(`The result is: ${result}`);
  }
}

const app = new App();
app.start();
