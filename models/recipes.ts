const db = require("../data/recipesConfig");


function getRecipes() {
    return db("recipes");
}

async function getShoppingList(recipeId){
    //SELECT "name", "amount" from ingredients
    // where "recipeId" = 1;
    try {
        return await db("ingredients")
            .where({recipeId})
            .select("name", "amount");
    } catch (e) {
        console.log(e.stack);
        return null;
    }
}

async function getInstructions(recipeId){
    //select "name", "stepNumber" from instructions
    // where "recipeId" = 1
    // order by stepNumber;
    try {
        return await db("instructions")
            .where({recipeId})
            .select("name", "stepNumber")
            .orderBy("stepNumber");
    } catch (e) {
        console.log(e.stack);
        return null;
    }
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}
/*
getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe

 */

/*const db = require("../data/config")

function find() {
	return db("zoos")
}

function findById(id) {
	return db("zoos")
		.where("id", id)
		.first()
}

function findAnimals(zooId){
    return db("zoos_animals as za")
        .join("zoos as z", "z.id", "za.zooId")
        .join("animals as a", "a.id", "za.animalId")
        .join("species as s", "s.id", "a.speciesId")
        .where("za.zooId", zooId)
        .select("a.id", "a.name", "s.name as species", "za.fromDate", "za.toDate");
}

module.exports = {
	find,
	findById,
    findAnimals
}*/
export {};