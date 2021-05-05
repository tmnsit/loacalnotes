const { Schema, model } = require('mongoose')


const schema = new Schema({
    name: String,
    level: Number,
})


module.exports = model('Role', schema)