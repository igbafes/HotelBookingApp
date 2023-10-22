const joi = require("joi")

const adminJoi = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().required()
})

module.exports = adminJoi