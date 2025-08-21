const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/.+\@.+\..+/, 'Please enter a valid email address'],
    },
    phone:{
      type:String,
      required:true,
      trim:true
    },
    password:{
      type:String,
      required:true,
      minlength: 6,
    }
  },
  {
    timestamps: true, 
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
