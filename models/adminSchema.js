const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
      },
      lastName: {
        type: String,
        required: true,
      },
      firstName: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
        // unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      authentication: {
        type: String,
      }
})

const admin = mongoose.model("admin", adminSchema)

module.exports = admin