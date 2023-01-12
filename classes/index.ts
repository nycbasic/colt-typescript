class Player {
  // class fields in TS is as is and does not need a type annotation
  // private score = 0;
  constructor(
    public first: string,
    public last: string,
    private _score: number
  ) {
    this.secretMethod();
  }

  private secretMethod(): void {
    console.log("secret method!");
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if(newScore < 0) {
      throw new Error("Score cannot be negative")
    }
    this._score = newScore;
  }
}

const elton = new Player("Elton", "Steele", 4);
elton.secretMethod();
