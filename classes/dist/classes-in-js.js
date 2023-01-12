"use strict";

class Player {
  // class fields
  // Private fields = hash symbol
  #score = 0;
  numLives = 10;

  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  taunt() {
    console.log("BOOOOOYAA!");
  }

  loseLife() {
    this.numLives -= 1;
  }

  getScore() {
    return this.#score;
  }

  updateScore(newScore) {
    this.#score = newScore;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    if(newScore < 0) {
        throw new Error("Score must be greater than 0");
    }
    return this.#score = newScore
  }
}

const player1 = new Player("blue", "steele");
player1.taunt();
console.log(player1.first);
console.log(player1.last);

player1.loseLife();
console.log(player1.fullName);
console.log(player1.score)
player1.score = 324;

// const player2 = new Player("zoo", "lander");
// player2.taunt();
// console.log(player2.first);
// console.log(player2.last);
