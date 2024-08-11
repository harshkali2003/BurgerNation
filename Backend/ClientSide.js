const mongoose = require('mongoose')

const Burgers = new mongoose.Schema({
    fName : String,
    lName : String,
    email : String,
    password : String
})

module.exports = mongoose.model('Users' , Burgers)