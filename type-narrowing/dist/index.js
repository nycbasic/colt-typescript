"use strict";
// Type Narrowing
function tripe(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
