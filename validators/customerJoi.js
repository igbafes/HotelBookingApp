const joi = require("joi")

const customerJoi = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().required(),
    phoneNumber: joi.string().required()
})

module.exports = customerJoi