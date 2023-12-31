const joi = require('joi');


const Schema = joi.object({
    username: joi.string()
     .alphanum()
      .min(4)
      .max(30)
      .required(),

     password: joi.string()
      .min(8)
      .max(30)
      .required()   
})
 module.exports = Schema