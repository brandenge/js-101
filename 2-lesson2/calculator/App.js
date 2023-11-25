'use strict';

import { getUserOperandsAndOperator, continueCalculation } from './UserInput.js';
import calculate from './Calculator.js';

class App {
  start() {
    let anotherCalculation = true;
    while (anotherCalculation) {
      this.printWelcome();
      const [num1, num2, operator] = getUserOperandsAndOperator();
      const result = calculate(num1, num2, operator);
      this.printResult(result);
      anotherCalculation = continueCalculation();
    }
  }

  prompt(message) {
    console.log(`=> ${message}`);
  }

  printWelcome() {
    this.prompt('Welcome to Calculator!');
  }

  printResult(result) {
    this.prompt(`The result is: ${result}`);
  }
}

const app = new App();
export default app.start.bind(app);
