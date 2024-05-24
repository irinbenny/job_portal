const User = require("../Models/User");
const JobPost = require("../Models/jobPost");
const bcrypt = require('bcryptjs'); // Import bcryptjs for password hashing
const jwt = require('jsonwebtoken');

// User Registration
exports.register = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ mailId: email });    // Check if a user with the given email already exists
    console.log('Existing user:', existingUser);    // Logging existingUser to console
    if (existingUser) {// If a user with the email already exists, return an error response
      return res.status(400).json('User already exists');
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Create a new user object
    const newUser = new User({
      username,
      mailId: email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json('Registration process failed due to: ' + err.message);
  }
}

// User Login
exports.login = async (req, res) => {
  console.log('inside login function');
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ mailId: email });

    if (!existingUser) {
      return res.status(401).json('Incorrect email or password');
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
      return res.status(401).json('Incorrect email or password');
    }

    // Generate JWT token
    const token = jwt.sign({ userId: existingUser._id }, "superkey");

    // Include user's role in the response
    res.status(200).json({ existingUser, token, role: existingUser.role });
  } catch (err) {
    res.status(500).json('Login request failed due to: ' + err.message);
  }
}



exports.jobPost = async (req, res) => {
  console.log('inside post function');
  const { companyName, jobLocation, jobRole, workplaceType, jobType, datePosted, applicationDeadline, jobDetails } = req.body;

  try {
    const newJob = new JobPost({
      companyName,
      jobLocation,
      jobRole,
      workplaceType,
      jobType,
      datePosted,
      applicationDeadline,
      jobDetails, 
    });

    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json('Failed to post job: ' + error.message);
  }
};