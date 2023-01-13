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
btn.addEventListener('click', (e) => {
    e.preventDefault();
})