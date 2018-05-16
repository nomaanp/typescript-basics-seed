const pizza = {
    name: 'Pepporoni',
    price: 20,
    getName() {
        return this.name;
    }
}

console.log(pizza.getName())

const toppings = ['pepporoni'];

// const order = { pizza, toppings };

// console.log(order)

function createOrder(pizza, toppings) {
    return { pizza, toppings };
}

console.log(createOrder(pizza, toppings));