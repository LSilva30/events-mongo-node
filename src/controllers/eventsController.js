// import the model
const Event = require('../models/eventsModel')


// export a function called get all Events
exports.getAllEvents = (req, res) => {
    Event.find()
    .then(allEvents => {
        res.status(200).send(allEvents)
    })
    .catch(err => res.status(500).send('Could not get all events'))
}