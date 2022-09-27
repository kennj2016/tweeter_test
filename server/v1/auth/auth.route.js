const express = require('express')
const routes = express.Router()
const controller = require('./auth.controller')
const {validate} = require('../validation')
const { validateLogin} = require('./auth.validate')

routes.post('/login', validateLogin(), validate, controller.login)

module.exports = routes