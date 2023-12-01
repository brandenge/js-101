'use strict';

class MortgageCalculator {
  calcMonthlyPayment(loanAmount, annualPercentageRate, loanYears) {
    const loanMonths = loanYears * 12;
    const monthlyInterestRate = annualPercentageRate / 12;
    const monthlyPayment =
      (loanAmount * (monthlyInterestRate /
      (1 - ((monthlyInterestRate + 1) ** -loanMonths))));
    return monthlyPayment;
  }
}

exports.calcMonthlyPayment = new MortgageCalculator().calcMonthlyPayment;
