const mongoose = require('mongoose')

const ProductSide = mongoose.Schema({
    name:String,
    type:String,
    price:String
})

module.exports = mongoose.model('Products' , ProductSide)