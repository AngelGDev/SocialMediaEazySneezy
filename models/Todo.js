// rename file to Entries.js
const mongoose = require("mongoose");

// rename to EntrySchema
const TodoSchema = new mongoose.Schema({
  // rename to entry (because post has a different, special meaning)
  todo: {
    // what type is an image...? Also a string which refers to the location of an image?
    // do we want to start with image, or start with text?
    type: String,
    required: true,
  },
  // we will want to add a user-id parameter for each entry
  // to keep track of who posted it.
  // userId: {
  // type: String or Number?
  // required: true
  // },

  // WE DON'T NEED THESE
  completed: {
    type: Boolean,
    required: true,
  },
  microsoftId: {
    type: String,
    required: true,
  },
});

// rename to "Entry" and EntrySchema
module.exports = mongoose.model("Todo", TodoSchema);
