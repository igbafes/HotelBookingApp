const joi = require("joi")

const roomJoi = joi.object({
    name: joi.string().required(),
    features: joi.string().required(),
    // image: joi.string().required(),
    capacity:joi.string().required(),
    price: joi.number().required(),
})

module.exports = roomJoi