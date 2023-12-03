'use strict';

const { getPlayerChoice, continueGame } = require('./UserInput');
const { randomChoice, getWinner } = require('./Game');

const { execSync } = require('child_process');

class App {
  start() {
    let anotherGame = true;
    while (anotherGame) {
      this.clearPrompt();
      this.prompt('Welcome to Rock Paper Scissors Lizard Spock!');
      const playerChoice = getPlayerChoice();
      const computerChoice = randomChoice();
      this.printChoices(playerChoice, computerChoice);
      this.printWinner(playerChoice, computerChoice);
      anotherGame = continueGame();
    }
    this.prompt('Goodbye!');
  }

  clearPrompt() {
    try {
      const result = execSync('clear', { encoding: 'utf-8' });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  prompt(message) {
    console.log(`=> ${message}`);
  }

  printChoices(playerChoice, computerChoice) {
    const prompt =
      `You chose ${playerChoice}, the computer chose ${computerChoice}`;
    this.prompt(prompt);
  }

  printWinner(playerChoice, computerChoice) {
    const winner = getWinner(playerChoice, computerChoice);
    if (playerChoice === computerChoice) this.prompt("It's a tie.");
    else if (playerChoice === winner) this.prompt('You win!');
    else this.prompt('The computer wins!');
  }
}

const app = new App();
exports.start = app.start.bind(app);
