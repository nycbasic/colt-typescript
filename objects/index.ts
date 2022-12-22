// function printName(person: {first: string, last: string}) {
//     console.log(`${person.first} ${person.last}`)
// }

// printName({first: "john", last: "wayne"})

// let coordinate: {x: number, y: number} = {x: 34, y: 2};

// function randomCoordinate(): {x: number, y: number} {
//     return {x: Math.random(), y: Math.random()};
// }

// Object Parameters
// cannot add addition properties directly unless specificied by the function.
// printName({first: "Mick", last: "Jagger", age: 23})

// works when passing in object parameters from a variable
// const singer = {first: "Mick", last: "jagger", age: 47, isAlive: true}
// printName(singer);

// Type Alias
type Point = {
  x: number;
  y: number;
};

let coordinate: Point = {
  x: 34,
  y: 2,
};

function doublePoint(point: Point): Point {
  const { x, y } = point;
  return { x, y };
}

// Nested Objests: Type Alias

// type alias
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credit: {
    producer: string;
    writer: string;
  };
};

// Type Alias used for functions
function calPayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  return console.log(`${song.title} - ${song.artist}`);
}

// Type alias used for object literals
const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righeous Brothers",
  numStreams: 84503485,
  credit: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};


// Optional properties
type Point2 = {
    x: number,
    y: number,
    z?: number
}

const myPoint: Point2 = {x: 1, y: 3 };

// Read Only Modifier
type User = {
    readonly id: number,
    username: string
}

const user: User = {
    id: 48528524834,
    username: "Catgurl"
}

// Intersection Type Alias
type Circle = {
    radius: number
}

type Colorful = {
    color: string
}

type ColorfulCircle = Circle & Colorful;

const happyface: ColorfulCircle = {
    radius: 4,
    color: "yellow"
}

// Adding Additional Intersections

type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

type CatDog = Cat & Dog & {
    age: number
}

const christy: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 9
}
