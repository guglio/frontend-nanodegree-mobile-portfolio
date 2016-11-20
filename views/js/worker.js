// Here is our pizzaiolo!
// I removed the random selection, to reduce the call to different functions, and directly put the rand pick inside the loop.
// The worker returns the pizza ingredients to main.js

onmessage = function(e) {
  var pizzaIngredients = e.data.ingredients;
  var ingredient_length = e.data.ingredientsL;
  var pizza = "";

  var numberOfMeats = Math.floor((Math.random() * 4));
  var numberOfNonMeats = Math.floor((Math.random() * 3));
  var numberOfCheeses = Math.floor((Math.random() * 2));

  for (var i = 0; i < numberOfMeats; i++) {
    pizza = pizza + "<li>" + pizzaIngredients.meats[Math.floor((Math.random() * ingredient_length.meats))] + "</li>";
  }

  for (var j = 0; j < numberOfNonMeats; j++) {
    pizza = pizza + "<li>" + pizzaIngredients.nonMeats[Math.floor((Math.random() * ingredient_length.nonMeats))] + "</li>";
  }

  for (var k = 0; k < numberOfCheeses; k++) {
    pizza = pizza + "<li>" + pizzaIngredients.cheeses[Math.floor((Math.random() * ingredient_length.cheeses))] + "</li>";
  }

  pizza = pizza + "<li>" + pizzaIngredients.sauces[Math.floor((Math.random() * ingredient_length.sauces))] + "</li>";
  pizza = pizza + "<li>" + pizzaIngredients.crusts[Math.floor((Math.random() * ingredient_length.crusts))] + "</li>";

  postMessage(pizza);
};
