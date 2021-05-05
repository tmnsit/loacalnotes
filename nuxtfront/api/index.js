const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
// Create express instance
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// Require API routes
const test = require('./routes/test')


// Import API Routes
app.use(test)

const connectDb = () => {
  mongoose.Promise = global.Promise

  const options = {
    useMongoClient: true
  }
  mongoose.connect('mongodb://localhost/notes', options)
  return mongoose.connection
}

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer)

function startServer() {
  console.log('Connected');
}

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}