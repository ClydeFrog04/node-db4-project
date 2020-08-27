const express = require("express");
const db = require("../models/recipes");

const router = express.Router();


router.get("/",  async (req, res) => {
    try {
        const recipes = await db.getRecipes();
        res.status(200).json(recipes);
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error getting recipes"});
    }
});

router.get("/:id/shopping_list",  async (req, res) => {
    try {
        const shoppingList = await db.getShoppingList(req.params.id);
        res.status(200).json(shoppingList);
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error getting shopping list"});
    }
});

router.get("/:id/shopping_instructions",  async (req, res) => {
    try {
        const instructions = await db.getInstructions(req.params.id);
        res.status(200).json(instructions);
    } catch (e) {
        console.log(e.stack);
        return null;
    }
});


module.exports = router;
export {};