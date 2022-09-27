const generalRepo = require('../repository/general')

exports.findUser = async ({email = null, id = null}) => {
      return await generalRepo.findOne('users', '*', `email = '${email}' OR id = ${id}`)
}