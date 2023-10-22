const jwt = require("jsonwebtoken")
const http = require("http-status-codes")

const verifyToken = (req, res, next) => {
    const secret = process.env.SECRET_KEY
    try {
      const token = req.cookie
      console.log(token)
      if (!token){
        return res.status(http.StatusCodes.UNAUTHORIZED).send("Access denied.")
      } else {
      const decode = jwt.verify(token, secret, (error, decoded)=>{
        if (error) {
            console.error('JWT verification failed:', error.message);
          } else {
            console.log('Decoded token:', decoded);
            req.user = decoded
          }
      })
      next()
      }
    } catch (error) {
      res.status(400).send("Invalid token")
    }
  }

  module.exports = verifyToken