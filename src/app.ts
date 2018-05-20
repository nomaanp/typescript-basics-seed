const pizzaCost: number = 15.75;
const pizzaToppings: number = 5;

function calculate(cost: number, toppings: number) {
    return cost + 1.5 * toppings;
}

const cost: number = calculate(pizzaCost, pizzaToppings);

console.log(`Pizza Cost: ${cost}`)