const Entry = require("../models/Entry");
const Todo = require("../models/Entry");

// Likely going to need to delete, as we need to make new controllers for
// the posting screen and also the feed screen.
module.exports = {
  // we would need a get for getting the posts from other users.
  getEntries: async (req, res) => {
    console.log(req.user);
    try {
      //Do we want to grab all the entries?
      const entryItems = await Todo.find();
      res.render("entries.ejs", {
        entries: entryItems,
        user: req.user,
        likes: req.likes,
      });
    } catch (err) {
      console.log(err);
    }
  },
  // Create entries
  createTodo: async (req, res) => {
    try {
      await Entry.create({
        entry: req.body.entryItem,
        image: req.body.entryImage,

        userId: req.user.userId,
      });
      console.log("Entry has been added!");
      res.redirect("/entries");
    } catch (err) {
      console.log(err);
    }
  },
  // ADD Edit an entry
  // editEntry: async (req, res) => {
  //   try {
  //     await Entry.findOneAndUpdate(
  //       { _id: req.body.entryIdFromJSFile },
  //       {

  //       }
  //     )
  //   }
  // }

  // ADD Like an entry
  // likeEntry: async (req, res) => {}

  // Delete an entry
  deleteEntry: async (req, res) => {
    console.log(req.body.entryIdFromJSFile);
    try {
      await Todo.findOneAndDelete({ _id: req.body.entryIdFromJSFile });
      console.log("Deleted Entry");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
