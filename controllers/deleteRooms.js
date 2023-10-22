const http = require("http-status-codes");
const room = require("../models/roomSchema");


const deleteRoom = async (req, res)=>{
    try {
        const data = await room.findByIdAndDelete(req.params)
        if(!data) return res.status(http.StatusCodes.EXPECTATION_FAILED).send(error.message)
        res.status(http.StatusCodes.OK).json("Delete successfull!!")
    } catch (error) {
        console.log(error)
        res.status(400).json(error.message)
    }
}

module.exports = deleteRoom
