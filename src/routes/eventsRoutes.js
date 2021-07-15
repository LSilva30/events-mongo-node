// import express
const express = require('express')
const router = express.Router()

// import events controller
const eventsController = require('../controllers/eventsController')
router.get('/events', eventsController.getAllEvents)


// export all routes within the router
module.exports = router