const express = require('express');
const router = express.Router();
const { generateLearningPath, getLearningPath } = require('../controllers/learningPathController');

router.post('/learning-path', generateLearningPath);
router.get('/learning-path/:userId', getLearningPath);

module.exports = router;
