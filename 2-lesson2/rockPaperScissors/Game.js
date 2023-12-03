'use strict';

class Game {
  static CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  static LOSES_TO = {
    rock: ['paper', 'spock'],
    paper: ['scissors', 'lizard'],
    scissors: ['rock', 'spock'],
    lizard: ['rock', 'scissors'],
    spock: ['paper', 'lizard']
  };

  static getWinner(player1, player2) {
    if (this.LOSES_TO[player1].includes(player2)) return player2;
    else return player1;
  }

  static randomChoice() {
    const randomIndex = Math.floor(Math.random() * this.CHOICES.length);
    return this.CHOICES[randomIndex];
  }
}

exports.CHOICES = Game.CHOICES;
exports.randomChoice = Game.randomChoice.bind(Game);
exports.getWinner = Game.getWinner.bind(Game);
