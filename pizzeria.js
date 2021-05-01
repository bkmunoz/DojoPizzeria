function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var meatlv = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(meatlv);

var veg = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(veg);

var nystyle = pizzaOven("thin crust", "traditional", ["mozzarella", "parmesan"], ["basil", "sausage", "peppers", "onions"])
console.log(nystyle)

var white = pizzaOven("hand tossed", "white sauce", ["ricotta", "mozzarella"], ["chicken", "red pepper flakes"])
console.log(white)