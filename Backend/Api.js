const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const User = require('./ClientSide')
const UserSecond = require('./ClientSideSecond')
const Product = require('./ProductSide')
const Feedback =require('./FeedbackData')


app.post('/register' , async (req , resp)=>{
    let data = new User(req.body)
    let result = await data.save();
    resp.send(result)
    console.log("Connected");
})

app.post('/login' , async (req , resp)=>{
    let data = new UserSecond(req.body)
    let result = await data.save();
    resp.send(result)
    console.log("LOGGED IN");
})

app.get('/products' , async (req , resp)=>{
   let data = await Product.find();
   if(data.length > 0){
    resp.send(data)
    console.log("Product Showed");
   }
   else{
    resp.send("ERROR")
   }
})

app.post('/feedback' , async (req, resp)=>{
    let data = new Feedback(req.body)
    let result = await data.save()
    resp.send(result)
    console.log("Data collected");
})


app.listen(5000)