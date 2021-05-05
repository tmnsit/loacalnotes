const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const PORT = 4456
const bodyParser = require('body-parser')

// support parsing of application/json type post data
app.use(bodyParser.json())

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

function start() {
    try {
        mongoose.connect('mongodb://localhost:27017/notesdb', { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(PORT, (error) => {
            if (error) {
                console.log('Crash')
            } else {
                console.log(`Server started with port ${PORT}....`)
            }
        })
    } catch (e) {
        console.log('Error function start!!!')
    }
}

start()