const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create schema
const userSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    // unique: false,
  },
  Phone: {
    type: Number,
    required: true,
  },
  designation: {
    type: String,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});
// Create model
module.exports = mongoose.model("User", userSchema);
