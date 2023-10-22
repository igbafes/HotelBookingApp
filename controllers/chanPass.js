const admin = require("../models/adminSchema")



async function Pas(req,res){
 try{
    const {email, newPassword, confimPasswor}= req.body
    const   kol = await admin.findOne({email})
    if(!email){
        res.status(404).json({msg:'the user doest not exist'})
   }
   if(newPassword !== confimPasswor){
       res.status(404).json({msg:"the password doest not password: match"})
   }
   const you = await admin.updateOne({email:email}, {$set:{password:newPassword}})
    res.status(200).json({msg:"your password as been updated successfull"})
 }
 catch(e){
    console.log(e)
 }
}

module.exports = Pas