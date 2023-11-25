'use strict';

import { question } from 'readline-sync';
import { execSync } from 'child_process';

class UserInput {
  prompt(message) {
    return `=> ${message}`;
  }

  clearPrompt() {
    try {
      const result = execSync('clear', { encoding: 'utf-8' });
      console.log(result);
    } catch (error) {
      console.error(`Error executing command: ${error.message}`);
    }
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
      num = parseFloat(question(this.prompt(numPrompt)));
      if (this.isValidNumber(num)) break;
      this.clearPrompt();
      console.log(this.prompt("Hmmm...that doesn't look like a valid number."));
    }
    return num;
  }

  getValidOperator() {
    const operatorPrompt = 'What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide: ';
    let operator;

    while (true) {
      operator = question(this.prompt(operatorPrompt));
      if (this.isValidOperator(operator)) break;
      this.clearPrompt();
      console.log(this.prompt('Please enter 1, 2, 3, or 4.'));
    }
    return operator;
  }

  isValidNumber(num) {
    return !Number.isNaN(num);
  }

  isValidOperator(operatorChoice) {
    return ['1', '2', '3', '4'].includes(operatorChoice);
  }

  continueCalculation() {
    const continuePrompt = 'Do you want to perform another calculation? (y/n): ';
    let wantsToContinue = false;

    while (true) {
      wantsToContinue = question(this.prompt(continuePrompt)).toLowerCase();
      if (this.isValidYesOrNo(wantsToContinue)) return wantsToContinue === 'y';
      this.clearPrompt();
      console.log(this.prompt("Please enter y or n."));
    }
  }

  isValidYesOrNo(response) {
    return response === 'y' || response === 'n';
  }
}

const userInput = new UserInput();
const getUserOperandsAndOperator =
  userInput.getUserOperandsAndOperator.bind(userInput);
const continueCalculation = userInput.continueCalculation.bind(userInput);
export { getUserOperandsAndOperator, continueCalculation };
