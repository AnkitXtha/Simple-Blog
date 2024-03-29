const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    nickname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    confirmPassword:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    },
})

module.exports = mongoose.model('User', userSchema)