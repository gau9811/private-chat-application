const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  room: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = User = mongoose.model("user", UserSchema)
