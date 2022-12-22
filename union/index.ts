// Union Types:
// Allows us to give a value a few different possible types.

let age: number | string = 21;
age = 23;
age = "24";

// Using two different types for Union's
type Point = {
    x: number,
    y: number,
}

type Loc = {
    lat: number,
    long: number
}

let coordinates: Point | Loc