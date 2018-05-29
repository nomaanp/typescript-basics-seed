let sumOrder1: (price: number, quantity?: number) => number;

sumOrder1 = (x,y) => x * y;

const sum = sumOrder1(25);

console.log(`Total Sum: ${sum}`)