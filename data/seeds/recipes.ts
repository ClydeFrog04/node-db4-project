import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("recipes").del();

    // Inserts seed entries
    await knex("recipes").insert([
        { id: 1, name: "cookies" },
        { id: 2, name: "boiling water" },
        { id: 3, name: "toast" }
    ]);
};