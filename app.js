// GET POST DELETE PUT
const express = require('express')
const mongoose = require("mongoose")
const postModel = require('./models/post.model')

require("dotenv").config()

const app = express()

app.use(express.json())


app.get("/", async (req, res)=>{
    try {
        const allPosts = await postModel.find()
        res.status(200).json(allPosts)
    } catch (error) {
        res.status(500).json(error)
    }
    
})

app.post("/", async (req, res)=>{
    try {
        const {title, body} = req.body;
        const newPost = await postModel.create({title, body})
        res.status(201).json(newPost)   
    } catch (error) {
        res.status(500).json(error)
    }
})

app.delete("/:id", (req, res)=>{
    const {id} = req.params
    res.send(`salom  ${id}`)
})

app.put("/:id", (req, res)=>{
   const  {id} = req.params;
   const  body = req.body

   res.send({id,  body})
})


app.get("/post", (req, res)=>{
    res.status(200).send("salom post")
})     

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