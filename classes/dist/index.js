"use strict";
class Player {
    // class fields in TS is as is and does not need a type annotation
    // private score = 0;
    constructor(first, last, score) {
        this.first = first;
        this.last = last;
        this.score = score;
        this.secretMethod();
    }
    secretMethod() {
        console.log("secret method!");
    }
}
const elton = new Player("Elton", "Steele");
elton.secretMethod();
