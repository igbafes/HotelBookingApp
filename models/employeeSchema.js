const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    department: {
        type: String,
        require: true,
    },
    age:{
        type: Number,
        require: true,
    },
    image:{
        type: String,
        require: true,
    },
    createdAt:{
        type: Date,
        require: true,
    }
})

const employee = mongoose.model("employee", employeeSchema)

module.exports = employee