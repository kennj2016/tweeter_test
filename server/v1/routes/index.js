const express = require('express')
const routes = express.Router()

// v1
routes.use('/api/v1/auth', require('../auth/auth.route'))
routes.use('/api/v1/content', require('../content/content.route'))

module.exports = routes