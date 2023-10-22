const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
     name: {
          type:String,
          required: true,

     },
     email: {
          type:String,
          required: true,
          unique:true

     },
     subject: {
          type:String,
          required: true,

     },
     message: {
          type:String,
          required: true,

     },
     createdAt: {
          type:Date,
          default: Date.now

     },
    
});

const message = mongoose.model('message', formSchema);
module.exports = message;