const room = require("../models/roomSchema")


const updateRoom = async (req, res) => {
    // const {error, value} = req.body
    const check = req.body
    console.log(check)
    try {
        const upRoom = await room.findByIdAndUpdate(req.params.id, {$set:check})
        if(!upRoom) return res.status(400).json("error updating room")
        return res.status(200).json("Room details successfully updated")

    } catch (error) {
        res.status(400).json("error updating room")
    }
}

module.exports = updateRoom