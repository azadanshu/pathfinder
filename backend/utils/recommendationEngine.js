const axios = require('axios');

exports.getRecommendations = async (interests, skillLevel) => {
  try {
    const response = await axios.get('https://api.example.com/recommendations', {
      params: { interests, skillLevel }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch recommendations');
  }
};
