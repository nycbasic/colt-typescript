// Type annotation
let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 0;

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "Zero"

let gameOver: boolean = true;
gameOver = false;
// boolean = "false";



// Type Inference
let movieTitle = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 0;

let numCatLives = 9;
numCatLives += 1;
// numCatLives = "Zero"

let gameOver = true;
gameOver = false;
// boolean = "false";


// Any
let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();

// Delayed Initialization & Implicit Any
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];

let foundMovie: string;

for(let movie of movies) {
    if(movie === "Amadeus") foundMovie = "Amadeus";
}

