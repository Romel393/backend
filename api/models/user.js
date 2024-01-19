const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: String,
    email: String,
    role: String,
    permissions: [String],
  });

module.exports= mongoose.model('User',userSchema);