const express=require('express')
const app=express()
const connectDB=require('./config/connectDB')
connectDB()
require("dotenv").config()
//middleware 
  app.use(express.json())
app.use('/api/contacts',require('./routes/contact'))


const Port =5000
app.listen(Port,(err)=>{
err?console.log(err):console.log(  `the server is running on the ${Port} `);
})

//create the server 
//connect the database (mongodbAtlas)
//create the Model 