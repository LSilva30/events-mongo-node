const mongoose = require('mongoose')

// schema to control our type of data
const EventSchema = mongoose.Schema({        
    title: String,
    date: Date,
    description: String,
    cost: String,
    attendees: Array,
})

// create model from Schema
module.exports = mongoose.model('Event', EventSchema)