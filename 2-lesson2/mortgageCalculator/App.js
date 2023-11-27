'use strict';

const { getMortgageInfo, continueCalculation } = require('./UserInput');
const calcMonthlyPayment = require('./MortgageCalculator');

class App {
  start() {
    let anotherCalculation = true;
    while (anotherCalculation) {
      this.printWelcome();
      const [loanAmount, annualPercentageRate, loanDuration] =
        getMortgageInfo();
      const monthlyPayment =
        calcMonthlyPayment(loanAmount, annualPercentageRate, loanDuration);
      console.log(`Your monthly payment is: ${monthlyPayment}`);
      anotherCalculation = continueCalculation();
    }
  }

  printWelcome() {
    console.log('Welcome to the Mortgage Calculator!');
  }
}

const app = new App();
exports.start = app.start.bind(app);
