const Todo = require('../models/Todo')

// Likely going to need to delete, as we need to make new controllers for
// the posting screen and also the feed screen.
module.exports = {

    // we would need a get for getting the posts from other users.
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            //Do we want to grab all the todos?
            const todoItems = await Todo.find()
            //How can we grab our logged in users left to dos?
            const itemsLeft = await Todo.countDocuments({completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    // need a create for making posts to the feed. 
    createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.todoItem, completed: false, microsoftId: req.user.microsoftId})
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    // Not likely needed, as we don't need to mark items as complete.
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    // Not likely needed, as we don't need to mark items as complete.
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    
    // Would likely need, depending on if we allow users to be able to delete their posts or not.
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    