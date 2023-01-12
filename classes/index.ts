class Player {
  public readonly first: string;
  public readonly last: string;
// class fields in TS is as is and does not need a type annotation
  private score = 0;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    this.secretMethod();
  }

  private secretMethod():void {
    console.log("secret method!")
  }
}

const elton = new Player("Elton", "Steele");
elton.secretMethod()