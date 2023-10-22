const employee = require("../models/employeeSchema")


const updateEmployee = async (req, res) => {
    // const {error, value} = req.body
    const check = req.body
    console.log(check)
    try {
        const upEmployee = await employee.findByIdAndUpdate(req.params.id, {$set:check})
        if(!upEmployee) return res.status(400).json("error updating employee details")
        return res.status(200).json("Successfully Updated")

    } catch (error) {
        res.status(400).json("error updating employee details")
    }
}

module.exports = updateEmployee