const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  goals: [{
    description: String,
    deadline: Date,
    completed: Boolean,
  }],
});

module.exports = mongoose.model('Goal', goalSchema);
