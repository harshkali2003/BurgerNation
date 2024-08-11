const mongoose = require('mongoose')

let Burgers = mongoose.Schema({
    email : String,
    password : String
})

module.exports = mongoose.model('users' , Burgers)