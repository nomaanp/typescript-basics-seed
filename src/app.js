var pizzas = 5;
function offerDiscount(orders) {
    return orders >= 3;
}
if (offerDiscount(pizzas)) {
    console.log("You're entitled to a discount!");
}
else {
    console.log("Order more than 3 pizzas for a discount!");
}
