const db = require("../data/recipesConfig");


function getRecipes() {
    return db("recipes");
}

function getShoppingList(recipeId) {
    return db("ingredients")
        .where({recipeId})
        .select("name", "amount");

}

function getInstructions(recipeId) {
    return db("instructions")
        .where({recipeId})
        .select("name", "stepNumber")
        .orderBy("stepNumber");

}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}
export {};