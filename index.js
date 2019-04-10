const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const helmet = require('helmet')
const compression = require('compression')

const app = express()

const errorHandler = require('./src/middlewares/error-handler')
const notFoundHandler = require('./src/middlewares/not-found-handler')

const API = require('./src/config/api')
const DB = require('./src/config/database')
const CORS = require('./src/config/cors')

app.use(cors(CORS.OPTIONS))

app.use(helmet())
app.disable('x-powered-by')

app.use(compression())

app.use( bodyParser.json() )
app.use(express.static('static/public'))

let api = express.Router()
require('./src/config/controller')(api)

app.use('/api', api)

app.use(errorHandler)
app.use(notFoundHandler)

app.listen(API.API_PORT, (err)=>{
    if(err){
        console.log('\x1b[31m%s\x1b[0m', `[ERROR] Could not start the application...`) 
        console.log('\x1b[31m%s\x1b[0m', `[ERROR] ${err.message}`)
    }
    else console.log('\x1b[36m%s\x1b[0m', `Server is running on port ${API.API_PORT}...`)
})
