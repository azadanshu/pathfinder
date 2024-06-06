const express = require('express');
const router = express.Router();
const { createSkillAssessment, getSkillAssessment } = require('../controllers/skillAssessmentController');

router.post('/assessment', createSkillAssessment);
router.get('/assessment/:userId', getSkillAssessment);

module.exports = router;
