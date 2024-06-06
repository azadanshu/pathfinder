const { getRecommendations } = require('../utils/recommendationEngine');

exports.fetchRecommendations = async (req, res) => {
  try {
    const { interests, skillLevel } = req.body;
    const recommendations = await getRecommendations(interests, skillLevel);
    res.json(recommendations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
