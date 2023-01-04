// Tuples
// Are arrays of fixed lengths and ordered with specific types - like super rigid arrays.

// Basic Tuple
const color: [number, number, number] = [255, 0, 255];

type HttpResponse = [number, string];
const goodRes: HttpResponse = [200, "OK"];



// Enums
// Allows us to define a set of named constants
// We can give these constants numeric or string values

enum OrderStatus {
    PENDING = 10,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
}

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}