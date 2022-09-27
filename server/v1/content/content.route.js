const express = require('express')
const routes = express.Router()
const controller = require('./content.controller')
const {validate} = require('../validation')
const { validateCreateContent} = require('./content.validate')
const {verifyToken} = require('../middleware')

routes.post('/create-tweet', verifyToken,  validateCreateContent(), validate, controller.createTweet)
routes.get('/list-tweets', controller.listTweets)

module.exports = routes