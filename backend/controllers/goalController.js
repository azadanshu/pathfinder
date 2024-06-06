const Goal = require('../models/Goal');

exports.createGoals = async (req, res) => {
  try {
    const goal = new Goal(req.body);
    await goal.save();
    res.status(201).json(goal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.findOne({ userId: req.params.userId });
    if (!goals) {
      return res.status(404).json({ error: 'Goals not found' });
    }
    res.json(goals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
