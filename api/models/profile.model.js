const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  ToggleEvent: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const ProfileModel = mongoose.model("Profile", ProfileSchema);
