"use strict";
class Player {
    constructor(first, last) {
        // class fields in TS is as is and does not need a type annotation
        this.score = 0;
        this.first = first;
        this.last = last;
        this.secretMethod();
    }
    secretMethod() {
        console.log("secret method!");
    }
}
const elton = new Player("Elton", "Steele");
elton.secretMethod();
