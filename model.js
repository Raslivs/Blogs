const mongoose = require("mongoose");

// Define the blog schema
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  img_url: {
    type: String,
    required: true,
  },
});

// Create the model using the schema
const BlogModel = mongoose.model("blogs", BlogSchema);

// Export the model
module.exports = BlogModel;
