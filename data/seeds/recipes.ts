import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("recipes_instructions").del();
    await knex("recipes_ingredients").del();
    await knex("instructions").del();
    await knex("ingredients").del();
    await knex("recipes").del();

    // Inserts seed entries
    await knex("recipes").insert([
        { id: 1, name: "cookies" },
        { id: 2, name: "boiling water" },
        { id: 3, name: "toast" }
    ]);

    await knex("ingredients").insert([
        {id: 1, name: "cup of butter", amount: 1, recipeId: 1},
        {id: 2, name: "grams of flour", amount: 275, recipeId: 1},
        {id: 3, name: "cup of milk", amount: 1, recipeId: 1},

        {id: 4, name: "however much water", amount: 1, recipeId: 2},

        {id: 5, name: "bread", amount: 1, recipeId: 3},
    ]);

    await knex("instructions").insert([
        {id: 1, name: "mix ingredients", stepNumber: 1, recipeId: 1},
        {id: 2, name: "bake ingredients", stepNumber: 2, recipeId: 1},

        {id: 3, name: "boil the water", stepNumber: 1, recipeId: 2},
        {id: 4, name: "use the water", stepNumber: 2, recipeId: 2},

        {id: 5, name: "toast the bread", stepNumber: 1, recipeId: 3},
        {id: 6, name: "eat the toast", stepNumber: 2, recipeId: 3},
    ]);

    await knex("recipes_ingredients").insert([
        {recipeId: 1, ingredientId: 1},
        {recipeId: 1, ingredientId: 2},
        {recipeId: 1, ingredientId: 3},

        {recipeId: 2, ingredientId: 4},

        {recipeId: 3, ingredientId: 5},
    ]);

    await knex("recipes_instructions").insert([
        {recipeId: 1, instructionId: 1},
        {recipeId: 1, instructionId: 2},

        {recipeId: 2, instructionId: 3},
        {recipeId: 2, instructionId: 4},

        {recipeId: 3, instructionId: 5},
        {recipeId: 3, instructionId: 6},
    ]);
};