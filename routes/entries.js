const express = require("express");
const router = express.Router();
const entriesController = require("../controllers/entries");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//if authorized, fetch the entries
router.get("/", ensureAuth, entriesController.getEntries);

// put a like to the entry
router.put("/likeEntry", entriesController.likeEntry);

// post a new entry
router.post("/createEntry", entriesController.createEntry);

// Eventually we may want to edit entries
// router.put("/editEntry", entriesController.editEntry);

// delete an entry
router.delete("/deleteEntry", entriesController.deleteEntry);

module.exports = router;
