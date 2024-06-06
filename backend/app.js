const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const skillAssessmentRoutes = require('./routes/skillAssessmentRoutes');
const goalRoutes = require('./routes/goalRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const learningPathRoutes = require('./routes/learningPathRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', skillAssessmentRoutes);
app.use('/api', goalRoutes);
app.use('/api', recommendationRoutes);
app.use('/api', learningPathRoutes);

module.exports = app;
