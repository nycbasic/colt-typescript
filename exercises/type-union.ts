// Part 1
// Create a variable called highScore that can be a number OR a boolean
let highScore: number | boolean;

// Part 2
// Create an array called stuff
// It can be an array of numbers or an array of strings
// It cannot be an array of numbers and strings(mixed together)
const stuff: number[] | string[] = [];

// Part 3
// Create an array called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced" and "Expert"
type Levels = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// Part 4
// Create a type called SkiSchoolStudent
// Name must be a string
// Age must be a number
// Sport must be "Ski" or "Snowboard"
// level must be a value from SkillLevel type
type Sport = "Ski" | "Snowboard";
type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: Sport;
  level: Levels;
};

const student: SkiSchoolStudent = {
  name: "Joe",
  age: 17,
  sport: "Snowboard",
  level: "Beginner",
};

// Part 5
// Define a type to represent a RGB color
// r,g,b should be a number
type rgb = {
  r: number;
  g: number;
  b: number;
};

// Define a type to represent a HSL color
// h,s,l should be a number
type hsl = {
  h: number;
  s: number;
  l: number;
};

// Create an array called colors that can hold a mixture of RGB and HSL color types
const colors: (rgb | hsl)[] = [];
colors.push({ r: 1, g: 2, b: 3 });
colors.push({ h: 1, s: 2, l: 3 });

// Part 6
// Write a function called greet that accepts a single string or an array of strings
// It should print "Hello, <name>!" for that single person or greet each poerson in the array with the same format;

const greet = (person: string | string[]): void => {
  if (typeof person !== "string") {
    for (let name of person) {
      console.log(`Hello ${name}!`);
    }
  } else {
    console.log(`Hello ${person}!`);
  }
};

greet("Sam");
greet(["Sam", "John", "Joe", "Cassie"]);
