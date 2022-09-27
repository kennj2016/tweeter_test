require('dotenv').config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");
const https = require("https");
let server = require('http').createServer(app);

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
      res.sendSuccess = (message, data = [], result = true) => {
            return res.status(200).send({
                  result: result,
                  message: message,
                  data: data,
            })
      }

      res.sendError = (message, code = 400, result = false) => {
            return res.status(code).send({
                  result: result,
                  message: message,
            })
      }
      next()
})


app.use(require('./v1/routes'))

app.use((req, res, next) => {
      return res.json({
            status: 404,
            message: 'Route not found!'
      })
});

module.exports = server