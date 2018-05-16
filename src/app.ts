const pizza = {
    name: 'Pepporoni',
    toppings: ['pepporoni']
};

function order({name: pizzaName, toppings: pizzaToppings}) {
    // console.log(pizzaName, pizzaToppings)

    return {pizzaName, pizzaToppings};
}

const { pizzaName }  = order(pizza);

const toppings = ['pepporoni', 'bacon', 'chilli'];

const [ first,  second, third ] = toppings;

console.log(first)

function logToppings([first, second, third]: any) {
    console.log(first, second, third)
}

logToppings(toppings)