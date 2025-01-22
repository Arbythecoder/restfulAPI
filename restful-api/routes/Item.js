const express = require('express');
const Item = require('../models/Item');

const router = express.Router();

// @route   GET /api/items
// @desc    Get all items
// @access  Public
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();  // Fetch all items
        res.json(items);  // Respond with the list of items
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items' });
    }
});

// @route   POST /api/items
// @desc    Create a new item
// @access  Public
router.post('/', async (req, res) => {
    const { name, description, price } = req.body;

    // Validation
    if (!name || !description || !price) {
        return res.status(400).json({ message: "Please include name, description, and price" });
    }

    try {
        const newItem = new Item({ name, description, price });
        await newItem.save();  // Save the new item to the database
        res.json(newItem);  // Respond with the newly created item
    } catch (error) {
        res.status(500).json({ message: 'Error saving item' });
    }
});

module.exports = router;
