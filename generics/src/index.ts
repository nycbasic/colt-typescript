// type annotation
const nums: number[] = [];
// Generic
const nums2: Array<number> = [];


// type annotation
const colors: string[] = [];
// Generic
const colors2: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
const btn = document.querySelector<HTMLButtonElement>(".btn")!;
console.dir(inputEl)
inputEl.value = "Hacked!"


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