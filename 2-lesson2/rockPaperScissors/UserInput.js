'use strict';

const { question } = require('readline-sync');
const { choices } = require('./Game');

class UserInput {
  static prompt(message) {
    console.log(`=> ${message}`);
  }

  static getPlayerChoice() {
    while (true) {
      this.prompt(`Choose one: ${choices.join(', ')}`);
      const choice = question().toLowerCase();
      if (this.isValidChoice(choice)) return choice;
      this.prompt('Please select a valid choice.');
    }
  }

  static isValidChoice(choice) {
    return choices.includes(choice);
  }

  static continueGame() {
    let wantsToContinue = false;
    while (true) {
      this.prompt('Do you want to play another game (y/n)?');
      wantsToContinue = question().toLowerCase();
      if (this.isValidYesOrNo(wantsToContinue)) return wantsToContinue === 'y';
      this.prompt('Please enter y for yes or n for no.');
    }
  }

  static isValidYesOrNo(response) {
    return response === 'y' || response === 'n';
  }
}

exports.getPlayerChoice = UserInput.getPlayerChoice.bind(UserInput);
exports.continueGame = UserInput.continueGame.bind(UserInput);
