const mongoose = require('mongoose')

const FeedbackData = mongoose.Schema({
    name:String,
    email:String,
    comments:String
})

module.exports = mongoose.model('Feedback' , FeedbackData)