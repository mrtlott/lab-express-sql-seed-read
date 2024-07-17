const db = require('../db/dbConfig')


const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs")
        return allSongs
    } catch (error) {
        return (error )
    }
}

const getSongs = async (id) => { 

    try {
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1",1)
        return oneSong
     } catch (error) {
    return error
 }
}


const createSong = async () =>{
    try {
        const newSong = await db.one("INSERT INTO songs (name, is_favorite,time,album, artist) VALUES ($1,$2,$3,$4,$5)",[song.name, song.is_favorite,song.time,song.album, song.artist])
        return newSong
    } catch (error) {
        return error
    }
}



 module.exports ={getAllSongs, getsongs, createSongs}