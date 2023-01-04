// Part 1
// Create an empty array of numbers called ages
const ages: number[] = [12, 14, 17, 21, 23];

// Part 2
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [];
gameBoard.push(["x", "o", "x"]);
gameBoard.push(["x", "o", "x"]);
gameBoard.push(["x", "o", "x"]);

console.log(gameBoard);

// Part 3
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
  name: string;
  price: number;
};

// Part 4
// Write a function called getTotal that accepts an array of Product Types
// It should return the sum of all the products prices

const getTotal = (products: Product[]): number => {
  let total = 0;
  for (let item of products) {
    total += item.price;
  }
  return total;
};

console.log(
  getTotal([
    { name: "coffee mug", price: 12.5 },
    { name: "water bottle", price: 29.5 },
    { name: "book bag", price: 199.5 },
  ])
);
