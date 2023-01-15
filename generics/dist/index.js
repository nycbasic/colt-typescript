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
// writing generics from scratch
// type annotations
function numIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
// Generic - helps return any type without having to write seperate functions
function genericIdentity(item) {
    return item;
}
console.log(genericIdentity(4));
// console.log(genericIdentity<string>("sup"));
// additional generic function for list/arrays
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(["asdfasdf", "d", "tasdfas"]));
console.log(getRandomElement([1, 2, 3, 4]));
