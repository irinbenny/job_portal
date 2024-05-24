// models/jobPost.js
const mongoose = require('mongoose');

// Define jobDetails schema
const jobDetailsSchema = new mongoose.Schema({
  yearsExperience: {
    type: Number,
    required: true,
  },
  companyDescription: {
    type: String,
    required: true,
  },
  roleDescription: {
    type: String,
    required: true,
  },
  qualifications: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
});

// Define jobpost schema with embedded jobDetails
const jobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  jobLocation: {
    type: String,
    required: true,
  },
  jobRole: {
    type: String,
    required: true,
  },
  workplaceType: {
    type: String,
    required: true,
    enum: ['On-site', 'Hybrid', 'Remote'],
  },
  jobType: {
    type: String,
    required: true,
    enum: ['Full-time', 'Part-time', 'Internship'],
  },
  datePosted: {
    type: Date,
    required: true,
  },
  applicationDeadline: {
    type: Date,
    required: true,
  },
  jobDetails: {
    type: jobDetailsSchema, // Embed jobDetails schema
    required: true,
  },
});

const JobPost = mongoose.model('JobPost', jobSchema);

module.exports = JobPost;
