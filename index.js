const express = require('express')       // import express
const cors = require('cors')             // import cors
const mongoose = require('mongoose')     // import mongoose

const app = express()                    // creating app as Express
app.use(express.json())                  // use express and parse everything into json

// connect to mongoose
app.get('/', (req, res)=>{
    res.send('Hello')
})

app.listen(5000, (req, res) => {
    console.log('Listening on port 5000...')
})
