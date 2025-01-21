const mongoose = require('mongoose');

// Define the schema
const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Export the model
module.exports = mongoose.model('Item', ItemSchema);
