const http = require("http-status-codes")
const customerJoi = require("../validators/customerJoi")
const customer = require("../models/customerSchema")

const addCustomers = async (req, res) => {
    const {error, value} =customerJoi.validate(req.body)
    if(error) return res.status(http.StatusCodes.CONFLICT).send(error.message)
    try {
        const Customer = await customer.create({
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email,
            phoneNumber: value.phoneNumber
        })
        if(!Customer) return res.status(http.StatusCodes.CONFLICT).send('Error creating profile')
        console.log(Customer)
        res.status(http.StatusCodes.CREATED).send("Profiling complete")
    } catch (error) {
        console.log(error)
        return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
    }
}

module.exports = addCustomers