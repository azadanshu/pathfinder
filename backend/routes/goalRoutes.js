const express = require('express');
const router = express.Router();
const { createGoals, getGoals } = require('../controllers/goalController');

router.post('/goals', createGoals);
router.get('/goals/:userId', getGoals);

module.exports = router;
