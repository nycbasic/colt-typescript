"use strict";
class Player {
    // class fields in TS is as is and does not need a type annotation
    // private score = 0;
    constructor(first, last, 
    // private _score: number // private only stays within the class and does not extend or inherits
    _score // protected passes to child classes with extends and pass inhertitance
    ) {
        this.first = first;
        this.last = last;
        this._score = _score;
        this.secretMethod();
    }
    secretMethod() {
        console.log("secret method!");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999999;
    }
}
const elton = new Player("Elton", "Steele", 4);
elton.secretMethod();
