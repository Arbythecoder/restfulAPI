const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize app
const app = express();
app.use(cors());
app.use(express.json());

// Define a root route to handle base URL requests
app.get("/", (req, res) => {
  res.send("Welcome to the RESTful API! Use /api/items to access the items endpoint.");
});

// Routes
app.use("/api/items", require("./routes/Item"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
