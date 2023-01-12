"use strict";
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color}, ${this.brand}`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
// class Player {
//   // class fields in TS is as is and does not need a type annotation
//   // private score = 0;
//   constructor(
//     public first: string,
//     public last: string,
//     // private _score: number // private only stays within the class and does not extend or inherits
//     protected _score: number // protected passes to child classes with extends and pass inhertitance
//   ) {
//     this.secretMethod();
//   }
//   private secretMethod(): void {
//     console.log("secret method!");
//   }
//   get fullName() {
//     return `${this.first} ${this.last}`;
//   }
//   get score(): number {
//     return this._score;
//   }
//   set score(newScore: number) {
//     if(newScore < 0) {
//       throw new Error("Score cannot be negative")
//     }
//     this._score = newScore;
//   }
// }
// class SuperPlayer extends Player {
//   public isAdmin: boolean = true;
//   maxScore() {
//     this._score = 999999
//   }
// }
// const elton = new Player("Elton", "Steele", 4);
// elton.secretMethod();
