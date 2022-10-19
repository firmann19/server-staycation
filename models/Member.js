const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
     firstName : {
        type : String,
        required : true //validation mongoose
     },
     lastName : {
        type : String,
        required : true //validation mongoose
     },
     phoneNumber : {
        type : String,
        min: 11,
        max: 12,
        required : true //validation mongoose
     },
})

module.exports = mongoose.model('Member', memberSchema)