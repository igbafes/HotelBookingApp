const mongoose = require("mongoose")

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    features: {
        type: String,
        require: true,
    },
    images: String,
    capacity: {
        type: Number,
        require: true,
    },
    availability: Boolean
})

const room = mongoose.model("room", roomSchema)

module.exports = room