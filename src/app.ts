function sumOrder(price: number, quantity: number): number {
    return price * quantity;
}

let sumOrder1: (price: number, quantity: number) => number;

sumOrder1 = (x,y) => x * y;

const sum = sumOrder1(5, 5);

console.log(`Total Sum: ${sum}`)