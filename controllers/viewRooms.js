const http = require("http-status-codes")
const room = require("../models/roomSchema")


const getRooms = async (req, res)=>{
    try {
        const view = await room.find({})
        if(!view) return res.status(http.StatusCodes.EXPECTATION_FAILED).json("Error loading data")
        res.status(http.StatusCodes.OK).json(view)
    } catch (error) {
        console.error(error)
        return res.status(http.StatusCodes.EXPECTATION_FAILED).json(error.message)
    }
}

module.exports = getRooms

