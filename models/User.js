const mongoose = require("mongoose");
// Middleware to hash passwords
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
});

// UserScheme Middleware to HASH PASSWORDS
// https://www.twitch.tv/videos/1000589317?t=02h50m22s
// copied from https://www.twitch.tv/videos/1000589317?t=02h51m41s
//----------------------------------------------------------------
UserSchema.pre('save', function save(next)) {
  const user = this
  if (!user.isModified('password')) { return next()}
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if(err) { return next(err)}
      user.password = hash
      next()
    })
  })
}

// Helper Method to Compare Passwords
// copied from https://www.twitch.tv/videos/1000589317?t=02h51m44s
//----------------------------------------------------------------
UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch)
  })
}

module.exports = mongoose.model("User", UserSchema);
