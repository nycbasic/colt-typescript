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

someDemo("3", 3);