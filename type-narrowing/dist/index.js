"use strict";
// Type Narrowing
function tripe(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
// Truthiness Guards
const el = document.getElementById("idk");
if (el) {
    el;
}
else {
    el;
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log("Invalid String");
    }
};
// Equality Narrowing
function someDemo(x, y) {
    if (x === y) {
        x.toUpperCase();
    }
}
function getRunTime(media) {
    if ("numEpisodes" in media) {
        const { numEpisodes, episodeDuration } = media;
        return numEpisodes * episodeDuration;
    }
    return media.duration;
}
// Instanceof Narrowing
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        entity;
    }
    entity;
}
