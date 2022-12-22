// Union Types:
// Allows us to give a value a few different possible types.

let age: number | string = 21;
age = 23;
age = "24";

// Using two different types for Union's
type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

// Union Types and functions
const printAge = (age: number | string): void => {
  console.log(`you are ${age} years old`);
};

// Union: Type Narrowing for functions
const calTax = (price: number | string, tax: number) => {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
};
