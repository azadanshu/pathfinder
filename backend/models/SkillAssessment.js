const mongoose = require('mongoose');

const skillAssessmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  skills: [{
    name: String,
    level: Number,  // e.g., 1-5 scale
  }],
});

module.exports = mongoose.model('SkillAssessment', skillAssessmentSchema);
