const mongoose = require('mongoose')

const bankSchema = new mongoose.Schema({
     nameBank : {
        type : String,
        required : true //validation mongoose
     },
     nomorRekening : {
        type : String,
        required : true //validation mongoose
     },
     name : {
        type : String,
        required : true //validation mongoose
     },
     imageUrl : {
      type: String,
      required: true
     }
})

module.exports = mongoose.model('Bank', bankSchema)