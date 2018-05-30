abstract class Sizes {
    constructor(protected sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes() {
        return this.sizes;
    }
}

/*const sizes = new Sizes(['small', 'medium']);

// invoke setter
sizes.availableSizes = ['medium', 'large'];

// invoke getter
console.log(sizes.availableSizes);*/

class Pizza extends Sizes {
    public toppings: string[] = [];

    constructor(readonly name: string, sizes: string[]) {
        super(sizes);
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);

pizza.addTopping('pepperoni');

console.log(pizza.availableSizes);

pizza.updateSizes(['large']);

console.log(pizza.availableSizes);
