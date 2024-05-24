
const mongoose = require('mongoose');

// Define passwordValidator function before schema definition
const passwordValidator = function (value) {
  // Define your password strength requirements
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(value);
};

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  mailId: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: passwordValidator,
      message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long',
    },
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'manager'], // Define possible roles here
    default: 'user', // Set a default role if necessary
  },
});


const users = mongoose.model('users', userSchema);

module.exports = users;
