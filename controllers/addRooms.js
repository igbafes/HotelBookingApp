const http = require("http-status-codes")
const roomJoi = require("../validators/roomJoi")
const room = require("../models/roomSchema")



const addRoom = async (req, res) =>{
    console.log(req.body)
    console.log(req.file)
    const {error, value} = roomJoi.validate(req.body)
    if(error) return res.status(http.StatusCodes.BAD_REQUEST).json(error.message)
    try {
        const files = req.files
        const Room = await room.create({
            name: value.name,
            features: value.features,
            images: req.file.path,
            capacity: value.capacity,
            price: value.price,
            availability: false
        })
        console.log(Room)
        if(!Room) return res.status(http.StatusCodes.BAD_REQUEST).json("Error adding room")
        res.status(http.StatusCodes.CREATED).json("Room successfully added")
    } catch (error) {
        console.log(error)
        return res.status(http.StatusCodes.BAD_REQUEST).json(error.message)
    }
}

module.exports = addRoom