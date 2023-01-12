class Player {
  // class fields in TS is as is and does not need a type annotation
  // private score = 0;
  constructor(
    public first: string,
    public last: string,
    private score: number
  ) {
    this.secretMethod();
  }

  private secretMethod(): void {
    console.log("secret method!");
  }
}

const elton = new Player("Elton", "Steele");
elton.secretMethod();
