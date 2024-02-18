const { Smartcook, Ingredient, Recipe, DishCategory, RecipeCategory, Tolerance, Price, Difficulty, Necessary, Unit } = require("smartcook-sdk");
const fs = require('fs');

const smartCookSDK = new Smartcook({
  baseUrl: "https://www.smartcook-project.eu/api",
    userId: 7,
    secret: "x5bz5s",
    authorName: "Chvátal Václav"
});
/*
smartCookSDK.basics.default()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
*/

const ingredient1 = new Ingredient("tofu", 200, Unit.GRAM, Necessary.YES, "Firm tofu, crumbled as a substitute for scrambled eggs.");
const ingredient2 = new Ingredient("spinach", 100, Unit.GRAM, Necessary.YES);
const ingredient3 = new Ingredient("tomato", 1, Unit.PIECE, Necessary.YES)
const ingredient4 = new Ingredient("onion", 1, Unit.PIECE, Necessary.YES)
const ingredient5 = new Ingredient("turmeric", 14, Unit.GRAM, Necessary.NO)
const ingredient6 = new Ingredient("salt", 7, Unit.GRAM, Necessary.NO, "7 g is regular amount, can be adjusted for prefered taste.")
const ingredient7 = new Ingredient("pepper", 3.5, Unit.GRAM, Necessary.NO, "3.4 g is regular amount, can be adjusted for prefered taste.")
const ingredient8 = new Ingredient("olive_oil", 14, Unit.GRAM, Necessary.YES)

const recipeData = new Recipe({
  name: "Scrambled Tofu Breakfast",
    difficulty: Difficulty.SIMPLE,
    duration: "15",
    price: Price.MEDIUM,
    description: "In a pan, heat 14 g of olive oil. Add finely chopped red onion and pan-fry until translucent. Crumble 200g of firm tofu into the pan. Add 14 g of ground turmeric and Stir. Add 100g of chopped fresh spinach and diced ripe tomato. Season with 7 g of salt and 3.5 g of black pepper. Cook for 5-7 minutes until everything is heated through. Serve hot and add more or less spices so it is up to your taste.",
    country: "PH",
    dishCategory: [DishCategory.BREAKFAST],
    recipeCategory: [RecipeCategory.MEATFREE],
    tolerance: [Tolerance.VEGAN, Tolerance.VEGETARIAN],
    ingredients: [
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
      ingredient6,
      ingredient7,
      ingredient8,
  ],
  author: smartCookSDK.authorName
});

smartCookSDK.recipes.validateRecipe(recipeData)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });