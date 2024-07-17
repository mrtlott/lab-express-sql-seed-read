const express = require('express')
const app = express()
const cors = require('cors')
const songs = require('../back-end/controllers/songController')

    //middleware
    app.use(express.json())
    app.use(cors())
    app.use('/songs',songControllers)

// local host :4001
app.get('/', (req,res) =>{
    res.send('Welcome to songs app')
})


app.get('*', (req,res) =>{
    res.status(404).send("Song Not Found")
})
 
   module.exports =app