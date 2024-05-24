// routes/authRoutes.js
const userController = require("../Controllers/userController");
const express = require("express");
const router =new express.Router();

router.post('/user/register',userController.register);
router.post("/user/login",userController.login ); 
router.post("job/post-job",userController.jobPost); 
module.exports = router;
