const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors');

const corsOrigin ={
    origin:'http://localhost:5173', //or whatever port your frontend is using
    credentials:true,            
    optionSuccessStatus:200
}


mongoose.connect("mongodb://localhost:27017/VibeVerse")
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Db'));

app.use(cors(corsOrigin));
app.use(express.json())

const userRouter = require('./routes/user')
const blogRouter = require('./routes/blog')

app.use('/user', userRouter)
app.use('/blog', blogRouter)

app.listen(8000, () => {console.log('Serve is up');})