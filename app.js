// GET POST DELETE PUT
const express = require('express')
const mongoose = require("mongoose")
const postModel = require('./models/post.model')

require("dotenv").config()


//Routes
const postRoute = require("./routes/post.route")

//fileUpload
const fileUpload = require("express-fileupload")

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))

//Routes

app.use('/api/post', postRoute)

//fileUpload
const PORT = process.env.PORT || 5173;


const startApp = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URl).then(()=>{
            console.log("Contected db")
        })
        app.listen(PORT, ()=>{
            console.log(`Listening on http://localhost:${PORT}`)
        })
    }catch(error){
        console.log(`Error conect with DB : ${error}`)
    }
}

startApp()