const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// GET /api/items - Fetch all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find(); // Retrieve items from the database
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
