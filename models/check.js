const { number } = require("joi")
const mongoose = require("mongoose")

const checkin = mongoose.Schema({
    checkin: {
        type: "string",
        required: true,
        unique: true
      },
      checkout: {
        type: "string",
        required: true,
      },
      aldult: {
        type: "number",
        required: true,
      },
      children: {
        type: "number",
        required: true,
        // unique: true,
      }
     
})

const check = mongoose.model("checkin", checkin)

module.exports = check