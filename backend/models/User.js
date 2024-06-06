const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  interests: [String],
  skills: [String],
  education: String,
  learningObjectives: String,
});

module.exports = mongoose.model('User', userSchema);