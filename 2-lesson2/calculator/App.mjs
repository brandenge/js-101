'use strict';

import UserInput from './UserInput.mjs';
import calculate from './Calculator.mjs';

// Current workaround for importing JSON files with ES modules
// Reading the JSON file directly
import { readFile } from 'fs/promises';
const PROMPTS = JSON.parse(
  await readFile(
    new URL('./prompts.json', import.meta.url)
  )
);

// Experimental syntax
// import PROMPTS from './prompts.json' assert { type: 'json' };

// Experimental syntax
// const PROMPTS = await import('./prompts.json', {
//   assert: { type: 'json' },
// });

class App {
  constructor() {
    this.lang = 'en';
    this.userInput = new UserInput(this.lang);
  }

  start() {
    let anotherCalculation = true;
    while (anotherCalculation) {
      this.printWelcome();
      const [num1, num2, operator] =
        this.userInput.getUserOperandsAndOperator();
      const result = calculate(num1, num2, operator);
      this.printResult(result);
      anotherCalculation = this.userInput.continueCalculation();
    }
  }

  prompt(message) {
    console.log(`=> ${message}`);
  }

  printWelcome() {
    this.prompt(PROMPTS[this.lang]['welcome']);
  }

  printResult(result) {
    this.prompt(`${PROMPTS[this.lang]['result']}${result}`);
  }
}

const app = new App();
export default app.start.bind(app);
