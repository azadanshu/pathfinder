const express = require('express');
const router = express.Router();
const { createUserProfile, getUserProfile } = require('../controllers/userController');

router.post('/profile', createUserProfile);
router.get('/profile/:userId', getUserProfile);

module.exports = router;
