const express = require("express");
const router = express.Router();
const todosController = require("../controllers/entries");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, todosController.getTodos);

// Instead of todos, we'll need routes and point to the proper controller to handle:
// get a specific post
// post a new post
// put a like to the post
// delete a post

router.post("/createTodo", todosController.createTodo);

router.put("/markComplete", todosController.markComplete);

router.put("/markIncomplete", todosController.markIncomplete);

router.delete("/deleteTodo", todosController.deleteTodo);

module.exports = router;
