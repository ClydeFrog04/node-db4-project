import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("recipes", table => {
        table.increments("id");
        table.text("name").notNullable();
    });

    await knex.schema.createTable("ingredients", table =>{
        table.increments("id");
        table.text("name").notNullable();
        table.float("amount").notNullable();
        table.integer("recipeId").notNullable().references("id").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE");
    });

    await knex.schema.createTable("instructions", table => {
        table.increments("id");
        table.text("name").notNullable();
        table.integer("stepNumber").notNullable();
        table.integer("recipeId").notNullable().references("id").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE");
    });

    await knex.schema.createTable("recipes_ingredients", table => {
        table.integer("recipeId").notNullable().references("id").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE");
        table.integer("ingredientId").notNullable().references("id").inTable("ingredients").onDelete("CASCADE").onUpdate("CASCADE");

        table.primary(["recipeId", "ingredientId"]);
    });

    await knex.schema.createTable("recipes_instructions", table => {
        table.integer("recipeId").notNullable().references("id").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE");
        table.integer("instructionId").notNullable().references("id").inTable("instructions").onDelete("CASCADE").onUpdate("CASCADE");

        table.primary(["recipeId", "instructionId"]);
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("recipes_instructions");
    await knex.schema.dropTableIfExists("recipes_ingredients");
    await knex.schema.dropTableIfExists("instructions");
    await knex.schema.dropTableIfExists("ingredients");
    await knex.schema.dropTableIfExists("recipes");
}

