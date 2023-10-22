const mongoose = require("mongoose")

const customerSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        require: true,
        unique: true
    },
    residentialAddress: {
        type: String,
        require: true
    }
})

const customer = mongoose.model("customer", customerSchema)

module.exports = customer