// Type Narrowing
function tripe(value: number | string) {
    if(typeof value === "string") {
        return value.repeat(3)
    }
    return value * 3;
}

// Truthiness Guards
const el = document.getElementById("idk")
if(el) {
    el;
} else {
    el
}

const printLetters = (word?: string) => {
    if(word) {
        for(let char of word){
            console.log(char)
        }
    } else {
        console.log("Invalid String")
    }
}

// Equality Narrowing
function someDemo(x:string | number, y: string|boolean) {
    if(x === y) {
        x.toUpperCase();
    }
}

// Narrowing with The "in" operator
interface Movie{
    title: string
    duration: number
}

interface TVshow {
    title: string
    numEpisodes: number
    episodeDuration: number
}


function getRunTime(media: Movie | TVshow) {
    if("numEpisodes" in media) {
        const {numEpisodes, episodeDuration} = media;
        return numEpisodes * episodeDuration;
    }
    return media.duration;
}

// Instanceof Narrowing
function printFullDate(date: string | Date) {
    if(date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString());
    }
}

class User {
    constructor(public username: string) {
    }
}

class Company {
    constructor(public name: string) {}
}

function printName(entity: User | Company) {
    if(entity instanceof User) {
        entity
    }
    entity
}