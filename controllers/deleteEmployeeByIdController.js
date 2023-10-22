const http = require("http-status-codes");
const employee = require("../models/employeeSchema")



const deleteEmployee = async (req, res)=>{
    // const {error, value} = updateAdminJoi.validate(req.body)
    // if(error) return res.status(http.StatusCodes.EXPECTATION_FAILED).send(error.message)
    try {
        console.log(req.params._id)
        const data = await employee.findByIdAndDelete(req.params)
        if(!data) return res.status(http.StatusCodes.EXPECTATION_FAILED).send(error.message)
        res.status(http.StatusCodes.OK).json("Delete successfull!!")
    } catch (error) {
        console.log(error)
        res.status(400).json(error.message)
    }
}

module.exports = deleteEmployee
