const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT =  process.env.port || 5000
// const MONGODB_URL = process.env.MONGODB_URL || "mongodb://0.0.0.0:27017";
mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log(`connected to MongoDB...`))
.catch((err)=> console.log(err))

app.listen(PORT, ()=> console.log(`listening on Port: ${PORT}`))