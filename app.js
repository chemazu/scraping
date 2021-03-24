const express = require('express')
const app = express()
const dotenv = require("dotenv")
dotenv.config()
// require('./helpers/screenshot')
require('./helpers/spool')
const PORT = process.env.PORT||5000

app.use('/',(req, res)=>{res.status(200).json("Welcome to Scraping with Node")})
app.listen(PORT, ()=>{
    console.log("scraping app is running on", PORT)
})