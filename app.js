// GET POST DELETE PUT
const express = require('express')

const app = express()

app.use(express.json())


app.get("/", (req, res)=>{
    res.status(200).send("Hello Javohir")
})

app.post("/", (req, res)=>{
    const {name, age} = req.body;
    const message = `salom  mening ismim ${name}, yoshim ${age} da  `
    res.send(message)
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

const PORT = 5173;

app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})
