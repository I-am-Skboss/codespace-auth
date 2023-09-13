require('dotenv').config()
require("./database/database.js")
const express = require('express')
const res = require('express/lib/response.js')

const app = express()
app.use(express.json())

app.get("/", (req, res) =>{
    res.send("<h1>Server is working</h1>")
})
app.post("./register", (req, res)) =>{
    try{

    }catch(error){
        console.loh(error);
    }
}

module.exports = app