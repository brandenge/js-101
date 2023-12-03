'use strict';

class Game {
  static choices = ['rock', 'paper', 'scissors'];

  static losesTo = {
    rock: ['paper', 'spock'],
    paper: ['scissors', 'lizard'],
    scissors: ['rock', 'spock'],
    lizard: ['rock', 'scissors'],
    spock: ['paper', 'lizard']
  };

  static getWinner(player1, player2) {
    if (this.losesTo[player1].includes(player2)) return player2;
    else return player1;
  }

  static randomChoice() {
    const randomIndex = Math.floor(Math.random() * this.choices.length);
    return this.choices[randomIndex];
  }
}

exports.choices = Game.choices;
exports.randomChoice = Game.randomChoice.bind(Game);
exports.getWinner = Game.getWinner.bind(Game);
