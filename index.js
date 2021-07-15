const express = require('express')       // import express
const cors = require('cors')             // import cors
const mongoose = require('mongoose')     // import mongoose
require('dotenv/config')                 // importing dotenv library to use variable

const app = express()                    // creating app as Express
app.use(express.json())                  // use express and parse everything into json

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})    // connect to mongoose
.then(() => console.log('connected to Mongo...'))
.catch(err => console.log(err))

app.get('/', (req, res)=>{
    res.send('Hello')
})

app.listen(5000, (req, res) => {
    console.log('Listening on http://localhost:5000/...')
})
