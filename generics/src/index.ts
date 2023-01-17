// type annotation
const nums: number[] = [];
// Generic
const nums2: Array<number> = [];


// type annotation
const colors: string[] = [];
// Generic
const colors2: Array<string> = [];

// const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// const btn = document.querySelector<HTMLButtonElement>(".btn")!;
// console.dir(inputEl)
// inputEl.value = "Hacked!"


// writing generics from scratch
// type annotations
function numIdentity(item: number):number {
    return item;
} 

function stringIdentity(item: string): string {
  return item;
} 

function booleanIdentity(item: boolean): boolean {
  return item;
}

function identity(item: any): any {
    return item;
}

// Generic - helps return any type without having to write seperate functions
function genericIdentity<T>(item: T): T {
    return item;
}

console.log(genericIdentity<number>(4));
// console.log(genericIdentity<string>("sup"));

// additional generic function for list/arrays
function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length)
    return list[randIdx];
}

console.log(getRandomElement<string>(["asdfasdf", "d", "tasdfas"]))
console.log(getRandomElement([1,2,3,4]))

// Generics with multiple types & adding type constraints
function merge<T extends Object ,U extends Object>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2
  }
}

const comboObj = merge({name: "Colt"}, {pets: ["blue", "steele"]})
console.log(merge({name: "test"}, {double: "test2"}))

interface Lengthy {
  length: number
}

function printDoubleLength<T extends Lengthy>(thing: T) {
  return thing.length * 2;
}

// Default Type parameters
function makeEmptyArray<T = number>(): T[] {
  return [];
}

const numss = makeEmptyArray();
const bools = makeEmptyArray<boolean>();