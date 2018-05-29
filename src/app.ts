let pizzaSize: number = 1;

function selectSize(size: 1 | 2 | 3): void {
    pizzaSize = size;
}

selectSize(2);

console.log(`Pizza Size: ${pizzaSize}`);