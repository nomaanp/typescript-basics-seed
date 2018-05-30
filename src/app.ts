abstract class Sizes {
    constructor(public sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes() {
        return this.sizes;
    }
}

new Sizes(['small']);

/*const sizes = new Sizes(['small', 'medium']);

// invoke setter
sizes.availableSizes = ['medium', 'large'];

// invoke getter
console.log(sizes.availableSizes);*/

class Pizza extends Sizes {
    public toppings: string[] = [];

    constructor(readonly name: string, public sizes: string[]) {
        super(sizes);
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);

pizza.addTopping('pepperoni');

console.log(pizza.name);

console.log(pizza.availableSizes);
