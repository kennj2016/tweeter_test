const { body } = require('express-validator')

exports.validateCreateContent = () => {
      return [
            body('description').not().isEmpty().withMessage('Tweet description is missing')
                  .isLength({ min: 5, max: 240 }).withMessage('Tweet description length min 5 and no more than 240 characters')
      ]
}