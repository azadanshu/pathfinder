const SkillAssessment = require('../models/SkillAssessment');

exports.createSkillAssessment = async (req, res) => {
  try {
    const assessment = new SkillAssessment(req.body);
    await assessment.save();
    res.status(201).json(assessment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSkillAssessment = async (req, res) => {
  try {
    const assessment = await SkillAssessment.findOne({ userId: req.params.userId });
    if (!assessment) {
      return res.status(404).json({ error: 'Assessment not found' });
    }
    res.json(assessment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
