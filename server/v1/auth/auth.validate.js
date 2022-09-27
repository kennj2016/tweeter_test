const { body } = require('express-validator')

exports.validateLogin = () => {
      return [
            body('email').not().isEmpty().withMessage('Email is missing'),
            body('password').not().isEmpty().withMessage('Password is missing'),
      ]
}