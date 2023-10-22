const checked = require("../models/check")

const checkin = async(req,res)=>{
    const {checkin, checkout, children,aldult}=req.body
    if(!checkin, !checkout,!children,!aldult){
       res.status(404).json({msg:"are the field are reqired"})
    }

    const  check = new  checked ({
        checkin,
        checkout,
        children,
        aldult
    })
    check.save()
    res.status(200).json({msg:"pls wait for your response"})
}

const admincheck = async(req,res)=>{
    

    const  check =  checked.find()
    
    res.status(200).json({listOfCheckin$out:check})
}


module.exports = {
    checkin,admincheck
}