// models/resume.js
const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
