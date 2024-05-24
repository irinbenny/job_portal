// config/db.js
const mongoose = require("mongoose");

const connectDB = process.env.DATABASE


mongoose.connect(connectDB).then(()=>{
        console.log("MongoDB Connected succesfully");
    }). catch ((err)=>{
        console.error(err.message);
});

module.exports = connectDB;
