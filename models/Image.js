const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
     imageUrl : {
        type : String,
        required : true //validation mongoose
     }
})

module.exports = mongoose.model('Image', imageSchema)