const authModel = require('../auth/auth.model')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

exports.login = async (req, res, next) => {
      try {
            const {email, password} = req.body

            const user = await authModel.findUser({email})
            if (!user) {
                  return res.sendError('These credentials do not match our records !')
            }
            let checkPassword = await bcrypt.compare(
                  password,
                  user.password
            );
            if (!checkPassword) {
                  return res.sendError('These credentials do not match our records !')
            }
            let response = {
                  access_token : jwt.sign({_id: user.id}, process.env.ACCESS_TOKEN_SECRET, {
                        expiresIn: process.env.JWT_EXPIRES_IN
                  }),
                  user : user,
            }
            return res.sendSuccess(`Login success`, response)
      } catch (e) {
            console.log(e);
            return res.sendError(e.message)
      }
}