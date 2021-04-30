const express = require('express')
const router = express.Router()
// requiring home controller
const homeController = require('../controllers/home')

// we'll need to setup and require controllers for:
// require authentication?? controller 
// require posts?? controller

// home route
router.get('/', homeController.getIndex) 

// We'll need to setup the routes and point to the proper controller for:
// get user profile
// get content feed
// get signup form
// post signup form
// get login form
// post login form



module.exports = router