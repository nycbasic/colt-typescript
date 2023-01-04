// Interfaces
// Serves almost the exact same purpose as type alias with a slightly different syntax
// We can use them to create reusable, modular types that describe the shape of objects

interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 34, y: 45 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  // sayHi: () => string
  sayHi(): string;
}

const thomas: Person = {
  id: 834508250,
  first: "Thomas",
  last: "Hardy",
  nickname: "",
  sayHi() {
    return "Hello!";
  },
};

interface Products {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Products = {
  name: "blue suede shoes",
  price: 100,
  applyDiscount(discount: number) {
    const newPrice = this.price * (1 - discount);
    this.price = newPrice;
    return this.price;
  },
};

// console.log(shoes.applyDiscount(0.4));

// Adding new properties: Re-opening
interface Dog {
  name: string,
  age: number
}

// Re-opening: Unique to Interfaces
interface Dog {
  breed: string,
  bark(): string
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "Woof Woof!"
  }
}

// Extending interfaces
