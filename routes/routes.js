const addAdmin = require("../controllers/addAdmin")
const addCustomers = require("../controllers/addCustomers")
const addEmployee = require("../controllers/addEmployee")
const addRoom = require("../controllers/addRooms")
const loginAdmin = require("../controllers/adminLoginController")
const deleteAdmin = require("../controllers/deleteAdmin")
const deleteEmployee = require("../controllers/deleteEmployeeByIdController")
const deleteRoom = require("../controllers/deleteRooms")
const updateAdmin = require("../controllers/updateAdmin")
const updateEmployee = require("../controllers/updateEmployee")
const updateRoom = require("../controllers/updateRoom")
const getAdmin = require("../controllers/viewAdmins")
const getEmployees = require("../controllers/viewEmployees")
const getRooms = require("../controllers/viewRooms")
const verifyToken = require("../middlewares/jwtAuth")
const upload = require("../middlewares/multer")
const mailer = require("../middlewares/nodemailer")
const pasDel = require('../controllers/chanPass')
const {checkin} = require('../controllers/checkin')
const {admincheck} = require('../controllers/checkin')

const roomImage = require("../middlewares/roomMulter")

const formSubmit = require('../controllers/formController')



const express = require("express")
// const room = require("../models/roomSchema")
const route = express.Router()

route.post("/api/admin", addAdmin, mailer)

route.post("/api/employees", upload.single("file") , addEmployee)

route.post("/api/rooms", roomImage.single("file"), addRoom)

route.get("/api/rooms", getRooms)

route.delete("/api/rooms/:_id", deleteRoom)

route.get("/api/admins", getAdmin)

route.delete("/api/admins/:_id", deleteAdmin)

route.post("/api/login", loginAdmin)

route.post("/api/customers", addCustomers)

// route.post("/api/rooms", upload.array("selectedImages", 8), addRoom)

route.get("/api/employees", getEmployees)

route.delete("/api/employees/:_id", deleteEmployee)

route.put("/api/employees", updateEmployee)

route.put("/api/admin", updateAdmin)

route.put("/api/rooms", updateRoom)

route.put('/passChange', pasDel)

route.post('/checked', checkin)

route.get('/checked', admincheck)
route.post('/submit', formSubmit)




module.exports = route