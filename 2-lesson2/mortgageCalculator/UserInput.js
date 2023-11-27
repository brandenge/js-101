'use strict';

const { question } = require('readline-sync');

class UserInput {
  getMortageInfo() {
    const loanAmount = this.getLoanAmount();
    const annualPercentageRate = this.getAnnualPercentageRate();
    const loanDuration = this.getLoanDuration();
    return [loanAmount, annualPercentageRate, loanDuration];
  }

  getLoanAmount() {
    while (true) {
      const loanAmount = parseInt(question('What is the loan amount? '), 10);
      if (this.isValidLoanAmount(loanAmount)) return loanAmount;
      console.log('Please enter a positive integer.');
    }
  }

  isValidLoanAmount(loanAmount) {
    return !Number.isNaN(loanAmount) && loanAmount > 0;
  }

  getAnnualPercentageRate() {
    const prompt = 'What is the annual percentage rate? For example, enter 5.5 for 5.5%: ';
    while (true) {
      const annualPercentageRate = parseFloat(question(prompt)) / 100;
      if (this.isValidAnnualPercentageRate(annualPercentageRate)) {
        return annualPercentageRate;
      }
      console.log('Please enter a non-negative number');
    }
  }

  isValidAnnualPercentageRate(annualPercentageRate) {
    return !Number.isNaN(annualPercentageRate) && annualPercentageRate >= 0;
  }

  getLoanDuration() {
    while (true) {
      const loanDuration =
        parseInt(question('What is the loan duration in months? '), 10);
      if (this.isValidLoanDuration(loanDuration)) return loanDuration;
      console.log('Please enter a positive integer.');
    }
  }

  isValidLoanDuration(loanDuration) {
    return !Number.isNaN(loanDuration) && loanDuration > 0;
  }

  continueCalculation() {
    const continuePrompt =
      'Do you want to perform another mortgage calculation? ';
    let wantsToContinue = false;
    while (true) {
      wantsToContinue = question(continuePrompt).toLowerCase();
      if (this.isValidYesOrNo(wantsToContinue)) return wantsToContinue === 'y';
      const invalidPrompt = 'Please enter y for yes or n for no.';
      console.log(invalidPrompt);
    }
  }

  isValidYesOrNo(response) {
    return response === 'y' || response === 'n';
  }
}

const userInput = new UserInput();
const getMortgageInfo = userInput.getMortageInfo.bind(userInput);
const continueCalculation = userInput.continueCalculation.bind(userInput);

exports.getMortgageInfo = getMortgageInfo;
exports.continueCalculation = continueCalculation;
