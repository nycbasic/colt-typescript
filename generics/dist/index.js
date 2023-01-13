"use strict";
// type annotation
const nums = [];
// Generic
const nums2 = [];
// type annotation
const colors = [];
// Generic
const colors2 = [];
const inputEl = document.querySelector("#username");
const btn = document.querySelector(".btn");
console.dir(inputEl);
inputEl.value = "Hacked!";
btn.addEventListener('click', (e) => {
    e.preventDefault();
});
