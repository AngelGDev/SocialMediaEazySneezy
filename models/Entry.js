const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema({
  // More about images in mongoose schemas
  // https://stackoverflow.com/questions/44869479/what-data-type-should-i-use-to-store-an-image-with-mongodb
  // https://colinrlly.medium.com/send-store-and-show-images-with-react-express-and-mongodb-592bc38a9ed
  image: {
    type: String,
    data: Buffer,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  liked: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Entry", EntrySchema);
