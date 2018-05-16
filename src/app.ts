const pizzas = [
    { name: 'Pepporoni', toppings: ['pepporoni']}
];

var mapPizzas = pizzas.map(pizza =>  pizza.name.toUpperCase())

// var mapPizzas = pizzas.map(pizza => {
//     return pizza.name.toUpperCase();
// })

console.log(mapPizzas)

const pizza = {
    name: 'Blazing Inferno',
    getName: () => pizza.name
}

console.log(pizza.getName())