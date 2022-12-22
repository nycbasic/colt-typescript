// Type annotation for functions
function square(num: number) {
  return num * num;
}

function greet(person: string) {
  return `Hi there, ${person}`;
}

function doSomething(person: string, age: number, isFunny: boolean) {
  return;
}

// Default Type Values for function parameters
function greet2(person: string = "stranger") {
  return `Hi there, ${person}`;
}

// Return Type Annnotations
function square2(num: number): number {
  return num * num;
}

// return void
function test(str: string) {
    console.log(str)
}

// Can return number or string
function rando(num: number) {
    if(Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

// Contextual Typing
const colors = ["red", "orange", "yellow"];
colors.map(color => {
    // color: string
})


// Never Type
function makeError(msg: string): never {
    throw new Error(msg);
}

function gameLoop(): never {
    while(true) {
        console.log("GAME LOOP RUNNING")
    }
}