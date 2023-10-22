const http = require("http-status-codes")
const admin = require("../models/adminSchema")


const getAdmin = async (req, res)=>{
    try {
        const view = await admin.find({})
        if(!view) return res.status(http.StatusCodes.EXPECTATION_FAILED).send("Error loading data")
        res.status(http.StatusCodes.OK).json(view)
    } catch (error) {
        console.error(error)
        return res.status(http.StatusCodes.EXPECTATION_FAILED).send(error.message)
    }
}

module.exports = getAdmin
