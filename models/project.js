// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var ProjectSchema   = new mongoose.Schema({
  title: String,
  url: String,
  description: String
});

// Export the Mongoose model
module.exports = mongoose.model('Project', ProjectSchema);
