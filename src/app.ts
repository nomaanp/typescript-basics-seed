let selectedToppings: string = 'pepporoni';

function selectTopping(topping: string): void {
    selectedToppings = topping;
}

selectTopping('bacon');

console.log(selectedToppings);