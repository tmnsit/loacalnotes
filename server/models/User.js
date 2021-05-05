const { Schema, model } = require('mongoose')


const schema = new Schema({
    username: String,
    password: String,
    email: String,
    age: Number
})


module.exports = model('User', schema)