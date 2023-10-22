
const bcrypt = require("bcrypt")
const admin = require("../models/adminSchema")
// const bcrypt = require("bcrypt")

const updateAdmin = async (req, res) => {
    // const {error, value} = req.body
    const check = req.body
    console.log(check)
    try {
        const getAdmin = await admin.findOne({username: check.oldUsername})
        console.log(getAdmin)
        if(!getAdmin) return res.status(400).json("invalid username")
        try {
            const compared = await bcrypt.compare(check.oldPassword, getAdmin.password);
            if(!compared) return res.status(400).json("invalid credentials")
            const salt = await bcrypt.genSalt()
            console.log(salt)
            const hashedPassword = await bcrypt.hash(check.newPassword, salt)
            console.log(hashedPassword)
            const upAdmin = await admin.updateOne({username : check.oldUsername}, {$set: {username: check.newUsername, password: hashedPassword}})

            console.log(upAdmin)
            return res.status(200).json("Credentials successfully updated")

        } catch (error) {
            res.status(400).json(error.message)
        }

    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = updateAdmin