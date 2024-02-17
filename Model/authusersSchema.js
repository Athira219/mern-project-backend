//import mongoose
const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
    

})

//create model
//authusers---> collection name
//authSchema-->model
const authusers = mongoose.model('authusers', authSchema)

module.exports = authusers