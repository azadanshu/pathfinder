const express = require('express');
const router = express.Router();
const { fetchRecommendations } = require('../controllers/recommendationController');

router.post('/recommendations', fetchRecommendations);

module.exports = router;
