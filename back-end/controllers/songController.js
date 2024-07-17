 const express = require('express')
 const songs = express.Router()
 const {getAllSongs, getSongs,createSongs }= require ('../queries/songs')


 ///index
 songs.get("/", async (req,res)  => {
    const allSongs= await getAllSongs()
    if(allSongs[0]){
        res.status(200).json(allSongs)

    }else {
        res.status(500).json({error:"Internal Server Error "})
    }
    
 })


 //show 
songs.get('/:id', async (req,res)=>{
    const {id}= req.params
    const singleSong = await getSong(id)
    if(song.id){
        res.status(200).json(singleSong)
    }else {
        res.status(404).json({error:"Song Not Found "})
    }


})

// create
songs.post('/' , async (req,res) => {
        const newSongs = await createSongs(req.body)
        res.json(newSong)
    })

// delete
songs.delete('/:arrayIndex',(req,res) => {
    const {arrayIndex} = req.params
    const deleteSongs = songsArray.splice
    (arrayIndex, 1)
    res.json(this.deleteSongs[arrayIndex])
})

// update
songs.put('/:arrayIndex',(req,res) => {
    const {arrayIndex} = req.params
    songsArray[arrayIdex] = req.body
    (arrayIndex, 1)
    res.status(200).json(songsArray[arrayIndex])
})




 module.exports= songs 