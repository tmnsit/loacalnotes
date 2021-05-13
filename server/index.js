const express = require('express')
const mongoose = require('mongoose')
const router = require('./router')
const app = express()
const PORT = 4456
const bodyParser = require('body-parser')

// support parsing of application/json type post data
app.use(bodyParser.json())

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
  app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    res.send();
  });
});

app.use(router)

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