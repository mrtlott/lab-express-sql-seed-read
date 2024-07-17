const pgp =require ('pg-promise')()
require('dotenv').config()



const cn ={

    host: process.env.PG_HOST,
    port : process.env.PG_PORT,
    user :process.env.PG_USER,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD

}


//we assign pgp(cn) to a variable be it holds our connection to the database 
const db = pgp(cn)

module.exports= db