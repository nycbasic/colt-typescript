// Type Narrowing
function tripe(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

// Truthiness Guards
const el = document.getElementById("idk");
if (el) {
  el;
} else {
  el;
}

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("Invalid String");
  }
};

// Equality Narrowing
function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
  }
}

// Narrowing with The "in" operator
interface Movie {
  title: string;
  duration: number;
}

interface TVshow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRunTime(media: Movie | TVshow) {
  if ("numEpisodes" in media) {
    const { numEpisodes, episodeDuration } = media;
    return numEpisodes * episodeDuration;
  }
  return media.duration;
}

// Instanceof Narrowing
function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    entity;
  }
  entity;
}

// Type Predicates
interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal;
    return "Meow";
  } else {
    return "Bark";
  }
}

// Discriminated Unions
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster"; // Setting to a literal type in an interface
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

// function getFarmAnimalSound(animal: FarmAnimal) {
//   switch (animal.kind) {
//     case "pig":
//       return "Oink!";
//     case "cow":
//       return "Mooo!";
//     case "rooster":
//       return "Caccaaadoodleddoooo!!";
//   }
// }

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};

// Exhaustiveness Checks with Never
function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Mooo!";
    case "rooster":
      return "Caccaaadoodleddoooo!!";
    case "sheep":
      return "baaaa!";
    default:
      // We should never make it here if we handled all cases
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}
