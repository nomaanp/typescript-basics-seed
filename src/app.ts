type Pizza = {name: string, toppings: number};

const pizza: Pizza = {name: 'Blazing Inferno', toppings: 5};

const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string){
    // return (<Pizza>JSON.parse(obj)).name; Can't adapt this method due to jsx
    return (JSON.parse(obj) as Pizza).name;
}

console.log(getNameFromJSON(serialized));